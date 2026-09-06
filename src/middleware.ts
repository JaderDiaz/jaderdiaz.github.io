import { defineMiddleware } from 'astro:middleware';

// public/_headers only applies to static asset responses (Cloudflare docs);
// on-demand routes (the /es/ redirect, /api/contact) are rendered by the
// Worker and need these same security headers set here instead.
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  );
  return response;
});
