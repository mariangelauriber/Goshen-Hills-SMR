/* ==========================================================================
   GOSHEN HILLS — INTERACTION & VIEW TRANSITIONS (V2.2 - Conversión)
   ========================================================================== */

// ACTUALIZAR: cambiar disponible: false en las villas ya vendidas/reservadas
const VILLAS = [
  {
    id: 'luna', nombre: 'Villa Luna', casa: 'Casa 01', concepto: 'Contemplación', disponible: false,
    tagline: 'La pieza icónica de la colección. La villa que dio origen a Goshen.',
    descripcion: 'El logo de Goshen Hills nació de la vista nocturna desde su terraza: la luna creciente reflejada sobre el horizonte caribeño. Está al extremo oriental la colección, donde la geometría arquitectónica enmarca tanto el atardecer sobre el mar como la luna llena cada mes.',
    para_quienes: 'Para quien privilegia el ritual sobre la urgencia. Ideal para quienes encuentran en la introspección y el silencio nocturno su verdadera esencia.',
    area: '235.52', niveles: '3', alcobas: '3', extra: 'Terraza 31.42 m²',
    planta: './assets/images/villa-luna.webp'
  },
  {
    id: 'brisa', nombre: 'Villa Brisa', casa: 'Casa 02', concepto: 'Movimiento', disponible: true,
    tagline: 'La brisa cruzada de la ladera contenida en la villa más admirable de Goshen.',
    descripcion: 'Diseñada a partir de una geometría arquitectónica que captura y canaliza la brisa del Caribe, esta villa permite prescindir de climatización activa la mayor parte del año gracias a su sistema de ventilación cruzada natural.',
    para_quienes: 'Para quienes fluyen con el entorno y valoran la renovación constante del aire en sus espacios.',
    area: '220.28', niveles: '3', alcobas: '3', extra: 'Terraza 36.03 m²',
    planta: './assets/images/villa-brisa.webp'
  },
  {
    id: 'aurora', nombre: 'Villa Aurora', casa: 'Casa 03', concepto: 'Renacimiento', disponible: true,
    tagline: 'Una relación privilegiada con el amanecer sobre el Caribe.',
    descripcion: 'La única villa de la colección donde el amanecer entra directamente al espacio social. Veintitrés minutos de luz dorada matinal sobre la sala-comedor cada día. Su terraza de 38.33 m² es la más amplia de las posteriores.',
    para_quienes: 'Para aquel que despierta antes que el sol. Quien atesora el ritual de la mañana: el aroma del café, el primer destello de claridad y la paz absoluta antes de que el mundo despierte.',
    area: '219.79', niveles: '3', alcobas: '3', extra: 'Terraza 38.33 m²',
    planta: './assets/images/villa-aurora.webp'
  },
  {
    id: 'celeste', nombre: 'Villa Celeste', casa: 'Casa 04', concepto: 'Amplitud', disponible: true,
    tagline: 'El cielo caribeño como protagonista silencioso.',
    descripcion: 'La perspectiva más abierta al cielo de la colección. Hall de alcobas de 16.42 m² y baño principal con vistas privilegiadas. La luz cenital mediodía cae sobre el espacio social sin obstrucción.',
    para_quienes: 'Para aquel que requiere la libertad de un techo elevado y la pureza del firmamento. Es para quien encuentra mayor significado en la lectura del cielo que en la del horizonte.',
    area: '223.43', niveles: '3', alcobas: '3', extra: 'Terraza 31.52 m²',
    planta: './assets/images/villa-celeste.webp'
  },
  {
    id: 'horizonte', nombre: 'Villa Horizonte', casa: 'Casa 05', concepto: 'Expansión', disponible: true,
    tagline: 'El horizonte infinito del Caribe, como arte enmarcado.',
    descripcion: 'La más amplia de la fila posterior. Su sala social de 53.03 m² y su hall de alcobas de 21.08 m² están concebidos como espacios de recibimiento. El ventanal principal opera como pieza de pintura horizontal del mar Caribe.',
    para_quienes: 'Para aquel que encuentra en la distancia la claridad necesaria para sus pensamientos. Para quien habita con la mirada puesta en la inmensidad del horizonte.',
    area: '232.93', niveles: '3', alcobas: '3', extra: 'Terraza 29.73 m²',
    planta: './assets/images/villa-horizonte.webp'
  },
  {
    id: 'serena', nombre: 'Villa Serena', casa: 'Casa 06', concepto: 'Reposo', disponible: true,
    tagline: 'La calma del Caribe contenida en una residencia elevada.',
    descripcion: 'La villa más cercana a la zona social. Posición de inicio de la colección posterior: el punto donde la ladera comienza a ascender y el silencio se anuncia. Su tipología prioriza la sombra arquitectónica controlada y la respiración del espacio social.',
    para_quienes: 'Para aquel que ha superado la necesidad de validación externa y reconoce que ha alcanzado su lugar. Es para quien comprende que la serenidad no es una meta, sino su propia esencia.',
    area: '211.71', niveles: '3', alcobas: '3', extra: 'Terraza 31.78 m²',
    planta: './assets/images/villa-serena.webp'
  },
  {
    id: 'coral', nombre: 'Villa Coral', casa: 'Casa 07', concepto: 'Vitalidad', disponible: true,
    tagline: 'El ecosistema marino caribeño como referencia estética.',
    descripcion: 'Cierre de la fila frontal. Vitalidad cromática inspirada en la biodiversidad submarina del Caribe colombiano. Su patio interior de 38.23 m² es el segundo más amplio de la fila.',
    para_quienes: 'Diseñada para quienes no se conforman con observar el mar, sino que anhelan una conexión profunda y activa con su ecosistema. Quien prioriza la vitalidad y la energía activa por encima del reposo.',
    area: '259.03', niveles: '3', alcobas: '3', extra: 'Patio 38.23 m²',
    planta: './assets/images/villa-coral.webp'
  },
  {
    id: 'palma', nombre: 'Villa Palma', casa: 'Casa 08', concepto: 'Tropicalidad', disponible: true,
    tagline: 'Las palmeras del trópico integradas en la experiencia cotidiana.',
    descripcion: 'Vegetación tropical inmediata. La proximidad a las palmas envuelve el espacio social con sombra natural durante las horas centrales del día y aporta una huella aromática de savia y yodo marino.',
    para_quienes: 'Ideal para quien busca la esencia de un trópico auténtico, no el trópico decorativo. Quien valora la sombra como pieza arquitectónica.',
    area: '243.60', niveles: '3', alcobas: '3', extra: 'Patio 27.01 m²',
    planta: './assets/images/villa-palma.webp'
  },
  {
    id: 'ambar', nombre: 'Villa Ámbar', casa: 'Casa 09', concepto: 'Plenitud', disponible: false,
    tagline: 'La residencia del atardecer. La mejor Golden Hour vespertina de la colección.',
    descripcion: 'Su nombre nació del color que el sol deja sobre su terraza cada tarde a las 17:42. La geometría de la fachada frontal y su orientación están calibradas para capturar el ámbar más profundo del día sobre el horizonte.',
    para_quienes: 'Para aquel que encuentra en el ocaso una culminación vital y no simplemente como un final. Para quien habita el día con la mirada puesta en el horizonte vespertino.',
    area: '236.21', niveles: '3', alcobas: '3', extra: 'Patio 23.97 m²',
    planta: './assets/images/villa-ambar.webp'
  },
  {
    id: 'marina', nombre: 'Villa Marina', casa: 'Casa 10', concepto: 'Inmersión', disponible: true,
    tagline: 'El mar como protagonista más próximo.',
    descripcion: 'Proximidad acústica al sonido del oleaje. Su tipología frontal con plantas que descienden lleva el espacio social al mayor punto de contacto sensorial con el mar Caribe.',
    para_quienes: 'Ideal para quien desea que el sonido del mar sea su primer pensamiento al despertar, integrando el entorno sin ningún filtro arquitectónico que medie entre el descanso y el oleaje.',
    area: '240.18', niveles: '3', alcobas: '3', extra: 'Patio 29.04 m²',
    planta: './assets/images/villa-marina.webp'
  },
  {
    id: 'sierra', nombre: 'Villa Sierra', casa: 'Casa 11', concepto: 'Arraigo', disponible: true,
    tagline: 'El diálogo entre la Sierra Nevada y el Caribe.',
    descripcion: 'La villa más amplia de la colección, junto a la zona social. Su patio privado de 74.98 m² es el más grande y opera como una extensión orgánica del espacio de convivencia. La única villa donde la majestuosidad de la Sierra Nevada y el mar conviven en un solo plano visual.',
    para_quienes: 'Para quien prioriza la conexión orgánica con el entorno natural. Es la elección de quien necesita sentir el paisaje antes que el espectáculo.',
    area: '289.87', niveles: '3', alcobas: '3', extra: 'Patio 74.98 m²',
    planta: './assets/images/villa-sierra.webp'
  }
];

