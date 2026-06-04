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
/* INTERNATIONALIZATION (ES / EN) — autodetección + toggle manual              */
/* -------------------------------------------------------------------------- */
// Traducciones EN de cada villa (ES vive en el array VILLAS de arriba)
const VILLA_EN = {
  luna:      { concepto: 'Contemplation', tagline: "The collection's iconic piece. The villa that gave rise to Goshen.", descripcion: 'The Goshen Hills logo was born from the night view from its terrace: the crescent moon reflected over the Caribbean horizon. It sits at the eastern edge of the collection, where the architecture frames both the sunset over the sea and the full moon each month.', para_quienes: 'For those who value ritual over urgency. Ideal for those who find their true essence in introspection and the silence of the night.', extra: 'Terrace 31.42 m²' },
  brisa:     { concepto: 'Movement', tagline: "The hillside's cross-breeze captured in Goshen's most admirable villa.", descripcion: 'Designed around an architectural geometry that captures and channels the Caribbean breeze, this villa lets you forgo active climate control most of the year thanks to its natural cross-ventilation.', para_quienes: 'For those who flow with their surroundings and value the constant renewal of fresh air in their spaces.', extra: 'Terrace 36.03 m²' },
  aurora:    { concepto: 'Rebirth', tagline: 'A privileged relationship with the sunrise over the Caribbean.', descripcion: 'The only villa in the collection where the sunrise enters directly into the social space. Twenty-three minutes of golden morning light over the living-dining area every day. Its 38.33 m² terrace is the largest of the rear row.', para_quienes: 'For those who wake before the sun — who treasure the morning ritual: the aroma of coffee, the first glimmer of clarity, and absolute peace before the world stirs.', extra: 'Terrace 38.33 m²' },
  celeste:   { concepto: 'Amplitude', tagline: 'The Caribbean sky as a silent protagonist.', descripcion: 'The most sky-open perspective in the collection. A 16.42 m² bedroom hall and a primary bath with privileged views. The midday zenith light falls over the social space unobstructed.', para_quienes: 'For those who require the freedom of a high ceiling and the purity of the firmament — who find more meaning in reading the sky than the horizon.', extra: 'Terrace 31.52 m²' },
  horizonte: { concepto: 'Expansion', tagline: "The Caribbean's infinite horizon, like framed art.", descripcion: 'The largest of the rear row. Its 53.03 m² living room and 21.08 m² bedroom hall are conceived as spaces of welcome. The main window operates as a horizontal painting of the Caribbean Sea.', para_quienes: 'For those who find in distance the clarity their thoughts require — who live with their gaze set on the vastness of the horizon.', extra: 'Terrace 29.73 m²' },
  serena:    { concepto: 'Repose', tagline: 'The calm of the Caribbean held within an elevated residence.', descripcion: 'The villa closest to the social area. Starting point of the rear collection: where the hillside begins to ascend and silence announces itself. Its typology prioritizes controlled architectural shade and the breathing of the social space.', para_quienes: 'For those who have moved past the need for external validation and recognize they have arrived at their place — who understand serenity is not a goal but their very essence.', extra: 'Terrace 31.78 m²' },
  coral:     { concepto: 'Vitality', tagline: 'The Caribbean marine ecosystem as an aesthetic reference.', descripcion: 'Close of the front row. Chromatic vitality inspired by the underwater biodiversity of the Colombian Caribbean. Its 38.23 m² interior patio is the second largest in the row.', para_quienes: 'For those not content to merely observe the sea, but who yearn for a deep, active connection with its ecosystem — who prize vitality over repose.', extra: 'Patio 38.23 m²' },
  palma:     { concepto: 'Tropicality', tagline: "The tropics' palms woven into everyday life.", descripcion: 'Immediate tropical vegetation. The proximity of the palms wraps the social space in natural shade during the central hours of the day and brings an aromatic trace of sap and marine iodine.', para_quienes: 'For those who seek the essence of an authentic tropics, not a decorative one — who value shade as an architectural element.', extra: 'Patio 27.01 m²' },
  ambar:     { concepto: 'Plenitude', tagline: 'The sunset residence. The finest evening Golden Hour of the collection.', descripcion: 'Its name was born from the color the sun leaves over its terrace each evening at 17:42. The geometry of the front façade and its orientation are calibrated to capture the deepest amber of the day over the horizon.', para_quienes: 'For those who find in the sunset a vital culmination and not simply an end — who live the day with their gaze on the evening horizon.', extra: 'Patio 23.97 m²' },
  marina:    { concepto: 'Immersion', tagline: 'The sea as the closest protagonist.', descripcion: 'Acoustic proximity to the sound of the waves. Its front typology with descending floors brings the social space to the highest point of sensory contact with the Caribbean Sea.', para_quienes: 'Ideal for those who want the sound of the sea to be their first thought upon waking, with no architectural filter between rest and the waves.', extra: 'Patio 29.04 m²' },
  sierra:    { concepto: 'Rootedness', tagline: 'The dialogue between the Sierra Nevada and the Caribbean.', descripcion: 'The largest villa of the collection, beside the social area. Its 74.98 m² private patio is the biggest and operates as an organic extension of the living space. The only villa where the majesty of the Sierra Nevada and the sea coexist in a single visual plane.', para_quienes: 'For those who prioritize an organic connection with the natural surroundings — the choice of those who need to feel the landscape before the spectacle.', extra: 'Patio 74.98 m²' }
};

