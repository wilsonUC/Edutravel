/**
 * EDU TRAVEL DEL PERÚ - Core Application Logic
 * Agencia y Operador Turístico en Arequipa, Perú
 */

// --- Base de Datos Oficial de Experiencias y Circuitos ---
const TOURS_DATA = [
  {
    id: "misti",
    title: "Ascenso Guiado al Volcán Misti",
    category: "montana",
    categoryName: "Alta Montaña",
    altitude: "5,822 m s.n.m.",
    duration: "2 Días / 1 Noche",
    difficulty: "Exigente",
    diffClass: "diff-exigente",
    price: 320,
    priceNote: "por persona (grupal)",
    image: "./assets/images/misti.jpg",
    description: "Conquista la cumbre del guardián de Arequipa. Una expedición inolvidable con campamento a 4,600 m y vistas espectaculares del cráter activo y el amanecer sobre los Andes.",
    highlights: ["Equipo de camping 4 estaciones", "Guías certificados UIAGM / AGMP", "Cráter activo de azufre", "Transporte 4x4"],
    itinerary: [
      { time: "Día 1 - 08:00 AM", text: "Salida desde Arequipa en 4x4 hacia las faldas del Misti (3,300 msnm)." },
      { time: "Día 1 - 10:30 AM", text: "Inicio de caminata de ascenso pausado hacia el Campamento Base Nido de Águilas (4,600 msnm)." },
      { time: "Día 1 - 05:00 PM", text: "Armado de campamento, cena caliente de montaña y descanso reparador." },
      { time: "Día 2 - 01:30 AM", text: "Despertar, té de coca caliente e inicio del ataque a la cumbre bajo las estrellas." },
      { time: "Día 2 - 07:00 AM", text: "Llegada a la cumbre (5,822 msnm) y cruz del Misti. Vista al cráter y fotos panorámicas." },
      { time: "Día 2 - 01:30 PM", text: "Descenso rápido por arenales hasta el transporte 4x4 y retorno a la ciudad de Arequipa." }
    ],
    included: [
      "Transporte privado 4x4 (Ida y Retorno)",
      "Guía oficial de montaña certificado",
      "Carpas de montaña 4 estaciones y colchonetas",
      "Alimentación completa (cena caliente y desayunos)",
      "Botiquín de primeros auxilios y balón de oxígeno",
      "Equipo de cocina y bastones de trekking"
    ],
    notIncluded: [
      "Bolsa de dormir térmica (-10°C / alquiler disponible)",
      "Ropa técnica de abrigo personal",
      "Agua mineral para la caminata (mín. 4 litros)",
      "Propinas para el equipo guía"
    ]
  },
  {
    id: "chachani",
    title: "Escalada al Nevado Chachani (6K)",
    category: "montana",
    categoryName: "Alta Montaña",
    altitude: "6,057 m s.n.m.",
    duration: "2 Días / 1 Noche",
    difficulty: "Extremo",
    diffClass: "diff-extremo",
    price: 390,
    priceNote: "por persona",
    image: "./assets/images/chachani.jpg",
    description: "Considerado una de las cumbres de más de 6,000 metros más accesibles del mundo. Desafía tus límites con crampones, arneses y la máxima seguridad profesional.",
    highlights: ["Cumbre oficial +6,000 m", "Crampones y piolets", "Aproximación en 4x4 a 5,000 m", "Vistas al altiplano"],
    itinerary: [
      { time: "Día 1 - 07:30 AM", text: "Partida desde el centro de Arequipa atravesando la Reserva Nacional de Salinas y Aguada Blanca." },
      { time: "Día 1 - 11:30 AM", text: "Llegada al punto de partida a 5,000 msnm e inicio de marcha de aclimatación al campo base (5,200 msnm)." },
      { time: "Día 1 - 04:30 PM", text: "Charla técnica de seguridad, colocación de crampones, cena energética y descanso." },
      { time: "Día 2 - 02:00 AM", text: "Ascenso nocturno por laderas congeladas rumbo a la cumbre." },
      { time: "Día 2 - 07:30 AM", text: "¡Cumbre del Chachani a 6,057 msnm! Abrazo de cumbre y vistas del Colca y Misti." },
      { time: "Día 2 - 02:00 PM", text: "Retorno al transporte 4x4 y traslado de vuelta a los hoteles en Arequipa." }
    ],
    included: [
      "Transporte 4x4 especializado de alta montaña",
      "Guía profesional de alta montaña (ratio 1 guía por 3 personas)",
      "Equipo técnico: crampones, piolet, arnés, casco",
      "Carpas de expedición y colchonetas aislantes",
      "Cena energética y snacks de alta montaña",
      "Oxígeno medicinal y botiquín de rescate"
    ],
    notIncluded: [
      "Bolsa de dormir técnica pluma (-15°C)",
      "Linterna frontal y baterías para el frío",
      "Guantes y botas de alta montaña rígidas"
    ]
  },
  {
    id: "colca-trekking",
    title: "Trekking Cañón del Colca & Oasis Sangalle",
    category: "trekking",
    categoryName: "Trekking y Cañones",
    altitude: "3,300 m - 1,900 m",
    duration: "2 Días / 1 Noche",
    difficulty: "Moderado",
    diffClass: "diff-moderado",
    price: 185,
    priceNote: "por persona",
    image: "./assets/images/colca.jpg",
    description: "Desciende a uno de los cañones más profundos del planeta. Explora pueblos nativos, pernocta en San Juan de Chuccho y relájate en las piscinas naturales del Oasis de Sangalle.",
    highlights: ["Vuelo del Cóndor en Cruz del Cóndor", "Oasis de palmeras Sangalle", "Pernocte en cabañas típicas", "Miradores de volcanes"],
    itinerary: [
      { time: "Día 1 - 03:00 AM", text: "Recojo de hoteles en Arequipa y viaje rumbo a Chivay y Mirador Cruz del Cóndor." },
      { time: "Día 1 - 09:30 AM", text: "Observación del majestuoso vuelo de los cóndores andinos." },
      { time: "Día 1 - 10:30 AM", text: "Inicio del trekking en Cabanaconde. Descenso de 3.5 horas hacia San Juan de Chuccho." },
      { time: "Día 1 - 03:30 PM", text: "Llegada al Oasis de Sangalle. Tarde libre para nadar en piscinas, cena y fogata." },
      { time: "Día 2 - 04:30 AM", text: "Ascenso matutino a Cabanaconde (3 horas), desayuno reconstituyente." },
      { time: "Día 2 - 11:30 AM", text: "Visita a los baños termales de Yanque / Chivay, almuerzo buffet y retorno a Arequipa." }
    ],
    included: [
      "Transporte turístico Arequipa - Colca - Arequipa",
      "Guía oficial de turismo bilingüe",
      "1 noche de alojamiento en cabañas del Oasis de Sangalle",
      "Alimentación completa durante el trekking (1 desayuno, 1 almuerzo, 1 cena)",
      "Uso de piscinas en el Oasis de Sangalle"
    ],
    notIncluded: [
      "Boleto Turístico del Colca (BTC)",
      "Ingreso a baños termales (opcional S/ 15)",
      "Almuerzo buffet segundo día en Chivay"
    ]
  },
  {
    id: "pillones",
    title: "Catarata de Pillones & Bosque de Piedras de Imata",
    category: "aventura",
    categoryName: "Aventura y Naturaleza",
    altitude: "4,200 m s.n.m.",
    duration: "Full Day (6:00 AM - 5:00 PM)",
    difficulty: "Fácil",
    diffClass: "diff-facil",
    price: 85,
    priceNote: "salida diaria",
    image: "./assets/images/pillones.jpg",
    description: "Una de las excursiones más solicitadas. Descubre cascadas de agua cristalina entre formaciones volcánicas y camina entre las figuras místicas del Bosque de Piedras de Imata.",
    highlights: ["Cataratas congeladas y cascadas", "Bosque petrificado de Imata", "Avistamiento de vicuñas", "Ideal para fotografía"],
    itinerary: [
      { time: "06:00 AM", text: "Partida desde Arequipa hacia la carretera interoceánica y Pampa Cañahuas." },
      { time: "08:30 AM", text: "Parada en Pampa de Arrieros para desayuno tradicional y mate de coca." },
      { time: "10:00 AM", text: "Llegada e inicio de la caminata hacia las Cataratas de Pillones. Tiempo para fotos y explorar las cavernas." },
      { time: "01:00 PM", text: "Traslado al pueblo de Imata para almuerzo típico andino." },
      { time: "02:30 PM", text: "Exploración guiada del misterioso Bosque de Piedras de Imata y sus columnas pétreas." },
      { time: "05:00 PM", text: "Llegada de retorno a la ciudad blanca de Arequipa." }
    ],
    included: [
      "Transporte turístico ida y vuelta",
      "Guía oficial acreditado en turismo de naturaleza",
      "Boleto de ingreso comunal a Cataratas de Pillones",
      "Boleto de ingreso al Bosque de Piedras de Imata",
      "Botiquín de primeros auxilios y pastillas de soroche"
    ],
    notIncluded: [
      "Desayuno y almuerzo en Imata",
      "Gastos personales y snacks"
    ]
  },
  {
    id: "sillar",
    title: "Ruta del Sillar & Canteras de Añashuayco",
    category: "tradicional",
    categoryName: "Tradicional y Cultural",
    altitude: "2,325 m s.n.m.",
    duration: "Medio Día (Mañana / Tarde)",
    difficulty: "Fácil",
    diffClass: "diff-facil",
    price: 45,
    priceNote: "por persona",
    image: "./assets/images/sillar.jpg",
    description: "Conoce el origen vivo de la arquitectura blanca de Arequipa. Observa en vivo a los maestros canteros labrando el sillar y admira las colosales esculturas en los cañones de ceniza volcánica.",
    highlights: ["Canteras vivas de Añashuayco", "Quebrada de Culebrillas", "Demostración de tallado artesanal", "Petroglifos Wari"],
    itinerary: [
      { time: "08:30 AM / 02:00 PM", text: "Recojo en punto de encuentro o centro histórico." },
      { time: "09:15 AM", text: "Llegada a las Canteras de Añashuayco y caminata entre los muros gigantes de sillar tallado." },
      { time: "10:30 AM", text: "Interacción con los maestros cortadores y demostración de extracción tradicional." },
      { time: "11:30 AM", text: "Recorrido por la Quebrada virgen de Culebrillas y senderos con petroglifos milenarios." },
      { time: "01:00 PM / 06:00 PM", text: "Retorno al centro histórico de Arequipa." }
    ],
    included: [
      "Transporte turístico climatizado",
      "Guía oficial de turismo profesional",
      "Entrada a las Canteras de Añashuayco",
      "Entrada a la Quebrada de Culebrillas",
      "Demostración vivencial de tallado"
    ],
    notIncluded: [
      "Souvenirs en sillar y propinas voluntarias"
    ]
  },
  {
    id: "titicaca-cusco",
    title: "Circuito Sur: Arequipa, Puno (Titicaca) & Cusco",
    category: "rutas-sur",
    categoryName: "Circuitos del Sur",
    altitude: "2,325 m - 3,812 m",
    duration: "4 Días / 3 Noches",
    difficulty: "Fácil",
    diffClass: "diff-facil",
    price: 680,
    priceNote: "paquete integrado",
    image: "./assets/images/titicaca.jpg",
    description: "La experiencia definitiva del sur peruano. Conecta la Ciudad Blanca de Arequipa con las islas flotantes de los Uros y Taquile en el Lago Titicaca, culminando en la capital inca de Cusco.",
    highlights: ["Islas flotantes de los Uros y Taquile", "Ruta del Sol panorámica", "Coordinación logística completa", "Hoteles y traslados incluidos"],
    itinerary: [
      { time: "Día 1", text: "City Tour en Arequipa, Mirador de Yanahuara y traslado en bus panorámico a Puno." },
      { time: "Día 2", text: "Navegación completa en Lago Titicaca: Islas flotantes de Uros y cultura viva en Isla Taquile. Noche en Puno." },
      { time: "Día 3", text: "Ruta del Sol en bus turístico Puno - Cusco con paradas en Pukará, La Raya (4,335 m) y templo de Andahuaylillas." },
      { time: "Día 4", text: "Llegada a Cusco, City Tour Arqueológico (Sacsayhuamán, Qenqo) y enlace a Machu Picchu." }
    ],
    included: [
      "Todos los traslados interprovinciales turísticos",
      "Navegación en lancha a motor en el Lago Titicaca",
      "3 noches de alojamiento en hoteles 3 estrellas con desayuno",
      "Guías oficiales bilingües en cada destino",
      "Almuerzo buffet campestre en la Ruta del Sol"
    ],
    notIncluded: [
      "Tickets aéreos interciudades",
      "Boleto Turístico del Cusco integral",
      "Cenas y bebidas no estipuladas"
    ]
  }
];