/* -------------------------------------------------------------------------- */
/* ANALYTICS — wrapper seguro para GA4                                        */
/* Reemplazar G-XXXXXXXXXX en index.html con el Measurement ID real de GA4    */
/* -------------------------------------------------------------------------- */
function trackEvent(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params || {});
  }
}

// Scroll depth — dispara en 25%, 50%, 75%, 90%
function initScrollDepth() {
  const thresholds = [25, 50, 75, 90];
  const fired = new Set();

  window.addEventListener('scroll', () => {
    const scrolled = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    thresholds.forEach(t => {
      if (scrolled >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent('scroll_depth', { depth_percent: t });
      }
    });
  }, { passive: true });
}

// Tracking de clicks en todos los CTAs de WhatsApp (data-cta identifica la ubicación)
function initCTATracking() {
  document.querySelectorAll('.cta-whatsapp').forEach(el => {
    el.addEventListener('click', () => {
      trackEvent('whatsapp_click', { cta_location: el.dataset.cta || 'unknown' });
    });
  });
}

// Fallback de imágenes rotas
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.src = './assets/images/pool-day.webp';
  }
}, true);

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  initReveal();
  initFAQ();
  initForm();
  initNavbarScroll();
  initScrollDepth();
  initCTATracking();
  initExitIntent();
  initMobileCTA();
  trackEvent('page_view', { page_title: document.title });
});