// Diccionario de la interfaz / copy. Las claves se referencian con data-i18n en el HTML.
const I18N = {
  es: {
    nav_cta: 'Conversación Privada',
    cred_eyebrow: 'EL MOMENTO DE SANTA MARTA',
    cred_headline: 'El mercado inmobiliario más dinámico del Caribe colombiano — en el radar de <em class="text-cedar font-italic">Forbes</em> entre los cinco mejores destinos del mundo frente al mar.',
    life_eyebrow: 'EL ESTILO DE VIDA',
    life_title: 'Un día que no se repite.',
    life_sub: 'Amanecer sobre el Caribe, mediodía a la sombra de la palma, atardecer ámbar desde la piscina. Goshen Hills no se visita — se habita.',
    life_cta: 'Vivir Goshen Hills →',
    avail_label: 'VILLAS DISPONIBLES',
    col_masterplan_cap: 'Plano de implantación · once villas en dos hileras sobre la ladera',
    group_posterior_title: 'Tipología Posterior',
    group_posterior_sub: 'Ascienden por la ladera hacia la luz y el cielo. Terrazas orientadas al horizonte.',
    group_frontal_title: 'Tipología Frontal',
    group_frontal_sub: 'Descienden hacia el mar y los patios privados más amplios de la colección.',
    lugar_address: 'Vía al Rodadero · Reserva de la Montaña, Santa Marta, Magdalena',
    lugar_maps_link: 'Ver en Google Maps ↗',
    lugar_request: 'Solicitar ubicación exacta',
    lugar_distances: '10 min al Rodadero · 20 min al Aeropuerto Internacional · 40 min al Parque Nacional Tayrona',
    foot_l_experiencia: 'La Experiencia',
    hero_eyebrow_top: '9 DE 11 VILLAS DISPONIBLES · PRECIO FOUNDERS — ANTES DEL AJUSTE DE OBRA',
    hero_coleccion: 'COLECCIÓN PRIVADA · ONCE VILLAS',
    hero_brand: 'Goshen Hills',
    hero_location: 'SANTA MARTA · COLOMBIA',
    hero_title: 'Donde el cielo abraza el mar',
    hero_subtitle: 'Vía al Rodadero · Santa Marta · Caribe colombiano',
    hero_cta1: 'Iniciar conversación privada',
    hero_cta2: 'Conocer la colección ↓',
    vision_eyebrow: 'MANIFIESTO',
    vision_title: 'Goshen Hills no fue concebido para competir con el mercado.<br><span class="text-cedar font-italic">Fue concebido para distinguirse de él.</span>',
    vision_p1: 'El Caribe colombiano se ha llenado de torres que crecen en altura, condominios que crecen en número, ofertas que crecen en urgencia. Goshen Hills nace de una decisión opuesta: once villas privadas dispuestas con respeto al terreno, no contra él.',
    vision_p2: 'Goshen Hills nace de una decisión opuesta: once villas privadas dispuestas con respeto al terreno, no contra él.',
    vision_p3: 'En la Reserva de la Montaña, sobre Vía al Rodadero, la arquitectura no impone. Revela luz, brisa y paisaje. Cada villa fue diseñada para preservar lo que el lugar ya ofrece: el horizonte abierto del mar Caribe y la presencia silenciosa de la Sierra Nevada de Santa Marta.',
    vision_p4: 'Aquí no se vende un metro cuadrado más. Se conserva un horizonte que no se repite.',
    vision_quote: '"El lujo que no se exhibe, se respira."',
    lugar_eyebrow: 'EL LUGAR',
    lugar_title: 'Explora la zona.',
    lugar_sub: 'Aquí el Caribe se respira con aire de montaña.',
    lugar_p1: 'Goshen Hills se ubica en la Reserva de la Montaña, sobre Vía al Rodadero, Santa Marta. Una ladera elevada en el flanco occidental de la Sierra Nevada — la única cordillera del mundo que nace en la playa y alcanza los 5.700 metros sobre el nivel del mar, declarada Reserva de la Biósfera por la UNESCO.',
    lugar_p2: 'Por la ventana, el horizonte abierto del mar Caribe, en su versión más cálida y silenciosa. A la espalda, una de las geografías más densas del planeta. A diez minutos, las playas del Rodadero. A veinte, el Aeropuerto Internacional Simón Bolívar. A cuarenta, el Parque Nacional Natural Tayrona, uno de los ecosistemas costeros mejor preservados del continente.',
    stat_reserva: 'Reserva de la Montaña',
    stat_sea: 'sobre el nivel del mar',
    stat_min: 'min al Rodadero, aeropuerto y Tayrona',
    lugar_map_label: 'Ubicación exacta · Vía al Rodadero, Santa Marta',
    exp_eyebrow: 'LA EXPERIENCIA',
    exp_title: 'Interiorismo al servicio del horizonte.',
    exp_p1: 'Las villas de Goshen Hills operan como lienzos en blanco. La arquitectura desaparece para que la luz natural, la brisa cruzada y el sonido del mar asuman el protagonismo. Grandes ventanales de piso a techo que diluyen la frontera entre el interior y el vasto mar Caribe.',
    amen_1: 'Piscina privada con vista panorámica al Caribe',
    amen_2: 'Terraza o patio privado de 23 a 74 m²',
    amen_3: 'Ventilación cruzada natural · climatización pasiva todo el año',
    amen_4: '3 alcobas en suite con acabados de primera línea',
    amen_5: 'Ventanales de piso a techo en zona social',
    amen_6: 'Arquitectura mediterránea contemporánea adaptada al trópico',
    amen_pool: 'Piscina privada',
    amen_terrace: 'Terraza / Patio',
    amen_garden: 'Jardín privado',
    amen_kitchen: 'Cocina abierta',
    amen_suites: '3 Alcobas en suite',
    amen_view: 'Vista al mar Caribe',
    amen_breeze: 'Ventilación natural',
    amen_arch: 'Arquitectura de autor',
    piscina_caption: 'Piscina privada. El Caribe como fondo.',
    typo_rear: 'Tipología Posterior · Casas 01–06',
    typo_front: 'Tipología Frontal · Casas 07–11',
    col_eyebrow: 'LA COLECCIÓN',
    col_title: 'Once villas. Once formas de habitar el Caribe.',
    col_sub: 'En cada villa, la luz, la brisa y el horizonte convergen para crear una identidad arquitectónica única y excepcional.',
    col_hint: 'Toque cada villa para abrir su mundo.',
    gar_eyebrow: 'IV · GARANTÍAS DE LA COLECCIÓN',
    gar_title: 'Un proyecto con nombre, matrícula y dirección real.',
    gar_sub: 'Goshen Hills no es una promesa de plano. Es una colección con certeza técnica, legal y sensorial.',
    gar1_title: 'Arquitectura certificada',
    gar1_body: 'Raúl Caballería<br>Mat. A144552015-414917<br>Arquitectura mediterránea contemporánea adaptada al trópico colombiano.',
    gar2_title: 'Desarrollado por',
    gar2_body: 'AQUALINDA S.A.S.<br>Santa Marta, Colombia<br>Recursos bajo mecanismo de fiducia regulada.',
    gar3_title: 'Venta directa',
    gar3_body: 'Sin portales de terceros.<br>Sin comisiones de intermediario.<br>Gestión directa con el equipo del proyecto.',
    gar4_title: 'Ubicación irrepetible',
    gar4_body: 'Reserva de la Biósfera UNESCO.<br>Sierra Nevada de Santa Marta.<br>62.900 m² de ladera privada en el Caribe colombiano.',
    faq_eyebrow: 'PREGUNTAS FRECUENTES',
    faq_title: 'Lo que los compradores de Goshen Hills preguntan primero.',
    faq_q1: '1. ¿Cuándo estará disponible para habitar?',
    faq_a1: 'El cronograma de entrega varía por villa según el avance de obra y la fase de compra. La conversación privada entrega la proyección actualizada de cada unidad. Las villas en Precio Founders están en proceso activo de desarrollo con entrega escalonada.',
    faq_q2: '2. ¿Los recursos del proyecto están protegidos?',
    faq_a2: 'Sí. Los recursos de la colección se gestionan bajo mecanismo de fiducia regulada, garantizando protección al comprador durante todo el proceso de desarrollo. Los detalles del fideicomiso y la documentación legal del proyecto se entregan en la conversación privada.',
    faq_q3: '3. ¿Puedo acceder a crédito hipotecario?',
    faq_a3: 'Sí. Las villas de Goshen Hills califican para crédito hipotecario a través de las principales entidades bancarias colombianas. Para compradores en el exterior existe la opción de adquisición en moneda extranjera con escrituración directa. El equipo orienta sobre ambas rutas en la conversación privada.',
    faq_q4: '4. ¿Puedo arrendar la villa cuando no la habito?',
    faq_a4: 'Goshen Hills es una colección residencial privada, no un esquema de renta vacacional. El propietario tiene plena libertad de arrendar su villa de manera privada y selectiva. El proyecto no gestiona arriendos ni ofrece retornos de inversión prometidos — la valorización es la del Caribe colombiano.',
    faq_q5: '5. ¿Cuál es la diferencia entre las villas posteriores y las frontales?',
    faq_a5: 'Las posteriores aprovechan la pendiente ascendente del lote con plantas P00, P+01 y P+02 (suben hacia la luz). Las frontales aprovechan la pendiente descendente con plantas P00, P-01 y P-02 (descienden hacia patios privados más amplios, entre 23 y 74 m²).',
    faq_q6: '6. ¿Quién diseñó el proyecto?',
    faq_a6: 'Raúl Caballería, arquitecto colombiano con matrícula profesional A144552015-414917. Especializado en arquitectura mediterránea contemporánea adaptada al trópico y en implantación en ladera. Su enfoque: la arquitectura como marco, no como protagonista.',
    faq_q7: '7. ¿Hay villas con identidad sensorial particular?',
    faq_a7: 'Tres villas tienen una huella única: Villa Luna (Casa 01) dio origen al logo de la colección por su vista nocturna; Villa Aurora (Casa 03) recibe el amanecer caribeño directamente en el espacio social; Villa Ámbar (Casa 09) ofrece la mejor Golden Hour vespertina — su nombre nació del color que el sol deja sobre su terraza cada tarde a las 17:42.',
    faq_q8: '8. ¿Cómo se inicia la conversación?',
    faq_a8: 'Por WhatsApp al +57 300 400 0707 o correo hola@goshenhills.com.co. La conversación entrega disponibilidad real del momento, cronograma de obra y orientación sobre la villa que mejor refleja su perfil. Sin compromiso, sin urgencia fabricada.',
    cierre_eyebrow: '9 DE 11 VILLAS DISPONIBLES',
    cierre_title: 'La conversación comienza antes que la visita.',
    cierre_text: 'Goshen Hills no se descubre con prisa. Se reconoce con discernimiento. La colección no se ofrece a todo el mercado — se ofrece a quienes saben que el Caribe colombiano puede vivirse con otra cadencia.',
    cierre_quote: '"Once villas. Una ladera. Un horizonte irrepetible."',
    cierre_cta: 'Iniciar la conversación →',
    foot_eyebrow: 'CONVERSACIÓN',
    foot_title: 'La conversación privada.',
    foot_sub: 'El paso natural hacia la elección de una villa.',
    foot_p1: 'Goshen Hills no se vende abiertamente. Se gestiona en conversación. La elección de una villa no comienza con una venta — comienza con una lectura: quién habitará la villa, cómo desea vivir el Caribe, qué atmósfera corresponde mejor a su modo de ser.',
    foot_p2: 'Si la colección le resuena, escríbanos por WhatsApp o complete sus detalles en el formulario. Le devolveremos la conversación con la disponibilidad real del momento y la villa que mejor refleja su perfil familiar.',
    form_name: 'NOMBRE COMPLETO',
    form_name_ph: 'Nombre y apellido',
    form_wa: 'WHATSAPP (CON CÓDIGO DE PAÍS)',
    form_email: 'CORREO ELECTRÓNICO (opcional)',
    form_villa: 'VILLA DE INTERÉS',
    form_villa_default: 'Seleccione una opción',
    form_villa_undecided: 'Aún no lo he decidido',
    form_check1: 'HE LEÍDO Y ACEPTO LA POLÍTICA DE PRIVACIDAD.',
    form_check2: 'MIS DATOS SOLO SE USARÁN PARA DEVOLVER LA CONVERSACIÓN.',
    form_submit: 'SOLICITAR CONVERSACIÓN PRIVADA',
    trust_1: '♥ Fiducia regulada',
    trust_2: '🔒 Datos cifrados',
    trust_3: '✓ Sin marketing',
    foot_discover: 'Descubrir',
    foot_l_vision: 'Manifiesto', foot_l_lugar: 'El Lugar', foot_l_coleccion: 'Colección de Villas', foot_l_garantias: 'Garantías', foot_l_faq: 'Preguntas Frecuentes',
    foot_contact: 'Contacto', foot_project: 'Proyecto', foot_arch: 'Arquitecto: Raúl Caballería',
    foot_garantias_link: 'Garantías del proyecto',
    foot_rights: '© 2026 Goshen Hills · AQUALINDA S.A.S. · Todos los derechos reservados.',
    legal_terms: 'Términos y Condiciones', legal_privacy: 'Política de Privacidad',
    exit_headline: '"¿Le generó curiosidad alguna villa?"',
    exit_sub: 'La conversación es sin compromiso y completamente privada.',
    exit_cta: 'Preguntar en privado →',
    mobile_cta: 'Conversación privada →',
    // dinámicos (cards / modal)
    badge_available: 'Disponible', badge_reserved: 'Reservada',
    spec_area: 'Área Total', spec_levels: 'Niveles', spec_beds: 'Alcobas', spec_outdoor: 'Espacio Exterior',
    word_beds: 'Alcobas', resident_profile: 'Perfil de habitante', modal_cta: 'Solicitar Dossier Privado'
  },
  en: {
    nav_cta: 'Private Conversation',
    cred_eyebrow: "SANTA MARTA'S MOMENT",
    cred_headline: 'The most dynamic real-estate market in the Colombian Caribbean — on <em class="text-cedar font-italic">Forbes\'</em> radar among the world\'s five best beachfront destinations.',
    life_eyebrow: 'THE LIFESTYLE',
    life_title: 'A day that never repeats.',
    life_sub: 'Sunrise over the Caribbean, midday in the shade of the palms, an amber sunset from the pool. Goshen Hills is not visited — it is lived.',
    life_cta: 'Live Goshen Hills →',
    avail_label: 'VILLAS AVAILABLE',
    col_masterplan_cap: 'Site plan · eleven villas in two rows along the hillside',
    group_posterior_title: 'Rear Typology',
    group_posterior_sub: 'They climb the hillside toward the light and the sky. Terraces facing the horizon.',
    group_frontal_title: 'Front Typology',
    group_frontal_sub: 'They descend toward the sea and the largest private patios of the collection.',
    lugar_address: 'Vía al Rodadero · Reserva de la Montaña, Santa Marta, Magdalena, Colombia',
    lugar_maps_link: 'View on Google Maps ↗',
    lugar_request: 'Request exact location',
    lugar_distances: '10 min to Rodadero · 20 min to the airport · 40 min to Tayrona National Park',
    foot_l_experiencia: 'The Experience',
    hero_eyebrow_top: '9 OF 11 VILLAS AVAILABLE · FOUNDERS PRICING — BEFORE THE CONSTRUCTION ADJUSTMENT',
    hero_coleccion: 'PRIVATE COLLECTION · ELEVEN VILLAS',
    hero_brand: 'Goshen Hills',
    hero_location: 'SANTA MARTA · COLOMBIA',
    hero_title: 'Where the sky embraces the sea',
    hero_subtitle: 'Vía al Rodadero · Santa Marta · Colombian Caribbean',
    hero_cta1: 'Start a private conversation',
    hero_cta2: 'Discover the collection ↓',
    vision_eyebrow: 'MANIFESTO',
    vision_title: 'Goshen Hills was not conceived to compete with the market.<br><span class="text-cedar font-italic">It was conceived to stand apart from it.</span>',
    vision_p1: 'The Colombian Caribbean has filled with towers growing taller, condominiums growing in number, offers growing in urgency. Goshen Hills is born of the opposite decision: eleven private villas laid out with respect for the land, not against it.',
    vision_p2: 'Goshen Hills is born of the opposite decision: eleven private villas laid out with respect for the land, not against it.',
    vision_p3: 'In the Reserva de la Montaña, on Vía al Rodadero, the architecture does not impose. It reveals light, breeze and landscape. Each villa was designed to preserve what the place already offers: the open horizon of the Caribbean Sea and the silent presence of the Sierra Nevada de Santa Marta.',
    vision_p4: 'Not one more square meter is sold here. A horizon that never repeats is preserved.',
    vision_quote: '"Luxury that is not displayed is breathed."',
    lugar_eyebrow: 'THE PLACE',
    lugar_title: 'Explore the area.',
    lugar_sub: 'Here the Caribbean is breathed with mountain air.',
    lugar_p1: 'Goshen Hills sits in the Reserva de la Montaña, on Vía al Rodadero, Santa Marta — an elevated hillside on the western flank of the Sierra Nevada, the only mountain range in the world that rises from the beach to 5,700 meters above sea level, declared a UNESCO Biosphere Reserve.',
    lugar_p2: 'Through the window, the open horizon of the Caribbean Sea in its warmest, quietest form. Behind, one of the densest geographies on the planet. Ten minutes to the beaches of El Rodadero. Twenty to Simón Bolívar International Airport. Forty to Tayrona National Natural Park, one of the best-preserved coastal ecosystems on the continent.',
    stat_reserva: 'Mountain Reserve',
    stat_sea: 'above sea level',
    stat_min: 'min to Rodadero, airport and Tayrona',
    lugar_map_label: 'Exact location · Vía al Rodadero, Santa Marta',
    exp_eyebrow: 'THE EXPERIENCE',
    exp_title: 'Interiors in service of the horizon.',
    exp_p1: 'The villas of Goshen Hills act as blank canvases. The architecture steps back so that natural light, cross-breeze and the sound of the sea take the lead. Floor-to-ceiling windows dissolve the boundary between the interior and the vast Caribbean Sea.',
    amen_1: 'Private pool with panoramic Caribbean views',
    amen_2: 'Private terrace or patio from 23 to 74 m²',
    amen_3: 'Natural cross-ventilation · passive climate control year-round',
    amen_4: '3 en-suite bedrooms with premium finishes',
    amen_5: 'Floor-to-ceiling windows in the social area',
    amen_6: 'Contemporary Mediterranean architecture adapted to the tropics',
    amen_pool: 'Private pool',
    amen_terrace: 'Terrace / Patio',
    amen_garden: 'Private garden',
    amen_kitchen: 'Open kitchen',
    amen_suites: '3 en-suite bedrooms',
    amen_view: 'Caribbean sea view',
    amen_breeze: 'Natural ventilation',
    amen_arch: 'Signature architecture',
    piscina_caption: 'Private pool. The Caribbean as backdrop.',
    typo_rear: 'Rear Typology · Houses 01–06',
    typo_front: 'Front Typology · Houses 07–11',
    col_eyebrow: 'THE COLLECTION',
    col_title: 'Eleven villas. Eleven ways to inhabit the Caribbean.',
    col_sub: 'In each villa, light, breeze and horizon converge to create a unique, exceptional architectural identity.',
    col_hint: 'Tap each villa to open its world.',
    gar_eyebrow: 'IV · COLLECTION ASSURANCES',
    gar_title: 'A project with a name, a license and a real address.',
    gar_sub: 'Goshen Hills is not a blueprint promise. It is a collection with technical, legal and sensory certainty.',
    gar1_title: 'Certified architecture',
    gar1_body: 'Raúl Caballería<br>License A144552015-414917<br>Contemporary Mediterranean architecture adapted to the Colombian tropics.',
    gar2_title: 'Developed by',
    gar2_body: 'AQUALINDA S.A.S.<br>Santa Marta, Colombia<br>Funds under a regulated trust mechanism.',
    gar3_title: 'Direct sale',
    gar3_body: 'No third-party portals.<br>No broker commissions.<br>Dealing directly with the project team.',
    gar4_title: 'Unrepeatable location',
    gar4_body: 'UNESCO Biosphere Reserve.<br>Sierra Nevada de Santa Marta.<br>62,900 m² of private hillside on the Colombian Caribbean.',
    faq_eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faq_title: 'What Goshen Hills buyers ask first.',
    faq_q1: '1. When will it be ready to live in?',
    faq_a1: 'The delivery timeline varies by villa according to construction progress and purchase phase. The private conversation provides the updated projection for each unit. The Founders Pricing villas are in active development with staggered delivery.',
    faq_q2: '2. Are the project funds protected?',
    faq_a2: 'Yes. The collection funds are managed under a regulated trust mechanism, guaranteeing buyer protection throughout the development process. The details of the trust and the project legal documentation are shared in the private conversation.',
    faq_q3: '3. Can I access a mortgage?',
    faq_a3: 'Yes. Goshen Hills villas qualify for a mortgage through the main Colombian banks. For buyers abroad there is the option to purchase in foreign currency with direct title transfer. The team guides you on both routes in the private conversation.',
    faq_q4: '4. Can I rent out the villa when I am not living in it?',
    faq_a4: 'Goshen Hills is a private residential collection, not a vacation-rental scheme. The owner is entirely free to rent their villa privately and selectively. The project does not manage rentals nor promise investment returns — appreciation is that of the Colombian Caribbean.',
    faq_q5: '5. What is the difference between the rear and front villas?',
    faq_a5: 'The rear villas use the lot\'s upward slope with floors P00, P+01 and P+02 (rising toward the light). The front villas use the downward slope with floors P00, P-01 and P-02 (descending toward larger private patios, between 23 and 74 m²).',
    faq_q6: '6. Who designed the project?',
    faq_a6: 'Raúl Caballería, a Colombian architect with professional license A144552015-414917. Specialized in contemporary Mediterranean architecture adapted to the tropics and in hillside implantation. His approach: architecture as a frame, not as the protagonist.',
    faq_q7: '7. Are there villas with a particular sensory identity?',
    faq_a7: 'Three villas have a unique signature: Villa Luna (House 01) gave rise to the collection\'s logo through its night view; Villa Aurora (House 03) receives the Caribbean sunrise directly in the social space; Villa Ámbar (House 09) offers the finest evening Golden Hour — its name was born from the color the sun leaves over its terrace each evening at 17:42.',
    faq_q8: '8. How does the conversation begin?',
    faq_a8: 'By WhatsApp at +57 300 400 0707 or email hola@goshenhills.com.co. The conversation provides real-time availability, the construction timeline and guidance on the villa that best reflects your profile. No obligation, no manufactured urgency.',
    cierre_eyebrow: '9 OF 11 VILLAS AVAILABLE',
    cierre_title: 'The conversation begins before the visit.',
    cierre_text: 'Goshen Hills is not discovered in haste. It is recognized through discernment. The collection is not offered to the whole market — it is offered to those who know the Colombian Caribbean can be lived at a different cadence.',
    cierre_quote: '"Eleven villas. One hillside. An unrepeatable horizon."',
    cierre_cta: 'Begin the conversation →',
    foot_eyebrow: 'CONVERSATION',
    foot_title: 'The private conversation.',
    foot_sub: 'The natural step toward choosing a villa.',
    foot_p1: 'Goshen Hills is not sold openly. It is handled in conversation. Choosing a villa does not begin with a sale — it begins with a reading: who will inhabit the villa, how they wish to live the Caribbean, which atmosphere best matches their way of being.',
    foot_p2: 'If the collection resonates with you, write to us on WhatsApp or complete your details in the form. We will return the conversation with real-time availability and the villa that best reflects your family profile.',
    form_name: 'FULL NAME',
    form_name_ph: 'First and last name',
    form_wa: 'WHATSAPP (WITH COUNTRY CODE)',
    form_email: 'EMAIL (optional)',
    form_villa: 'VILLA OF INTEREST',
    form_villa_default: 'Select an option',
    form_villa_undecided: "I haven't decided yet",
    form_check1: 'I HAVE READ AND ACCEPT THE PRIVACY POLICY.',
    form_check2: 'MY DATA WILL ONLY BE USED TO RETURN THE CONVERSATION.',
    form_submit: 'REQUEST PRIVATE CONVERSATION',
    trust_1: '♥ Regulated trust',
    trust_2: '🔒 Encrypted data',
    trust_3: '✓ No marketing',
    foot_discover: 'Discover',
    foot_l_vision: 'Manifesto', foot_l_lugar: 'The Place', foot_l_coleccion: 'Villa Collection', foot_l_garantias: 'Assurances', foot_l_faq: 'FAQ',
    foot_contact: 'Contact', foot_project: 'Project', foot_arch: 'Architect: Raúl Caballería',
    foot_garantias_link: 'Project assurances',
    foot_rights: '© 2026 Goshen Hills · AQUALINDA S.A.S. · All rights reserved.',
    legal_terms: 'Terms & Conditions', legal_privacy: 'Privacy Policy',
    exit_headline: '"Did any villa spark your curiosity?"',
    exit_sub: 'The conversation is no-obligation and completely private.',
    exit_cta: 'Ask privately →',
    mobile_cta: 'Private conversation →',
    badge_available: 'Available', badge_reserved: 'Reserved',
    spec_area: 'Total Area', spec_levels: 'Levels', spec_beds: 'Bedrooms', spec_outdoor: 'Outdoor Space',
    word_beds: 'Bedrooms', resident_profile: 'Resident Profile', modal_cta: 'Request Private Dossier'
  }
};

