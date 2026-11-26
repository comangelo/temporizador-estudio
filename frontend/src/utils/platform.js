/**
 * Aspecto de la app según el aparato.
 *
 * - "android": móviles y tabletas Android (y otros aparatos táctiles). Estilo Material de Google.
 * - "ios": iPhone y iPad. Estilo de Apple.
 * - "web": ordenador (ratón). Aspecto de página web.
 *
 * Para probar otro aspecto: ?ui=android, ?ui=ios o ?ui=web en la dirección
 * (se recuerda mientras dure la pestaña).
 */
const KEY = "pdfTimer_ui";
const VALID = ["android", "ios", "web"];
let cached = null;

function detect() {
  try {
    const ua = navigator.userAgent || "";
    const ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
    if (ios) return "ios";
    if (/Android/i.test(ua)) return "android";
    const touchOnly = window.matchMedia?.("(pointer: coarse)")?.matches && !window.matchMedia?.("(hover: hover)")?.matches;
    return touchOnly ? "android" : "web";
  } catch {
    return "web";
  }
}

export function getUi() {
  if (cached) return cached;
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("ui");
    if (VALID.includes(fromUrl)) sessionStorage.setItem(KEY, fromUrl);
    const saved = sessionStorage.getItem(KEY);
    cached = VALID.includes(saved) ? saved : detect();
  } catch {
    cached = detect();
  }
  return cached;
}

/** true en el móvil y la tableta: barra de pestañas abajo y aspecto de app. */
export function isAppUi() {
  return getUi() !== "web";
}

/** Marca <html data-ui="…"> para que los estilos de cada plataforma se apliquen desde el principio. */
export function applyUi() {
  try {
    document.documentElement.dataset.ui = getUi();
  } catch {
    /* sin DOM */
  }
}