/* -------------------------------------------------------------------------- */
/* 1. NAVBAR SCROLL                                                           */
/* -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial
}

/* -------------------------------------------------------------------------- */
/* 2. SCROLL REVEAL                                                           */
/* -------------------------------------------------------------------------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-img').forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------------------- */
/* 3. RENDER GRID & VIEW TRANSITIONS                                          */
/* -------------------------------------------------------------------------- */
let currentVillaId = null;

function renderGrid() {
  const grid = document.getElementById('villas-grid');
  if (!grid) return;

  const staggerDelays = [0, 0.12, 0.24];
  grid.innerHTML = VILLAS.map((v, index) => {
    const disponible = v.disponible !== false;
    const badgeClass = disponible ? 'disponible' : 'reservada';
    const badgeText = disponible ? 'Disponible' : 'Reservada';
    const cardClass = disponible ? '' : ' reservada-card';
    const clickable = disponible ? `tabindex="0" role="button"` : `tabindex="-1" aria-disabled="true"`;
    const staggerDelay = staggerDelays[index % 3];
    return `
    <article class="villa-card reveal${cardClass}" data-id="${v.id}" ${clickable} aria-label="Ver detalles de ${v.nombre}" style="transition-delay: ${staggerDelay}s">
      <div class="villa-card-image-wrapper">
        <img src="./assets/images/villa-${v.id}-render.webp" alt="${v.nombre} — render arquitectónico, Goshen Hills, Santa Marta" class="villa-card-img" id="img-${v.id}" loading="lazy">
      </div>
      <div class="villa-card-info">
        <span class="villa-badge ${badgeClass}">${badgeText}</span>
        <span class="eyebrow">${v.casa} · ${v.concepto}</span>
        <h3 class="villa-card-title">${v.nombre}</h3>
        <p class="villa-card-specs">${v.area} m² · ${v.alcobas} Alcobas</p>
      </div>
    </article>
  `;
  }).join('');

  document.querySelectorAll('.villa-card:not(.reservada-card)').forEach(card => {
    card.addEventListener('click', () => openModalWithTransition(card.dataset.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalWithTransition(card.dataset.id);
      }
    });
  });
}