// --- Configuración de Contacto Oficial ---
const CONTACT_CONFIG = {
  phone1: "+51 973 035 766",
  phone1Raw: "51973035766",
  phone2: "+51 973 035 766",
  email: "edutraveldelperu@hotmail.com",
  address1: "Calle Santa Catalina Nro. 217, Cercado, Arequipa",
  address2: "Calle Piérola 108, Oficina B-11, Cercado, Arequipa"
};

// --- Inicialización y Controladores ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initThemeToggle();
  initMobileMenu();
  renderTours("all");
  initTourFilters();
  initModal();
  initCalculator();
  initContactForm();
  initFaqAccordion();
  initCondorCursor();
});

// 1. Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// 2. Dark / Light Mode Toggle
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("edu_travel_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("edu_travel_theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById("themeToggle");
  if (theme === "dark") {
    themeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  } else {
    themeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// 3. Mobile Hamburger Menu
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  
  if (!menuBtn || !navMenu) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !navMenu.classList.contains("open");
    
    if (isOpen) {
      navMenu.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      document.body.style.overflow = "hidden";
    } else {
      navMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      document.body.style.overflow = "";
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      toggleMenu(true);
    });
  });

  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      toggleMenu(true);
    }
  });
}


// 4. Render Tours Catalog
function renderTours(category = "all") {
  const container = document.getElementById("toursGrid");
  container.innerHTML = "";

  const filtered = category === "all" 
    ? TOURS_DATA 
    : TOURS_DATA.filter(t => t.category === category);

  filtered.forEach(tour => {
    const card = document.createElement("div");
    card.className = "tour-card";
    card.innerHTML = `
      <div class="tour-image-wrap">
        <img src="${tour.image}" alt="${tour.title}" class="tour-image" loading="lazy">
        <span class="tour-badge-category">${tour.categoryName}</span>
        <span class="tour-badge-altitude">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22"/></svg>
          ${tour.altitude}
        </span>
        <span class="tour-badge-duration">${tour.duration}</span>
      </div>
      <div class="tour-content">
        <div class="tour-meta-row">
          <span class="tour-difficulty ${tour.diffClass}">
            ● ${tour.difficulty}
          </span>
          <span>Arequipa, Perú</span>
        </div>
        <h3 class="tour-title">${tour.title}</h3>
        <p class="tour-desc">${tour.description}</p>
        <div class="tour-highlights">
          ${tour.highlights.slice(0, 3).map(h => `<span class="tour-pill">${h}</span>`).join("")}
        </div>
        <div class="tour-footer">
          <div class="tour-price-box">
            <span class="tour-price-label">Desde</span>
            <span class="tour-price-value">S/ ${tour.price} <small style="font-size:0.75rem; color:var(--color-text-muted);">${tour.priceNote}</small></span>
          </div>
          <button class="btn btn-secondary tour-action-btn" onclick="openTourModal('${tour.id}')">
            Ver Detalles
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 5. Tour Filters
function initTourFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderTours(filter);
    });
  });
}

// 6. Modal System
function initModal() {
  const overlay = document.getElementById("tourModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  closeBtn.addEventListener("click", closeTourModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeTourModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTourModal();
  });
}

function openTourModal(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalBadges = document.getElementById("modalBadges");
  const modalDescription = document.getElementById("modalDescription");
  const modalItinerary = document.getElementById("modalItinerary");
  const modalIncluded = document.getElementById("modalIncluded");
  const modalNotIncluded = document.getElementById("modalNotIncluded");
  const modalPrice = document.getElementById("modalPrice");
  const modalWaBtn = document.getElementById("modalWaBtn");

  modalImg.src = tour.image;
  modalImg.alt = tour.title;
  modalTitle.textContent = tour.title;

  modalBadges.innerHTML = `
    <span class="tour-badge-category" style="position:static;">${tour.categoryName}</span>
    <span class="tour-badge-altitude" style="position:static;">Altitud: ${tour.altitude}</span>
    <span class="tour-difficulty ${tour.diffClass}">Dificultad: ${tour.difficulty}</span>
    <span class="tour-pill" style="font-weight:700;">Duración: ${tour.duration}</span>
  `;

  modalDescription.textContent = tour.description;

  modalItinerary.innerHTML = tour.itinerary.map(step => `
    <div class="itinerary-step">
      <span class="step-time">${step.time}</span>
      <span class="step-desc">${step.text}</span>
    </div>
  `).join("");

  modalIncluded.innerHTML = tour.included.map(item => `
    <li>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item}</span>
    </li>
  `).join("");

  modalNotIncluded.innerHTML = tour.notIncluded.map(item => `
    <li>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D84315" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      <span>${item}</span>
    </li>
  `).join("");

  modalPrice.textContent = `S/ ${tour.price} PEN`;

  const waMsg = encodeURIComponent(
    `¡Hola Edu Travel del Perú! Estoy interesado en reservar el tour: "${tour.title}" (${tour.duration}). ¿Tienen disponibilidad y salidas próximas?`
  );
  modalWaBtn.href = `https://wa.me/${CONTACT_CONFIG.phone1Raw}?text=${waMsg}`;

  const overlay = document.getElementById("tourModal");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeTourModal() {
  const overlay = document.getElementById("tourModal");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// 7. Interactive Instant Quote Calculator
function initCalculator() {
  const selectTour = document.getElementById("calcTour");
  const inputPax = document.getElementById("calcPax");
  const chkGear = document.getElementById("calcGear");
  const chkPrivate = document.getElementById("calcPrivate");
  const chkGuide = document.getElementById("calcGuide");
  const chkHotel = document.getElementById("calcHotel");

  const totalEl = document.getElementById("calcTotalDisplay");
  const bookBtn = document.getElementById("calcBookWaBtn");

  // Populate Select with Tours
  selectTour.innerHTML = TOURS_DATA.map(t => `<option value="${t.id}">${t.title} (Base S/ ${t.price})</option>`).join("");

  function calculate() {
    const selectedId = selectTour.value;
    const tour = TOURS_DATA.find(t => t.id === selectedId) || TOURS_DATA[0];
    const pax = Math.max(1, parseInt(inputPax.value) || 1);

    let pricePerPax = tour.price;

    // Descuento grupal por volumen
    if (pax >= 4) pricePerPax *= 0.90; // 10% descuento
    if (pax >= 8) pricePerPax *= 0.85; // 15% descuento

    let subtotal = pricePerPax * pax;

    // Addons
    let addonsTotal = 0;
    if (chkGear.checked) addonsTotal += 45 * pax;      // Equipo térmico 4 estaciones
    if (chkPrivate.checked) addonsTotal += 120;        // Transporte 4x4 Privado
    if (chkGuide.checked) addonsTotal += 150;          // Guía Bilingüe Exclusivo
    if (chkHotel.checked) addonsTotal += 80 * pax;     // Pick up desde hotel en Cercado

    const grandTotal = Math.round(subtotal + addonsTotal);
    totalEl.textContent = grandTotal.toLocaleString("es-PE");

    const addonsList = [];
    if (chkGear.checked) addonsList.push("Equipo de Montaña");
    if (chkPrivate.checked) addonsList.push("4x4 Privado");
    if (chkGuide.checked) addonsList.push("Guía Bilingüe Exclusivo");
    if (chkHotel.checked) addonsList.push("Pick-up Hotel");

    const message = encodeURIComponent(
      `¡Hola Edu Travel del Perú! Vengo del cotizador web y deseo reservar:\n\n` +
      `📌 *Tour:* ${tour.title}\n` +
      `👥 *Pasajeros:* ${pax} persona(s)\n` +
      `🎒 *Adicionales:* ${addonsList.length ? addonsList.join(", ") : "Ninguno"}\n` +
      `💰 *Presupuesto Estimado:* S/ ${grandTotal} PEN\n\n` +
      `¿Podrían confirmarme fechas disponibles y formas de pago? Gracias.`
    );

    bookBtn.href = `https://wa.me/${CONTACT_CONFIG.phone1Raw}?text=${message}`;
  }

  [selectTour, inputPax, chkGear, chkPrivate, chkGuide, chkHotel].forEach(el => {
    el.addEventListener("input", calculate);
    el.addEventListener("change", calculate);
  });

  calculate();
}

// 8. Contact Form Handling
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const tour = document.getElementById("contactTour").value;
    const msg = document.getElementById("contactMessage").value.trim();

    const waText = encodeURIComponent(
      `¡Hola Edu Travel del Perú!\n\nMi nombre es *${name}* (${phone}).\nEstoy interesado en: *${tour}*.\n\n*Mensaje:* ${msg}`
    );

    // Redirect to WhatsApp
    window.open(`https://wa.me/${CONTACT_CONFIG.phone1Raw}?text=${waText}`, "_blank");
  });
}

