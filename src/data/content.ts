import type { SiteContent } from '../types';

/**
 * Contenido editorial del sitio web profesional de Ibeth Camila Osorio Mora.
 * Redactado con base en docs/KNOWLEDGE_BASE.md en tono cálido, empático,
 * profesional, claro y sereno.
 */
export const siteContent: SiteContent = {
  brandName: 'Ibeth Camila Osorio Mora',
  brandSubtitle: 'Psicóloga · Infancia y Desarrollo',
  navCtaLabel: 'Agendar Cita',
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Crianza y Desarrollo', href: '#crianza-desarrollo' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    badge: 'Psicología Infantil, Adolescente y Familiar',
    title: 'Acompañar la infancia con respeto transforma',
    titleHighlight: 'el bienestar de toda la familia',
    subtitle:
      'Soy Ibeth Camila Osorio Mora, psicóloga especialista en infancia y desarrollo. Te ofrezco un espacio cercano, sereno y profesional para fortalecer los vínculos familiares, acompañar las emociones y transitar cada etapa con herramientas reales.',
    modalitiesLabel: 'Atención Virtual (desde cualquier lugar) y Presencial en Bogotá, Colombia',
    primaryCta: 'Agendar Cita por WhatsApp',
    secondaryCta: 'Explorar Servicios',
    trustNotes: [
      'Más de 10 años de experiencia',
      'Enfoque en crianza respetuosa',
      'Espacio cálido y confidencial',
    ],
  },

  parenting: {
    eyebrow: 'Crianza y Desarrollo',
    title: 'Por qué acompañar la infancia y la adolescencia marca la diferencia',
    intro:
      'Criar no consiste en hacerlo todo perfecto, sino en construir relaciones seguras donde niñas, niños y adolescentes se sientan escuchados, comprendidos y guiados. Cuando madres, padres y cuidadores cuentan con orientación clara y empática, la convivencia diaria se vuelve más tranquila y el desarrollo emocional florece con confianza.',
    quote:
      '«Detrás de cada conducta desafiante suele haber una necesidad emocional buscando ser comprendida con afecto y límites claros.»',
    pillars: [
      {
        id: 'vinculos-seguros',
        icon: 'shield-check',
        title: 'Vínculos que dan seguridad',
        description:
          'Un acompañamiento respetuoso fortalece la autoestima, la confianza y la manera en que niñas, niños y adolescentes se relacionan consigo mismos y con el mundo.',
      },
      {
        id: 'limites-con-afecto',
        icon: 'sun',
        title: 'Límites firmes y amorosos',
        description:
          'Es posible guiar y sostener normas claras en casa sin recurrir a gritos ni culpas, promoviendo la autonomía, el respeto mutuo y la regulación emocional.',
      },
      {
        id: 'acompanamiento-familiar',
        icon: 'users',
        title: 'Cada etapa tiene su ritmo',
        description:
          'Comprender los cambios propios de la niñez y la adolescencia permite responder con mayor calma ante transiciones escolares, hábitos cotidianos y momentos de crisis.',
      },
    ],
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Espacios pensados para acompañar a tu familia',
    subtitle:
      'Cada proceso se adapta a la edad, el momento vital y las necesidades particulares de cada niña, niño, adolescente y su red de cuidado.',
    cardCtaLabel: 'Consultar por este servicio',
    items: [
      {
        id: 'acompanamiento-infantil-adolescente',
        icon: 'heart-handshake',
        tag: 'Infancia y Adolescencia',
        title: 'Acompañamiento Psicológico Infantil y Adolescente',
        description:
          'Espacios seguros de escucha, expresión y regulación emocional adaptados a cada etapa del crecimiento, respetando los tiempos e intereses de cada niño o adolescente.',
        highlights: [
          'Reconocimiento y manejo saludable de las emociones',
          'Fortalecimiento de la autoestima y habilidades sociales',
          'Acompañamiento ante duelos, miedos o cambios familiares',
        ],
        whatsappPrompt:
          'Hola Camila, vi tu página web y me gustaría recibir información sobre el Acompañamiento Psicológico Infantil y Adolescente.',
      },
      {
        id: 'asesoria-crianza-respetuosa',
        icon: 'sprout',
        tag: 'Madres, Padres y Cuidadores',
        title: 'Asesoría a Padres en Crianza Respetuosa',
        description:
          'Herramientas prácticas y cotidianas para poner límites con afecto, mejorar la comunicación en casa y fortalecer el vínculo familiar sin culpas ni desgaste.',
        highlights: [
          'Estrategias respetuosas ante pataletas y conflictos cotidianos',
          'Acuerdos de crianza claros entre madres, padres y cuidadores',
          'Comunicación asertiva y escucha activa en la vida diaria',
        ],
        whatsappPrompt:
          'Hola Camila, vi tu página web y me gustaría conocer más sobre la Asesoría a Padres en Crianza Respetuosa.',
      },
      {
        id: 'etapas-del-desarrollo',
        icon: 'compass',
        tag: 'Transiciones Clave',
        title: 'Acompañamiento en Etapas del Desarrollo',
        description:
          'Orientación cercana en los momentos de transición más importantes de la infancia y la adolescencia, ayudando a comprender cada cambio con serenidad.',
        highlights: [
          'Construcción de rutinas, sueño, autonomía y hábitos saludables',
          'Adaptación escolar, cambios de colegio y desafíos académicos',
          'Transición a la preadolescencia y cambios emocionales',
        ],
        whatsappPrompt:
          'Hola Camila, vi tu página web y me gustaría consultar sobre el Acompañamiento en Etapas del Desarrollo.',
      },
      {
        id: 'talleres-procesos-pedagogicos',
        icon: 'book-open',
        tag: 'Familias e Instituciones',
        title: 'Talleres y Procesos Pedagógicos',
        description:
          'Espacios formativos dinámicos y participativos diseñados para familias, cuidadores, docentes e instituciones educativas que desean nutrir prácticas de cuidado respetuoso.',
        highlights: [
          'Escuelas de padres y encuentros reflexivos para familias',
          'Talleres vivenciales sobre crianza, emociones y buen trato',
          'Diseño pedagógico a la medida de comunidades e instituciones',
        ],
        whatsappPrompt:
          'Hola Camila, vi tu página web y me gustaría conocer más sobre los Talleres y Procesos Pedagógicos.',
      },
    ],
  },

  about: {
    eyebrow: 'Sobre Mí',
    title: 'Ibeth Camila Osorio Mora',
    roleSubtitle: 'Psicóloga Especialista en Infancia, Cultura y Desarrollo',
    paragraphs: [
      'Creo profundamente en una psicología cercana, humana y respetuosa, capaz de escuchar sin juzgar y de ofrecer herramientas comprensibles para la vida cotidiana de las familias.',
      'A lo largo de más de 10 años de trayectoria he acompañado a niñas, niños, adolescentes, mujeres y familias en procesos terapéuticos, trabajo comunitario, atención en crisis, diseño de procesos pedagógicos y fortalecimiento de vínculos afectivos.',
      'Mi propósito es caminar junto a madres, padres y cuidadores para que puedan mirar la infancia con mayor calma, comprender lo que sus hijos necesitan en cada etapa y construir hogares donde el afecto y los límites convivan en armonía.',
    ],
    currentRoleLabel: 'Experiencia actual',
    currentRoleTitle: 'Psicóloga en la Secretaría de la Mujer — Línea de Atención Púrpura',
    currentRoleDescription:
      'Brindo escucha activa, orientación psicosocial y acompañamiento en crisis con enfoque humano, empático y de protección.',
    educationTitle: 'Formación Académica',
    education: [
      {
        degree: 'Especialista en Infancia, Cultura y Desarrollo',
        institution: 'Universidad Distrital Francisco José de Caldas',
      },
      {
        degree: 'Psicóloga',
        institution: 'Universidad Católica de Colombia',
      },
    ],
    experienceBadgeValue: '+10 años',
    experienceBadgeLabel: 'acompañando infancias y familias',
    photoAlt: 'Retrato profesional de Ibeth Camila Osorio Mora, Psicóloga Especialista en Infancia y Desarrollo',
  },

  contact: {
    eyebrow: 'Cómo Agendar',
    title: 'Dar el primer paso es sencillo y cercano',
    subtitle:
      'Si sientes que tu familia o tu hijo necesitan un espacio de escucha y orientación, escríbeme directamente por WhatsApp. Conversaremos brevemente para encontrar la mejor opción para ustedes.',
    steps: [
      {
        number: '01',
        title: 'Escríbeme por WhatsApp',
        description:
          'Cuéntame en pocas líneas qué te motiva a consultar o sobre cuál servicio deseas recibir información.',
      },
      {
        number: '02',
        title: 'Definimos modalidad y horario',
        description:
          'Acordamos si prefieres atención virtual desde cualquier lugar o presencial en Bogotá, en un horario cómodo para ti.',
      },
      {
        number: '03',
        title: 'Iniciamos el acompañamiento',
        description:
          'Comenzamos un proceso cálido, confidencial y ajustado a las necesidades de tu hijo, tu familia o tu grupo.',
      },
    ],
    cardTitle: 'Agenda tu espacio de acompañamiento',
    cardDescription:
      'Responderé personalmente tu mensaje para resolver dudas iniciales y coordinar nuestra primera sesión.',
    modalitiesHeading: 'Modalidades disponibles',
    virtualLabel: 'Consulta Virtual — Desde cualquier ciudad o país',
    inPersonLabel: 'Consulta Presencial — Bogotá, Colombia',
    primaryCta: 'Escribir por WhatsApp',
    responseNote: 'Atención previa cita · Espacio confidencial y respetuoso',
  },

  footer: {
    tagline:
      'Acompañamiento psicológico cercano en infancia, adolescencia, crianza respetuosa y desarrollo familiar.',
    quickLinksTitle: 'Navegación',
    contactTitle: 'Contacto',
    copyrightNote: 'Todos los derechos reservados.',
  },

  floatingWhatsApp: {
    ariaLabel: 'Agendar cita o escribir por WhatsApp a Ibeth Camila Osorio Mora',
    tooltip: 'Escríbeme por WhatsApp',
  },
};