function ghLang() { return document.documentElement.lang === 'en' ? 'en' : 'es'; }
function t(key) { const l = ghLang(); return (I18N[l] && I18N[l][key] != null) ? I18N[l][key] : (I18N.es[key] != null ? I18N.es[key] : key); }
function vfield(v, f) { const l = ghLang(); if (l === 'en' && VILLA_EN[v.id] && VILLA_EN[v.id][f] != null) return VILLA_EN[v.id][f]; return v[f]; }

// Escasez en vivo: cuenta disponibles desde los datos (loss-aversion / urgencia)
function renderAvailability() {
  const el = document.getElementById('availability-bar');
  if (!el) return;
  const total = VILLAS.length;
  const avail = VILLAS.filter(v => v.disponible !== false).length;
  const pct = Math.round((avail / total) * 100);
  el.innerHTML =
    '<div class="avail-num"><strong>' + avail + '</strong> <span>/ ' + total + '</span></div>' +
    '<div class="avail-info"><span class="avail-label">' + t('avail_label') + '</span>' +
    '<div class="avail-track"><div class="avail-fill" style="width:' + pct + '%"></div></div></div>';
}

function applyLang(lang, isInitial) {
  lang = (lang === 'en') ? 'en' : 'es';
  document.documentElement.lang = (lang === 'en') ? 'en' : 'es-CO';
  try { localStorage.setItem('gh_lang', lang); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n'); if (I18N[lang][k] != null) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html'); if (I18N[lang][k] != null) el.innerHTML = I18N[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph'); if (I18N[lang][k] != null) el.setAttribute('placeholder', I18N[lang][k]);
  });

  const tg = document.getElementById('lang-toggle');
  if (tg) { tg.textContent = (lang === 'en') ? 'ES' : 'EN'; tg.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English'); }

  // Re-render the villa grid so cards pick up the language.
  if (typeof renderGrid === 'function') {
    renderGrid();
    if (!isInitial) {
      document.querySelectorAll('.villas-grid .villa-card').forEach(el => el.classList.add('visible'));
    }
  }
  renderAvailability();
}

