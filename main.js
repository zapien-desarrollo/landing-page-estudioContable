// ---------- Íconos ----------
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 5 5 9-10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 10h16M9 3v4m6-4v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-team" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-building" viewBox="0 0 24 24"><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16m0-11h4a1 1 0 0 1 1 1v10M2 21h20M8 8h3m-3 4h3m-3 4h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0v5h5M9 13h6m-6 4h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-percent" viewBox="0 0 24 24"><path d="M19 5 5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="7" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="17" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 16a2 2 0 0 1 2-2h13v2M9 7h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></symbol>
  <symbol id="i-bell" viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4Zm4 4a2 2 0 0 0 4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2" fill="currentColor"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></symbol>
</svg>`;
document.body.insertAdjacentHTML("afterbegin", SPRITE);

// ---------- Utilidades ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const fmtNum = (n) => new Intl.NumberFormat("es-AR").format(n);
const fmtDay = (d) => d.toLocaleDateString("es-AR", { weekday: "long", day: "numeric" });

// ---------- Aviso de demo ----------
let toastTimer;
function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.append(el);
  }
  el.innerHTML = `<b>Demo</b> ${msg}`;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 4200);
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-demo]");
  if (!trigger) return;
  e.preventDefault();
  toast(trigger.dataset.demo);
});

$$("form[data-demo-form]").forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast(form.dataset.demoForm);
    form.reset();
  })
);

// ---------- Header y menú ----------
const header = $("#header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = $(".nav-toggle");
navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach((a) => a.addEventListener("click", () => {
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

// ---------- Contadores ----------
const counters = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    counters.unobserve(entry.target);
    const el = entry.target;
    const end = Number(el.dataset.count);
    const start = performance.now();
    const step = (t) => {
      const k = Math.min((t - start) / 1400, 1);
      const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = `${el.dataset.plus !== undefined ? "+" : ""}${fmtNum(v)}${el.dataset.suffix || ""}`;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.4 });
$$("[data-count]").forEach((el) => counters.observe(el));

// ---------- Perfiles ----------
const PERFILES = {
  mono: {
    titulo: "Monotributistas y profesionales",
    desc: "Para que factures tranquilo y no te excluyan por pasarte de categoría.",
    plan: "monotributo",
    items: ["Alta o adhesión al monotributo", "Recategorización cada seis meses", "Control de topes de facturación", "Ingresos Brutos en Mendoza o Convenio", "Aviso de cada VEP por WhatsApp"]
  },
  ri: {
    titulo: "Responsables inscriptos",
    desc: "IVA, Ganancias y Bienes Personales con planificación, no a último momento.",
    plan: "inscripto",
    items: ["DDJJ mensual de IVA", "Ingresos Brutos y retenciones", "Ganancias y Bienes Personales anual", "Anticipos y planes de pago", "Libro IVA Digital"]
  },
  pyme: {
    titulo: "Pymes y sociedades",
    desc: "Un área contable externa para tu empresa, con informes para decidir.",
    plan: "pyme",
    items: ["Contabilidad y balance anual", "Todos los impuestos de la sociedad", "Libros societarios y asambleas", "Informes de gestión mensuales", "Atención ante inspecciones"]
  },
  empleador: {
    titulo: "Empleadores",
    desc: "Sueldos liquidados en fecha según el convenio de tu actividad.",
    plan: "pyme",
    items: ["Recibos de sueldo mensuales", "F.931 y cargas sociales", "Altas y bajas en AFIP", "Sindicatos y obras sociales", "Vacaciones, aguinaldo y liquidaciones finales"]
  }
};

function showProfile(key) {
  const p = PERFILES[key];
  $("#profile-title").textContent = p.titulo;
  $("#profile-desc").textContent = p.desc;
  $("#profile-list").innerHTML = p.items.map((i) => `<li><svg class="icon"><use href="#i-check"/></svg> ${i}</li>`).join("");
  $("#profile-cta").textContent = `Ver abono ${PLANES.find((x) => x.id === p.plan).nombre}`;
  $("#profile-cta").dataset.plan = p.plan;
  $$(".profiles__tab").forEach((t) => {
    const on = t.dataset.profile === key;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on);
  });
}
$$(".profiles__tab").forEach((t) => t.addEventListener("click", () => showProfile(t.dataset.profile)));
$("#profile-cta").addEventListener("click", (e) => {
  const card = $(`[data-plan-card="${e.currentTarget.dataset.plan}"]`);
  card.classList.remove("is-flash");
  void card.offsetWidth;
  card.classList.add("is-flash");
});

// ---------- Abonos ----------
const PLANES = [
  {
    id: "monotributo",
    nombre: "Monotributo",
    para: "Monotributistas y profesionales",
    precio: 45000,
    items: ["Recategorización semestral", "VEP mensual por WhatsApp", "Ingresos Brutos simplificado", "Facturación electrónica", "Consultas ilimitadas"]
  },
  {
    id: "inscripto",
    nombre: "Responsable inscripto",
    para: "Profesionales y comercios",
    precio: 120000,
    destacado: true,
    items: ["Todo lo del plan Monotributo", "DDJJ mensual de IVA", "Ingresos Brutos y retenciones", "Ganancias y Bienes Personales", "Reunión trimestral de planificación"]
  },
  {
    id: "pyme",
    nombre: "Pyme",
    para: "Sociedades y empleadores",
    precio: 280000,
    desde: true,
    items: ["Todos los impuestos de la sociedad", "Contabilidad y balance anual", "Sueldos hasta 10 empleados", "Libros societarios", "Contador asignado"]
  }
];
const ANUAL_DESC = 0.15;
let billing = "mensual";

function renderPlans() {
  $("#plans").innerHTML = PLANES.map((p) => {
    const mensual = billing === "anual" ? Math.round(p.precio * (1 - ANUAL_DESC)) : p.precio;
    return `
      <article class="plan ${p.destacado ? "plan--featured" : ""}" data-plan-card="${p.id}">
        ${p.destacado ? `<span class="plan__ribbon">El más elegido</span>` : ""}
        <h3>${p.nombre}</h3>
        <p class="muted">${p.para}</p>
        <p class="plan__price">${p.desde ? "<small>desde</small> " : ""}$ ${fmtNum(mensual)}<span>/ mes</span></p>
        <p class="plan__billing">${billing === "anual" ? `$ ${fmtNum(mensual * 12)} por año · ahorrás $ ${fmtNum((p.precio - mensual) * 12)}` : "Sin permanencia mínima"}</p>
        <ul class="checks">${p.items.map((i) => `<li><svg class="icon"><use href="#i-check"/></svg> ${i}</li>`).join("")}</ul>
        <button class="btn ${p.destacado ? "btn--accent" : "btn--primary"} btn--block" data-buy="${p.id}">Contratar</button>
      </article>`;
  }).join("");
}

$$(".billing__opt").forEach((b) =>
  b.addEventListener("click", () => {
    billing = b.dataset.billing;
    $$(".billing__opt").forEach((x) => {
      x.classList.toggle("is-active", x === b);
      x.setAttribute("aria-pressed", x === b);
    });
    renderPlans();
  })
);

// Checkout simulado
const checkout = $("#checkout");
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-buy]");
  if (!btn) return;
  const p = PLANES.find((x) => x.id === btn.dataset.buy);
  const mensual = billing === "anual" ? Math.round(p.precio * (1 - ANUAL_DESC)) : p.precio;
  $("#co-plan").textContent = `Abono ${p.nombre}`;
  $("#co-billing").textContent = billing === "anual" ? "Anual (12 meses)" : "Mensual, débito automático";
  $("#co-total").textContent = billing === "anual" ? `$ ${fmtNum(mensual * 12)}` : `$ ${fmtNum(mensual)} / mes`;
  checkout.showModal();
});
checkout.addEventListener("close", () => {
  if (checkout.returnValue === "pay") toast("Pago aprobado. En el sitio real se abre el checkout de Mercado Pago y el estudio recibe el alta.");
});
checkout.addEventListener("click", (e) => e.target === checkout && checkout.close("cancel"));

// ---------- Calculadora de monotributo ----------
// Escala de ejemplo: [categoría, tope anual, cuota servicios, cuota bienes]
const ESCALA = [
  ["A", 8990000, 37000, 37000],
  ["B", 13170000, 42000, 42000],
  ["C", 18440000, 49000, 48000],
  ["D", 22900000, 63000, 61000],
  ["E", 26960000, 89000, 79000],
  ["F", 33750000, 112000, 96000],
  ["G", 40430000, 137000, 115000],
  ["H", 61300000, 252000, 196000],
  ["I", 68600000, 455000, 335000],
  ["J", 78590000, 540000, 394000],
  ["K", 94800000, 765000, 518000]
];
const incomeInput = $("#mono-income");
const typeSelect = $("#mono-type");

function calcMono() {
  const raw = Number(incomeInput.value.replace(/\D/g, ""));
  incomeInput.value = raw ? fmtNum(raw) : "";
  const out = $("#mono-result");
  if (!raw) {
    out.innerHTML = `<p class="muted">Ingresá un monto para ver tu categoría.</p>`;
    return;
  }
  const idx = ESCALA.findIndex(([, tope]) => raw <= tope);
  if (idx === -1) {
    out.innerHTML = `
      <p class="calc-result__warn">Superás el tope del monotributo</p>
      <p>Con esa facturación corresponde pasar a <b>responsable inscripto</b>. Te ayudamos a hacer el cambio sin multas.</p>`;
    return;
  }
  const [cat, tope, cs, cb] = ESCALA[idx];
  const cuota = typeSelect.value === "servicios" ? cs : cb;
  const uso = Math.round((raw / tope) * 100);
  out.innerHTML = `
    <div class="calc-result__row">
      <div><small>Categoría</small><b class="calc-result__cat">${cat}</b></div>
      <div><small>Cuota mensual estimada</small><b>$ ${fmtNum(cuota)}</b></div>
    </div>
    <div class="meter"><span style="width:${uso}%" class="${uso >= 85 ? "is-warn" : ""}"></span></div>
    <p class="small">${uso}% del tope de la categoría ($ ${fmtNum(tope)}).
      ${uso >= 85 ? "<b>Estás cerca del límite:</b> conviene planificar la próxima recategorización." : "Tenés margen hasta la próxima recategorización."}</p>`;
}
incomeInput.addEventListener("input", calcMono);
typeSelect.addEventListener("change", calcMono);
$("#mono-calc").addEventListener("submit", (e) => e.preventDefault());

// ---------- Vencimientos ----------
// Días de referencia por terminación de CUIT (0-9). Si cae fin de semana, pasa al lunes.
const OBLIGACIONES = [
  { nombre: "Autónomos", detalle: "Aportes previsionales", dias: [5, 5, 5, 5, 6, 6, 6, 7, 7, 7] },
  { nombre: "Cargas sociales (F.931)", detalle: "Empleadores", dias: [9, 9, 9, 9, 10, 10, 10, 11, 11, 11] },
  { nombre: "Ingresos Brutos Mendoza", detalle: "Régimen local", dias: [15, 15, 15, 15, 16, 16, 16, 17, 17, 17] },
  { nombre: "IVA", detalle: "DDJJ y pago mensual", dias: [18, 18, 19, 19, 20, 20, 21, 21, 22, 22] },
  { nombre: "Monotributo", detalle: "Pago mensual", dias: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
];

const today = new Date();
today.setHours(0, 0, 0, 0);

function dueDate(year, month, day) {
  const d = new Date(year, month, day);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}

function dueList(year, month, cuit) {
  return OBLIGACIONES
    .map((o) => ({ ...o, fecha: dueDate(year, month, o.dias[cuit]) }))
    .sort((a, b) => a.fecha - b.fecha);
}

let cuit = 0;
$("#cuit").innerHTML = `<span>Terminación de CUIT</span><div>${[...Array(10).keys()]
  .map((n) => `<button class="${n === 0 ? "is-active" : ""}" data-cuit="${n}" aria-pressed="${n === 0}">${n}</button>`)
  .join("")}</div>`;

function renderCal() {
  // Si ya pasaron todos los vencimientos del mes, mostramos el mes siguiente
  let list = dueList(today.getFullYear(), today.getMonth(), cuit);
  if (!list.some((v) => v.fecha >= today)) list = dueList(today.getFullYear(), today.getMonth() + 1, cuit);
  const next = list.find((v) => v.fecha >= today);
  $("#cal-month").textContent = list[0].fecha.toLocaleDateString("es-AR", { month: "long" });
  $("#cal").innerHTML = list.map((v) => {
    const days = Math.round((v.fecha - today) / 86400000);
    const state = days < 0 ? "is-past" : v === next ? "is-next" : "";
    const label = days < 0 ? "Vencido" : days === 0 ? "Vence hoy" : days === 1 ? "Mañana" : `En ${days} días`;
    return `
      <li class="cal__item ${state}">
        <div class="cal__date"><b>${v.fecha.getDate()}</b><span>${v.fecha.toLocaleDateString("es-AR", { weekday: "short" })}</span></div>
        <div class="cal__info"><b>${v.nombre}</b><span>${v.detalle}</span></div>
        <span class="cal__when">${label}</span>
      </li>`;
  }).join("");

  // Tarjeta del hero: próximo vencimiento
  $("#next-due-name").textContent = next.nombre;
  $("#next-due-date").textContent = `${fmtDay(next.fecha)} · CUIT terminado en ${cuit}`;
}

$("#cuit").addEventListener("click", (e) => {
  const b = e.target.closest("[data-cuit]");
  if (!b) return;
  cuit = Number(b.dataset.cuit);
  $$("[data-cuit]").forEach((x) => {
    x.classList.toggle("is-active", x === b);
    x.setAttribute("aria-pressed", x === b);
  });
  renderCal();
});

renderPlans();
showProfile("mono");
renderCal();
