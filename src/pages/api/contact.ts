import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactPayload {
  nombre?: string;
  correo?: string;
  tipo?: string;
  otro?: string;
  es_otro?: string;
  mensaje?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST: APIRoute = async ({ request }) => {
  let data: ContactPayload;

  try {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries()) as unknown as ContactPayload;
    }
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_payload' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const nombre = (data.nombre ?? '').toString().trim();
  const correo = (data.correo ?? '').toString().trim();
  const mensaje = (data.mensaje ?? '').toString().trim();
  const tipo = (data.tipo ?? '').toString().trim();
  const otro = (data.otro ?? '').toString().trim();
  const esOtro = (data.es_otro ?? '').toString().trim() === 'true';

  const errors: Record<string, string> = {};
  if (!nombre) errors.nombre = 'required';
  if (!correo || !isValidEmail(correo)) errors.correo = 'invalid';
  if (!mensaje) errors.mensaje = 'required';
  if (!tipo) errors.tipo = 'required';
  if (esOtro && !otro) errors.otro = 'required';

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ ok: false, errors }), {
      status: 422,
      headers: { 'content-type': 'application/json' },
    });
  }

  // NOTE: there is no email provider wired up yet. Wire a real transactional
  // email service (e.g. Resend) with its API key in an environment variable
  // before relying on this endpoint in production — for now it only logs
  // and acknowledges receipt.
  console.log('[contact]', {
    nombre,
    correo,
    tipo: tipo || null,
    otro: otro || null,
    mensaje,
    receivedAt: new Date().toISOString(),
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};