function initLang() {
  let lang;
  try { lang = localStorage.getItem('gh_lang'); } catch (e) {}
  if (!lang) { lang = (navigator.language || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es'; }
  applyLang(lang, true);
  const tg = document.getElementById('lang-toggle');
  if (tg) tg.addEventListener('click', () => {
    const next = (ghLang() === 'en') ? 'es' : 'en';
    applyLang(next, false);
    trackEvent('language_switch', { lang: next });
  });
}

// Área en el idioma activo: m² siempre; en inglés añade equivalente en sq ft.
function areaLabel(m2) {
  const v = parseFloat(m2);
  if (ghLang() === 'en' && !isNaN(v)) {
    return `${m2} m² · ${Math.round(v * 10.7639).toLocaleString('en-US')} sq ft`;
  }
  return `${m2} m²`;
}

/* -------------------------------------------------------------------------- */
/* SCROLL PROGRESS                                                            */
/* -------------------------------------------------------------------------- */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

/* -------------------------------------------------------------------------- */
/* CONTADORES ANIMADOS (estadísticas del lugar)                               */
/* -------------------------------------------------------------------------- */
function initCounters() {
  const els = document.querySelectorAll('[data-count-to]');
  if (!els.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const run = (el) => {
    const to = parseFloat(el.getAttribute('data-count-to'));
    const prefix = el.getAttribute('data-count-prefix') || '';
    const suffix = el.getAttribute('data-count-suffix') || '';
    const sep = el.getAttribute('data-count-sep') || '';
    const fmt = (n) => {
      let s = Math.round(n).toString();
      if (sep) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
      return prefix + s + suffix;
    };
    if (reduce) { el.textContent = fmt(to); return; }
    const dur = 1400, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
}

/* -------------------------------------------------------------------------- */
/* MODAL: navegación prev/next + teclado + deep-linking                       */
/* -------------------------------------------------------------------------- */
function villaIndex(id) { return VILLAS.findIndex(v => v.id === id); }

function navigateVilla(dir) {
  if (!currentVillaId) return;
  const i = villaIndex(currentVillaId);
  if (i < 0) return;
  const next = VILLAS[(i + dir + VILLAS.length) % VILLAS.length];
  openModalWithTransition(next.id);
}

function initModalNav() {
  const prev = document.getElementById('modal-prev');
  const next = document.getElementById('modal-next');
  if (prev) prev.addEventListener('click', () => navigateVilla(-1));
  if (next) next.addEventListener('click', () => navigateVilla(1));

  document.addEventListener('keydown', (e) => {
    const dialog = document.getElementById('villa-overlay');
    if (!dialog || !dialog.open) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); navigateVilla(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); navigateVilla(-1); }
  });

  // Deep-link al cargar: #villa-<id>
  const openFromHash = () => {
    const m = (location.hash || '').match(/^#villa-([a-z]+)$/);
    if (m && VILLAS.some(v => v.id === m[1])) {
      setTimeout(() => openModalWithTransition(m[1]), 350);
    }
  };
  openFromHash();
}

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
  initLang();      // detecta idioma + traduce DOM + renderiza el grid
  initReveal();
  initFAQ();
  initForm();
  initNavbarScroll();
  initScrollDepth();
  initCTATracking();
  initExitIntent();
  initMobileCTA();
  initScrollProgress();
  initCounters();
  initModalNav();
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
  const els = document.querySelectorAll('.reveal, .reveal-img');

  // No IO support → show everything immediately.
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));

  // Safety net: if the observer never fires (bfcache restore, some mobile/headless
  // conditions), content must NOT stay invisible. Reveal all if nothing showed up.
  setTimeout(() => {
    const anyVisible = Array.prototype.some.call(els, el => el.classList.contains('visible'));
    if (!anyVisible) els.forEach(el => el.classList.add('visible'));
  }, 1600);
}

