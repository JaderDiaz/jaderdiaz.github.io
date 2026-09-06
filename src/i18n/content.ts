// Central content dictionary for the site, in Spanish (es, default/source)
// and English (en, translated from the design mockup's data-en attributes).
// Do not invent copy here — this mirrors jaderdiaz.com.html verbatim.

export type Lang = 'es' | 'en';

export const locales: Lang[] = ['es', 'en'];
export const defaultLocale: Lang = 'es';

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export interface StackColumnData {
  label: string;
  items: string[];
}

export interface ExperienceItemData {
  dateRange: string;
  role: string;
  company: string;
  description: string;
}

export interface ProjectItemData {
  title: string;
  description: string;
  tech: string;
  tags: 'web' | 'cloud' | 'bots';
}

export interface TestimonialItemData {
  quote: string;
  attribution: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    servicios: string;
    stack: string;
    experiencia: string;
    proyectos: string;
    sobreMi: string;
    contacto: string;
    menuOpen: string;
    menuClose: string;
  };
  themeToggle: { light: string; dark: string };
  hero: {
    availability: string;
    name: string;
    tagline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoLabel: string;
    photoCaption: string;
    stats: { label: string; value: string }[];
  };
  services: {
    eyebrow: string;
    intro: string;
    items: ServiceItem[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  stack: {
    eyebrow: string;
    columns: StackColumnData[];
  };
  experience: {
    eyebrow: string;
    items: ExperienceItemData[];
    education: string[];
  };
  projects: {
    eyebrow: string;
    pendingNote: string;
    filters: { key: 'all' | 'web' | 'cloud' | 'bots'; label: string }[];
    items: ProjectItemData[];
    screenshotCaption: string;
  };
  about: {
    eyebrow: string;
    paragraphs: string[];
    softSkills: string[];
  };
  testimonials: {
    eyebrow: string;
    pending: string;
    comingSoon: string;
    items: TestimonialItemData[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    infoLabels: { email: string; phone: string; social: string };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      projectType: string;
      projectTypes: string[];
      otherLabel: string;
      otherPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      successMessage: string;
      errorMessage: string;
      errorRequired: string;
      errorEmail: string;
    };
  };
  footer: {
    copyright: string;
    madeWithPrefix: string;
    madeWithSuffix: string;
    versionLabel: string;
  };
}

const es: SiteContent = {
  meta: {
    title: 'Jader Luis Diaz E. — Ingeniero de sistemas · Lidero equipos y proyectos de tecnología',
    description:
      'Lidero equipos y proyectos de tecnología de punta a punta, traduciendo necesidades de negocio en arquitectura y software que funciona. Amplia trayectoria combinando visión estratégica con ejecución técnica directa.',
  },
  nav: {
    servicios: 'servicios',
    stack: 'stack',
    experiencia: 'experiencia',
    proyectos: 'proyectos',
    sobreMi: 'sobre mí',
    contacto: 'contacto',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  themeToggle: { light: 'oscuro', dark: 'claro' },
  hero: {
    availability: 'Disponible para proyectos · Medellín, CO · Remoto',
    name: 'Jader Luis Diaz E.',
    tagline: 'Ingeniero de sistemas · Lidero equipos y proyectos de tecnología',
    description:
      'Lidero equipos y proyectos de tecnología de punta a punta: entiendo lo que tu negocio necesita, lo traduzco en arquitectura y hago que el software se construya, funcione y se mantenga en el tiempo. Amplia trayectoria combinando visión estratégica con ejecución técnica directa.',
    ctaPrimary: 'Hablemos de tu proyecto →',
    ctaSecondary: 'Ver mi experiencia',
    photoLabel: 'foto_perfil.jpg',
    photoCaption: 'encuadre: hombros y cabeza · mirada a cámara · fondo liso',
    stats: [
      { label: 'experiencia', value: 'Amplia trayectoria' },
      { label: 'rol actual', value: 'Fullstack · Línea Directa' },
      { label: 'certificación', value: 'Scrum Master' },
      { label: 'idiomas', value: 'ES nativo · EN B2' },
    ],
  },
  services: {
    eyebrow: '01 — SERVICIOS',
    intro: 'No solo escribo código: lidero el proyecto completo para que tu idea llegue a producción y se sostenga en el tiempo.',
    items: [
      {
        index: '01',
        title: 'Aplicaciones a medida',
        description:
          'Diseño, desarrollo e implanto el sistema que tu operación necesita, con PHP, Laravel, NodeJs, Python, Java o C#, y base de datos MySQL o MongoDB.',
      },
      {
        index: '02',
        title: 'Sitios y plataformas web',
        description:
          'Interfaces en React, React Native, Swift, Vue o Angular, aplicaciones de escritorio con C# o Electron, y sitios administrables con WordPress o Joomla cuando el equipo necesita editar sin depender de mí.',
      },
      {
        index: '03',
        title: 'Nube e infraestructura',
        description:
          'Servidores en AWS, Google Cloud y Azure, contenedores con Docker, hosting cPanel, dominios y DNS. Dejo el despliegue documentado.',
      },
      {
        index: '04',
        title: 'Mantenimiento y soporte',
        description:
          'Me hago cargo de aplicaciones que ya existen: corrijo errores, agrego módulos, optimizo rendimiento y documento lo que estaba suelto.',
      },
      {
        index: '05',
        title: 'Asesoría tecnológica',
        description:
          'Te ayudo a decidir qué construir, qué comprar y qué dejar quieto: elección de tecnología, costos, riesgos y una ruta realista antes de escribir código.',
      },
      {
        index: '06',
        title: 'Acompañamiento en procesos tecnológicos',
        description:
          'Acompaño a tu equipo en migraciones, despliegues y adopción de nuevas herramientas: prácticas Scrum, documentación y formación para que el cambio se sostenga.',
      },
      {
        index: '07',
        title: 'Análisis de sistemas y arquitecturas',
        description:
          'Reviso lo que ya tienes —modelo de datos, integraciones, infraestructura— y te entrego un diagnóstico con los cambios que rinden primero.',
      },
    ],
    ctaEyebrow: '08 / tu caso',
    ctaTitle: '¿Necesitas algo que no está en la lista?',
    ctaDescription: 'Cuéntame el problema y te asesoro →',
  },
  stack: {
    eyebrow: '02 — STACK',
    columns: [
      {
        label: 'Backend',
        items: [
          'PHP (Nativo, Yii2, Laravel)',
          'NodeJs',
          'Python (Flask)',
          'Java (Spring Boot)',
          'C#',
          'SQL, MySQL, MongoDB',
        ],
      },
      {
        label: 'Frontend y móvil',
        items: ['ReactJs', 'React Native', 'Swift (iOS nativo)', 'VueJs', 'Angular', 'HTML, CSS, jQuery'],
      },
      {
        label: 'Nube e infra',
        items: ['AWS, Google Cloud, Azure', 'Firebase', 'Docker, Linux, Windows', 'cPanel, dominios y DNS'],
      },
      {
        label: 'Escritorio y consola',
        items: [
          'Aplicaciones de escritorio en C#',
          'Electron',
          'Apps para iOS con Swift',
          'Programas de consola y TUIs',
        ],
      },
      {
        label: 'Proceso',
        items: ['Git', 'Scrum Master certificado', 'WordPress, Joomla', 'Documentación técnica'],
      },
    ],
  },
  experience: {
    eyebrow: '03 — EXPERIENCIA',
    items: [
      {
        dateRange: 'sep 2021 — hoy',
        role: 'Desarrollador Fullstack TI',
        company: 'Línea Directa',
        description:
          'Mantengo las aplicaciones en producción y desarrollo los módulos nuevos que pide el negocio: reviso especificaciones, corrijo defectos, optimizo rendimiento y documento cada entrega.',
      },
      {
        dateRange: 'nov 2019 — sep 2021',
        role: 'Desarrollador freelance',
        company: 'Clientes directos',
        description:
          'Analista y desarrollador de sistemas de información: aplicaciones a medida en PHP, Laravel, Angular, Vue y React, sitios en WordPress y Joomla, y administración de servidores en AWS, Google Cloud y cPanel.',
      },
      {
        dateRange: 'mar 2018 — oct 2019',
        role: 'Coordinador de desarrollo',
        company: 'Xegmenta S.A.S.',
        description:
          'Coordiné el equipo y desarrollé soluciones en NodeJs, Express, VueJS, MongoDB, PHP y Laravel, software de escritorio en C# para monitoreo de televisores, bots con Dialogflow y servidores Linux en la nube.',
      },
      {
        dateRange: 'may 2014 — feb 2018',
        role: 'Desarrollador de software',
        company: 'InterServicios S.A.S.',
        description:
          'Desarrollo y soporte de los productos del sector inmobiliario: análisis y diseño de bases de datos, construcción de aplicaciones web, instalación en ambientes de clientes y atención de incidentes.',
      },
    ],
    education: [
      'Ingeniería de Sistemas · Politécnico Grancolombiano · 2018–2021',
      'Tecnólogo en Análisis y Desarrollo · SENA · 2015–2017',
      'Scrum Foundation · Scrum Master',
    ],
  },
  projects: {
    eyebrow: '04 — PROYECTOS',
    pendingNote: 'contenido pendiente · reemplazar con casos reales',
    filters: [
      { key: 'all', label: 'todos' },
      { key: 'web', label: 'web' },
      { key: 'cloud', label: 'nube' },
      { key: 'bots', label: 'bots' },
    ],
    items: [
      {
        title: 'Plataforma inmobiliaria',
        description: 'Una línea sobre el problema y el resultado.',
        tech: 'PHP · Laravel · MySQL',
        tags: 'web',
      },
      {
        title: 'Monitoreo de pantallas',
        description: 'Una línea sobre el problema y el resultado.',
        tech: 'C# · Linux · AWS',
        tags: 'cloud',
      },
      {
        title: 'Bot de atención',
        description: 'Una línea sobre el problema y el resultado.',
        tech: 'NodeJs · Dialogflow',
        tags: 'bots',
      },
    ],
    screenshotCaption: 'captura del proyecto 1200×750',
  },
  about: {
    eyebrow: '05 — SOBRE MÍ',
    paragraphs: [
      'Ingeniero de Sistemas apasionado por liderar proyectos y equipos, adaptarme a nuevas industrias y convertir las ideas de mis clientes en soluciones tecnológicas reales.',
      'He consolidado mi carrera evolucionando desde la programación pura hasta el liderazgo técnico y la gestión de equipos, resolviendo retos de negocio muy diversos (sistemas contables, transcodificación de video, infraestructura en la nube). Sostengo ese liderazgo con una regla de oro: entregar siempre productos bien estructurados y documentados, para que cada proyecto crezca de forma autónoma sin depender de mí.',
    ],
    softSkills: [
      'Liderazgo',
      'Trabajo en equipo',
      'Resolución de problemas',
      'Autoaprendizaje',
      'Comunicación asertiva',
      'Escucha activa',
      'Enseñanza',
    ],
  },
  testimonials: {
    eyebrow: '06 — TESTIMONIOS',
    pending: 'pendiente',
    // TODO: replace with real client/employer quotes once collected — see
    // AboutAndTestimonials.astro, which renders this placeholder while `items` is empty.
    comingSoon: 'Aún no publico testimonios aquí — pronto sumaré los de clientes y equipos con los que ya trabajé.',
    items: [],
  },
  contact: {
    eyebrow: '07 — CONTACTO',
    title: 'Cuéntame qué<br />necesitas construir.',
    description: 'Respondo el mismo día. Si prefieres, escríbeme directo por correo o WhatsApp.',
    infoLabels: { email: 'email', phone: 'tel', social: 'redes' },
    form: {
      name: 'nombre',
      namePlaceholder: 'Jader Diaz',
      email: 'correo',
      emailPlaceholder: 'tu@empresa.com',
      projectType: 'tipo de proyecto',
      projectTypes: [
        'App a medida',
        'Sitio web',
        'Nube / soporte',
        'Contratación',
        'Mantenimiento y soporte',
        'Asesoría tecnológica',
        'Acompañamiento de procesos',
        'Análisis y arquitectura',
        'Otro',
      ],
      otherLabel: 'Otro',
      otherPlaceholder: '¿Qué necesitas? Descríbelo en una línea.',
      message: 'mensaje',
      messagePlaceholder: 'Cuéntame el contexto y el plazo.',
      submit: 'Enviar mensaje →',
      successMessage: "Mensaje enviado. Te respondo dentro del día.",
      errorMessage: 'Algo salió mal. Intenta de nuevo o escríbeme directo por correo.',
      errorRequired: 'Este campo es obligatorio.',
      errorEmail: 'Ingresa un correo válido.',
    },
  },
  footer: {
    copyright: '© 2026 Jader L. Diaz E.',
    madeWithPrefix: 'Hecho con',
    madeWithSuffix: 'en Medellín, Colombia',
    versionLabel: 'versión',
  },
};

const en: SiteContent = {
  meta: {
    title: 'Jader Luis Diaz E. — Systems engineer · Leading technology teams and projects',
    description:
      'I lead technology teams and projects end to end, translating business needs into architecture and software that works. Extensive track record combining strategic vision with hands-on technical execution.',
  },
  nav: {
    servicios: 'services',
    stack: 'stack',
    experiencia: 'experience',
    proyectos: 'work',
    sobreMi: 'about',
    contacto: 'contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  themeToggle: { light: 'dark', dark: 'light' },
  hero: {
    availability: 'Available for projects · Medellín, CO · Remote',
    name: 'Jader Luis Diaz E.',
    tagline: 'Systems engineer · Leading technology teams and projects',
    description:
      'I lead technology teams and projects end to end: I understand what the business needs, translate it into architecture, and make sure the software gets built, works, and stays maintainable. Extensive track record combining strategic vision with hands-on technical execution.',
    ctaPrimary: "Let's talk about your project →",
    ctaSecondary: 'See my experience',
    photoLabel: 'foto_perfil.jpg',
    photoCaption: 'framing: head and shoulders · look at camera · plain background',
    stats: [
      { label: 'experience', value: 'Extensive track record' },
      { label: 'current role', value: 'Fullstack · Línea Directa' },
      { label: 'certification', value: 'Scrum Master' },
      { label: 'languages', value: 'ES native · EN B2' },
    ],
  },
  services: {
    eyebrow: '01 — SERVICES',
    intro: "I don't just write code: I lead the whole project so your idea reaches production and holds up over time.",
    items: [
      {
        index: '01',
        title: 'Custom applications',
        description:
          'I design, build and deploy the system your operation needs, with PHP, Laravel, NodeJs, Python, Java or C#, and a MySQL or MongoDB database.',
      },
      {
        index: '02',
        title: 'Websites and web platforms',
        description:
          'Interfaces in React, React Native, Swift, Vue or Angular, desktop apps with C# or Electron, and WordPress or Joomla sites when the team needs to edit without depending on me.',
      },
      {
        index: '03',
        title: 'Cloud and infrastructure',
        description:
          'Servers on AWS, Google Cloud and Azure, Docker containers, cPanel hosting, domains and DNS. I leave the deployment documented.',
      },
      {
        index: '04',
        title: 'Maintenance and support',
        description:
          'I take over existing applications: fix defects, add modules, improve performance and document what was left loose.',
      },
      {
        index: '05',
        title: 'Technology advisory',
        description:
          'I help you decide what to build, what to buy and what to leave alone: technology choices, cost, risks and a realistic roadmap before anyone writes code.',
      },
      {
        index: '06',
        title: 'Support through technology processes',
        description:
          'I walk with your team through migrations, deployments and new tools: Scrum practices, documentation and training so the change actually sticks.',
      },
      {
        index: '07',
        title: 'Systems and architecture analysis',
        description:
          'I review what you already have — data model, integrations, infrastructure — and hand you a diagnosis with the changes that pay off first.',
      },
    ],
    ctaEyebrow: '08 / your case',
    ctaTitle: 'Something else in mind?',
    ctaDescription: "Tell me the problem — I'll advise you →",
  },
  stack: {
    eyebrow: '02 — STACK',
    columns: [
      {
        label: 'Backend',
        items: [
          'PHP (Nativo, Yii2, Laravel)',
          'NodeJs',
          'Python (Flask)',
          'Java (Spring Boot)',
          'C#',
          'SQL, MySQL, MongoDB',
        ],
      },
      {
        label: 'Frontend & mobile',
        items: ['ReactJs', 'React Native', 'Swift (native iOS)', 'VueJs', 'Angular', 'HTML, CSS, jQuery'],
      },
      {
        label: 'Cloud & infra',
        items: ['AWS, Google Cloud, Azure', 'Firebase', 'Docker, Linux, Windows', 'cPanel, domains and DNS'],
      },
      {
        label: 'Desktop & console',
        items: [
          'C# desktop applications',
          'Electron',
          'iOS apps with Swift',
          'Console programs and TUIs',
        ],
      },
      {
        label: 'Process',
        items: ['Git', 'Certified Scrum Master', 'WordPress, Joomla', 'Technical documentation'],
      },
    ],
  },
  experience: {
    eyebrow: '03 — EXPERIENCE',
    items: [
      {
        dateRange: 'sep 2021 — present',
        role: 'Fullstack software engineer',
        company: 'Línea Directa',
        description:
          'I keep production applications running and build the new modules the business asks for: reviewing specifications, fixing defects, improving performance and documenting every release.',
      },
      {
        dateRange: 'nov 2019 — sep 2021',
        role: 'Freelance developer',
        company: 'Direct clients',
        description:
          'Analyst and information systems developer: custom applications in PHP, Laravel, Angular, Vue and React, WordPress and Joomla sites, and server administration on AWS, Google Cloud and cPanel.',
      },
      {
        dateRange: 'mar 2018 — oct 2019',
        role: 'Development coordinator',
        company: 'Xegmenta S.A.S.',
        description:
          'I coordinated the team and built solutions in NodeJs, Express, VueJS, MongoDB, PHP and Laravel, C# desktop software for television monitoring, Dialogflow bots and Linux cloud servers.',
      },
      {
        dateRange: 'may 2014 — feb 2018',
        role: 'Software developer',
        company: 'InterServicios S.A.S.',
        description:
          'Development and support of real-estate products: database analysis and design, web application development, installation in client environments and incident handling.',
      },
    ],
    education: [
      'Ingeniería de Sistemas · Politécnico Grancolombiano · 2018–2021',
      'Tecnólogo en Análisis y Desarrollo · SENA · 2015–2017',
      'Scrum Foundation · Scrum Master',
    ],
  },
  projects: {
    eyebrow: '04 — WORK',
    pendingNote: 'placeholder · replace with real case studies',
    filters: [
      { key: 'all', label: 'all' },
      { key: 'web', label: 'web' },
      { key: 'cloud', label: 'cloud' },
      { key: 'bots', label: 'bots' },
    ],
    items: [
      {
        title: 'Real-estate platform',
        description: 'One line about the problem and the outcome.',
        tech: 'PHP · Laravel · MySQL',
        tags: 'web',
      },
      {
        title: 'Screen monitoring',
        description: 'One line about the problem and the outcome.',
        tech: 'C# · Linux · AWS',
        tags: 'cloud',
      },
      {
        title: 'Support bot',
        description: 'One line about the problem and the outcome.',
        tech: 'NodeJs · Dialogflow',
        tags: 'bots',
      },
    ],
    screenshotCaption: 'project screenshot 1200×750',
  },
  about: {
    eyebrow: '05 — ABOUT',
    paragraphs: [
      'A systems engineer passionate about leading projects and teams, adapting to new industries, and turning my clients\' ideas into real technology solutions.',
      'I have built my career evolving from pure programming to technical leadership and team management, solving business challenges across a wide range of industries (accounting systems, video transcoding, cloud infrastructure). I back that leadership with one golden rule: always deliver well-structured, thoroughly documented products, so every project can grow independently without relying on me.',
    ],
    softSkills: [
      'Leadership',
      'Teamwork',
      'Problem solving',
      'Self-learning',
      'Assertive communication',
      'Active listening',
      'Teaching',
    ],
  },
  testimonials: {
    eyebrow: '06 — TESTIMONIALS',
    pending: 'pending',
    comingSoon: "No published testimonials yet — I'll be adding feedback from real clients and teams soon.",
    items: [],
  },
  contact: {
    eyebrow: '07 — CONTACT',
    title: 'Tell me what<br />you need to build.',
    description: "I reply the same day. If you prefer, write to me directly by email or WhatsApp.",
    infoLabels: { email: 'email', phone: 'tel', social: 'social' },
    form: {
      name: 'name',
      namePlaceholder: 'Jader Diaz',
      email: 'email',
      emailPlaceholder: 'you@company.com',
      projectType: 'project type',
      projectTypes: [
        'Custom app',
        'Website',
        'Cloud / support',
        'Hiring',
        'Maintenance and support',
        'Technology advisory',
        'Process support',
        'Analysis and architecture',
        'Other',
      ],
      otherLabel: 'Other',
      otherPlaceholder: 'What do you need? Describe it in one line.',
      message: 'message',
      messagePlaceholder: 'Tell me the context and the timeline.',
      submit: 'Send message →',
      successMessage: "Message sent. I'll reply within the day.",
      errorMessage: 'Something went wrong. Please try again or email me directly.',
      errorRequired: 'This field is required.',
      errorEmail: 'Enter a valid email address.',
    },
  },
  footer: {
    copyright: '© 2026 Jader L. Diaz E.',
    madeWithPrefix: 'Made with',
    madeWithSuffix: 'in Medellín, Colombia',
    versionLabel: 'version',
  },
};

const dictionaries: Record<Lang, SiteContent> = { es, en };

export function getContent(lang: Lang): SiteContent {
  return dictionaries[lang];
}

/** Path segment (no leading/trailing slash) of the counterpart-locale page, given a lang. */
export function otherLocale(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