function openModalWithTransition(id) {
  currentVillaId = id;
  const villa = VILLAS.find(v => v.id === id);
  if (!villa) return;

  trackEvent('villa_modal_open', { villa_name: villa.nombre, villa_id: id });

  const gallery = document.getElementById('overlay-gallery');

  const fullGallery = [
    `./assets/images/villa-${id}-render.webp`,
    './assets/images/salaInteriorVista.jpg',
    './assets/images/interior-bano.png',
    './assets/images/interior-comedor.png',
    './assets/images/interior-cocina.png',
    './assets/images/interior-hall.png',
    './assets/images/interior-habitacion-ppal.png',
    './assets/images/interior-habitacion-aux.png',
    './assets/images/interior-terraza.png',
    './assets/images/interior-patio.png',
    villa.planta
  ];

  gallery.innerHTML = fullGallery.map((src, index) => `
    <img src="${src}" alt="Goshen Hills ${villa.nombre} - ${index + 1}" class="gallery-image" loading="lazy">
  `).join('');

  const sourceImg = document.getElementById(`img-${id}`);
  const dialog = document.getElementById('villa-overlay');

  document.getElementById('modal-eyebrow').textContent = `${villa.casa} · ${villa.concepto}`;
  document.getElementById('modal-title').textContent = villa.nombre;
  document.getElementById('modal-tagline').textContent = villa.tagline;

  document.getElementById('modal-desc').innerHTML = `
    <div class="desc-text">${villa.descripcion}</div>
    <div class="para-quienes">
      <strong class="text-cedar font-italic" style="font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;">Perfil de habitante</strong>
      <p class="text-midnight-60">${villa.para_quienes}</p>
    </div>
  `;

  document.getElementById('modal-specs').innerHTML = `
    <div class="spec-item"><span class="spec-label">Área Total</span><span class="spec-val">${villa.area} m²</span></div>
    <div class="spec-item"><span class="spec-label">Niveles</span><span class="spec-val">${villa.niveles}</span></div>
    <div class="spec-item"><span class="spec-label">Alcobas</span><span class="spec-val">${villa.alcobas}</span></div>
    <div class="spec-item"><span class="spec-label">Espacio Exterior</span><span class="spec-val">${villa.extra || 'Patio/Terraza'}</span></div>
  `;

  const ctaBtn = document.getElementById('modal-cta-btn');
  const villaMsg = `Hola, estuve revisando la ${villa.nombre} en la web de Goshen Hills. Me gustaría recibir el dossier privado y conocer la disponibilidad actual.`;
  ctaBtn.href = `https://wa.me/573004000707?text=${encodeURIComponent(villaMsg)}`;
  ctaBtn.setAttribute('rel', 'noopener noreferrer');
  ctaBtn.setAttribute('target', '_blank');
  ctaBtn.onclick = () => trackEvent('whatsapp_click', { cta_location: 'modal', villa_name: villa.nombre });

  if (!document.startViewTransition) {
    dialog.showModal();
    document.body.classList.add('overflow-hidden');
    return;
  }

  sourceImg.style.viewTransitionName = 'active-villa-image';

  document.startViewTransition(() => {
    sourceImg.style.viewTransitionName = '';
    dialog.showModal();
    document.body.classList.add('overflow-hidden');
  });
}

// Close logic
document.getElementById('btn-close').addEventListener('click', closeModal);
document.getElementById('villa-overlay').addEventListener('cancel', (e) => {
  e.preventDefault();
  closeModal();
});

function closeModal() {
  const dialog = document.getElementById('villa-overlay');
  if (!dialog.open) return;

  const villaIdOnClose = currentVillaId;

  if (!document.startViewTransition) {
    dialog.close();
    document.body.classList.remove('overflow-hidden');
    currentVillaId = null;
    return;
  }

  const transition = document.startViewTransition(() => {
    dialog.close();
    document.body.classList.remove('overflow-hidden');

    if (villaIdOnClose) {
      const sourceImg = document.getElementById(`img-${villaIdOnClose}`);
      if (sourceImg) sourceImg.style.viewTransitionName = 'active-villa-image';
    }
  });

  transition.finished.finally(() => {
    if (villaIdOnClose) {
      const sourceImg = document.getElementById(`img-${villaIdOnClose}`);
      if (sourceImg) sourceImg.style.viewTransitionName = '';
    }
    currentVillaId = null;
  });
}