/* -------------------------------------------------------------------------- */
/* 3. RENDER GRID & VIEW TRANSITIONS                                          */
/* -------------------------------------------------------------------------- */
let currentVillaId = null;

function villaCardHtml(v, index) {
  const staggerDelays = [0, 0.12, 0.24];
  const disponible = v.disponible !== false;
  const badgeClass = disponible ? 'disponible' : 'reservada';
  const badgeText = disponible ? t('badge_available') : t('badge_reserved');
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
        <span class="eyebrow">${v.casa} · ${vfield(v, 'concepto')}</span>
        <h3 class="villa-card-title">${v.nombre}</h3>
        <p class="villa-card-specs">${v.area} m² · ${v.alcobas} ${t('word_beds')}</p>
        ${disponible ? `<span class="villa-card-cta">${ghLang() === 'en' ? 'View details →' : 'Ver detalles →'}</span>` : ''}
      </div>
    </article>`;
}

function casaNum(v) { return parseInt((v.casa || '').replace(/\D/g, ''), 10) || 0; }

function renderGrid() {
  const post = document.getElementById('grid-posterior');
  const front = document.getElementById('grid-frontal');
  const flat = document.getElementById('villas-grid');

  if (post && front) {
    // Agrupado por tipología: Posterior (Casas 01–06) y Frontal (Casas 07–11)
    post.innerHTML = VILLAS.filter(v => casaNum(v) <= 6).map(villaCardHtml).join('');
    front.innerHTML = VILLAS.filter(v => casaNum(v) >= 7).map(villaCardHtml).join('');
  } else if (flat) {
    flat.innerHTML = VILLAS.map(villaCardHtml).join('');
  } else {
    return;
  }

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

  // Deep-link compartible: actualiza el hash sin saltar el scroll
  try { history.replaceState(null, '', '#villa-' + id); } catch (e) {}

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

  document.getElementById('modal-eyebrow').textContent = `${villa.casa} · ${vfield(villa, 'concepto')}`;
  document.getElementById('modal-title').textContent = villa.nombre;
  document.getElementById('modal-tagline').textContent = vfield(villa, 'tagline');

  document.getElementById('modal-desc').innerHTML = `
    <div class="desc-text">${vfield(villa, 'descripcion')}</div>
    <div class="para-quienes">
      <strong class="text-cedar font-italic" style="font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;">${t('resident_profile')}</strong>
      <p class="text-midnight-60">${vfield(villa, 'para_quienes')}</p>
    </div>
  `;

  document.getElementById('modal-specs').innerHTML = `
    <div class="spec-item"><span class="spec-label">${t('spec_area')}</span><span class="spec-val">${areaLabel(villa.area)}</span></div>
    <div class="spec-item"><span class="spec-label">${t('spec_levels')}</span><span class="spec-val">${villa.niveles}</span></div>
    <div class="spec-item"><span class="spec-label">${t('spec_beds')}</span><span class="spec-val">${villa.alcobas}</span></div>
    <div class="spec-item"><span class="spec-label">${t('spec_outdoor')}</span><span class="spec-val">${vfield(villa, 'extra') || 'Patio/Terraza'}</span></div>
  `;

  const ctaBtn = document.getElementById('modal-cta-btn');
  const villaMsg = ghLang() === 'en'
    ? `Hello, I was looking at ${villa.nombre} on the Goshen Hills website. I'd like to receive the private dossier and learn the current availability.`
    : `Hola, estuve revisando la ${villa.nombre} en la web de Goshen Hills. Me gustaría recibir el dossier privado y conocer la disponibilidad actual.`;
  ctaBtn.href = `https://wa.me/573004000707?text=${encodeURIComponent(villaMsg)}`;
  ctaBtn.setAttribute('rel', 'noopener noreferrer');
  ctaBtn.setAttribute('target', '_blank');
  ctaBtn.onclick = () => trackEvent('whatsapp_click', { cta_location: 'modal', villa_name: villa.nombre });

  // Navegación entre villas con el modal ya abierto: el contenido ya se actualizó
  // arriba. No reabrir el dialog (showModal lanzaría InvalidStateError) ni animar.
  if (dialog.open) {
    const g = document.getElementById('overlay-gallery');
    if (g) g.scrollTop = 0;
    return;
  }

  if (!document.startViewTransition) {
    dialog.showModal();
    document.body.classList.add('overflow-hidden');
    return;
  }

  if (sourceImg) sourceImg.style.viewTransitionName = 'active-villa-image';

  document.startViewTransition(() => {
    if (sourceImg) sourceImg.style.viewTransitionName = '';
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

  // Limpia el deep-link al cerrar
  try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}

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

    const en = ghLang() === 'en';

    if (!nombre || !wa || !villa) {
      msg.textContent = en ? 'Please complete all fields before continuing.' : 'Por favor complete todos los campos antes de continuar.';
      return;
    }
    if (!privacidad || !datos) {
      msg.textContent = en ? 'Please accept both conditions to continue.' : 'Por favor acepte ambas condiciones para continuar.';
      return;
    }

    btn.textContent = en ? 'Processing...' : 'Procesando...';
    btn.disabled = true;
    msg.textContent = '';

    trackEvent('form_submit', { villa_interest: villa });
    sessionStorage.setItem('gh_converted', '1');

    let texto;
    if (en) {
      const villaTxt = villa === 'Sin decidir aún' ? 'the Goshen Hills collection' : villa;
      const emailTxt = email ? ` My email: ${email}.` : '';
      texto = `Hello, I'm ${nombre} (WA: ${wa}).${emailTxt} I've just requested information about ${villaTxt} from the website. I look forward to your reply.`;
    } else {
      const villaTxt = villa === 'Sin decidir aún' ? 'conocer la colección Goshen Hills' : `la ${villa}`;
      const emailTxt = email ? ` Mi correo: ${email}.` : '';
      texto = `Hola, soy ${nombre} (WA: ${wa}).${emailTxt} Acabo de solicitar información sobre ${villaTxt} desde la web. Quedo atento a su respuesta.`;
    }
    const waUrl = `https://wa.me/573004000707?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
      msg.textContent = en ? `Thank you, ${nombre}. We'll open WhatsApp to continue the conversation.` : `Gracias, ${nombre}. Le abriremos WhatsApp para continuar la conversación.`;
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        form.reset();
        btn.disabled = false;
        btn.textContent = t('form_submit');
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