// 9. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

// 10. Glowing Stardust Particle Trail (Puntitos que aparecen y desaparecen al mover el cursor)
function initCondorCursor() {
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
    return;
  }

  // Canvas a pantalla completa
  let canvas = document.getElementById("fluidCursorCanvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "fluidCursorCanvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9998";
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext("2d");
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Paleta exclusiva de tonos celestes, azules y destellos glaciares
  const DOT_COLORS = [
    { hex: "#0091C4", glow: "rgba(0, 145, 196, 0.75)" }, // Celeste Andino
    { hex: "#005BAA", glow: "rgba(0, 91, 170, 0.75)" },  // Azul Profundo
    { hex: "#38B6FF", glow: "rgba(56, 182, 255, 0.8)" },  // Celeste Brillante
    { hex: "#00407E", glow: "rgba(0, 64, 126, 0.75)" },  // Azul Cobalto
    { hex: "#48CAE4", glow: "rgba(72, 202, 228, 0.8)" },  // Celeste Glaciar
    { hex: "#90E0EF", glow: "rgba(144, 224, 239, 0.8)" }, // Celeste Suave
    { hex: "#FFFFFF", glow: "rgba(255, 255, 255, 0.85)" } // Destello Blanco Hielo
  ];

  const particles = [];
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;
  let prevFollowerX = mouseX;
  let prevFollowerY = mouseY;
  let hasMoved = false;

  function createDot(x, y, force = false) {
    // Aparición intermitente con espacios orgánicos
    if (!force && Math.random() > 0.65) {
      return;
    }

    const col = DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)];
    const offsetX = (Math.random() - 0.5) * 6;
    const offsetY = (Math.random() - 0.5) * 6;
    const radius = 2.2 + Math.random() * 4.0; // Tamaños variados (2.2px a 6.2px)

    particles.push({
      x: x + offsetX,
      y: y + offsetY,
      radius: radius,
      color: col.hex,
      glow: col.glow,
      life: 1.0,
      twinkleSpeed: 2.2 + Math.random() * 3.8,
      decay: 0.013 + Math.random() * 0.018, // Tiempo de permanencia suave
      maxAlpha: 0.55 + Math.random() * 0.35
    });
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!hasMoved) {
      followerX = mouseX;
      followerY = mouseY;
      prevFollowerX = mouseX;
      prevFollowerY = mouseY;
      hasMoved = true;
    }
  });

  window.addEventListener("mouseleave", () => {
    hasMoved = false;
  });

  function loop() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // 1. Seguimiento suave con inercia (no instantáneo, con retraso fluido y controlado)
    if (hasMoved) {
      const easeFactor = 0.095; // Velocidad de persecución balanceada (con delay natural)
      followerX += (mouseX - followerX) * easeFactor;
      followerY += (mouseY - followerY) * easeFactor;

      const distMoved = Math.hypot(followerX - prevFollowerX, followerY - prevFollowerY);
      const step = 9;

      if (distMoved >= step) {
        const stepsCount = Math.floor(distMoved / step);
        for (let i = 1; i <= stepsCount; i++) {
          const t = i / stepsCount;
          const ix = prevFollowerX + (followerX - prevFollowerX) * t;
          const iy = prevFollowerY + (followerY - prevFollowerY) * t;
          createDot(ix, iy);
        }
        prevFollowerX = followerX;
        prevFollowerY = followerY;
      }
    }

    // 2. Renderizar y actualizar partículas
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      // Efecto de aparición y desaparición suave
      let baseAlpha;
      if (p.life > 0.8) {
        baseAlpha = ((1 - p.life) / 0.2) * p.maxAlpha;
      } else {
        baseAlpha = (p.life / 0.8) * p.maxAlpha;
      }

      const twinkle = 0.85 + 0.15 * Math.sin(p.life * Math.PI * p.twinkleSpeed);
      const finalAlpha = Math.max(0, Math.min(1, baseAlpha * twinkle));
      const currentRadius = p.radius * (0.45 + 0.55 * p.life);

      ctx.save();
      ctx.globalAlpha = finalAlpha;
      ctx.shadowBlur = 7;
      ctx.shadowColor = p.glow;
      ctx.fillStyle = p.color;

      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      ctx.fill();

      // Destello central blanco
      if (currentRadius > 2.8 && finalAlpha > 0.35) {
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}