/* -------------------------------------------------------------------------- */
/* 4. CONTACT FORM                                                            */
/* -------------------------------------------------------------------------- */
function initForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const wa = document.getElementById('whatsapp').value.trim();
    const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    const villa = document.getElementById('villa-interes').value;
    const privacidad = document.getElementById('check-privacidad').checked;
    const datos = document.getElementById('check-datos').checked;
    const btn = form.querySelector('.form-btn');
    const msg = document.getElementById('form-msg');

    if (!nombre || !wa || !villa) {
      msg.textContent = 'Por favor complete todos los campos antes de continuar.';
      return;
    }
    if (!privacidad || !datos) {
      msg.textContent = 'Por favor acepte ambas condiciones para continuar.';
      return;
    }

    btn.textContent = 'Procesando...';
    btn.disabled = true;
    msg.textContent = '';

    trackEvent('form_submit', { villa_interest: villa });
    sessionStorage.setItem('gh_converted', '1');

    const villaTexto = villa === 'Sin decidir aún' ? 'conocer la colección Goshen Hills' : `la ${villa}`;
    const emailTexto = email ? ` Mi correo: ${email}.` : '';
    const texto = `Hola, soy ${nombre} (WA: ${wa}).${emailTexto} Acabo de solicitar información sobre ${villaTexto} desde la web. Quedo atento a su respuesta.`;
    const waUrl = `https://wa.me/573004000707?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
      msg.textContent = `Gracias, ${nombre}. Le abriremos WhatsApp para continuar la conversación.`;
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        form.reset();
        btn.disabled = false;
        btn.textContent = 'SOLICITAR CONVERSACIÓN PRIVADA';
        msg.textContent = '';
      }, 1400);
    }, 700);
  });
}

/* -------------------------------------------------------------------------- */
/* 6. EXIT INTENT                                                             */
/* -------------------------------------------------------------------------- */
function initExitIntent() {
  const bar = document.getElementById('exit-intent');
  if (!bar) return;

  const SESSION_SHOWN = 'gh_exit_shown';
  const SESSION_CONVERTED = 'gh_converted';

  if (sessionStorage.getItem(SESSION_SHOWN) || sessionStorage.getItem(SESSION_CONVERTED)) return;

  let idleTimer;

  function showBar() {
    if (sessionStorage.getItem(SESSION_SHOWN) || sessionStorage.getItem(SESSION_CONVERTED)) return;
    sessionStorage.setItem(SESSION_SHOWN, '1');
    bar.hidden = false;
    requestAnimationFrame(() => bar.classList.add('visible'));
    trackEvent('exit_intent_shown', {});
  }

  function hideBar() {
    bar.classList.remove('visible');
    setTimeout(() => { bar.hidden = true; }, 500);
  }

  // Desktop: mouse saliendo por arriba (hacia barra del navegador)
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10) showBar();
  });

  // Mobile/fallback: 90 segundos sin conversión
  idleTimer = setTimeout(showBar, 90000);

  bar.querySelector('.exit-intent-close').addEventListener('click', hideBar);

  // Marcar conversión: cancelar exit-intent
  document.querySelectorAll('.cta-whatsapp').forEach(el => {
    el.addEventListener('click', () => {
      sessionStorage.setItem(SESSION_CONVERTED, '1');
      clearTimeout(idleTimer);
      hideBar();
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 7. MOBILE STICKY CTA                                                       */
/* -------------------------------------------------------------------------- */
function initMobileCTA() {
  const bar = document.getElementById('mobile-cta-bar');
  if (!bar || window.innerWidth > 768) return;

  const heroHeight = window.innerHeight * 0.8;

  window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight) {
      bar.hidden = false;
      requestAnimationFrame(() => bar.classList.add('visible'));
    } else {
      bar.classList.remove('visible');
      setTimeout(() => { if (window.scrollY <= heroHeight) bar.hidden = true; }, 400);
    }
  }, { passive: true });
}

/* -------------------------------------------------------------------------- */
/* 8. FAQ ACCORDION                                                           */
/* -------------------------------------------------------------------------- */
function initFAQ() {
  const headers = document.querySelectorAll('.faq-question');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const wasActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!wasActive) {
        parent.classList.add('active');
        const questionText = header.querySelector('h4');
        if (questionText) {
          trackEvent('faq_open', { question: questionText.textContent.trim() });
        }
      }
    });
  });
}
