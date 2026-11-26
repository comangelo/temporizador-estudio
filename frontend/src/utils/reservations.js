/**
 * Comentarios reservados: alguien pide al conductor, antes del estudio, comentar
 * en un párrafo o en una pregunta de repaso concreta. Se guardan por artículo
 * (nombre del PDF) en este dispositivo; se conservan los 10 artículos más recientes.
 *
 * Cada reserva: { id, kind: 'p' (párrafo) | 'r' (pregunta de repaso), n, name }
 *   'p' → n = número del párrafo · 'r' → n = número de la pregunta de repaso (1, 2…)
 */
const KEY = "pdfTimer_reservations";

const readAll = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; }
};

export function loadReservations(article) {
  if (!article) return [];
  const items = readAll()[article]?.items;
  return Array.isArray(items) ? items : [];
}

export function saveReservations(article, items) {
  if (!article) return;
  try {
    const all = readAll();
    if (items.length) all[article] = { items, at: Date.now() };
    else delete all[article];
    Object.keys(all).sort((a, b) => (all[b].at || 0) - (all[a].at || 0)).slice(10).forEach((k) => delete all[k]);
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch { /* sin almacenamiento */ }
}

/** Nombres reservados para un párrafo o grupo de párrafos (números) o para una pregunta de repaso. */
export const namesForParagraphs = (items, numbers) =>
  items.filter((r) => r.kind === "p" && numbers.includes(r.n)).map((r) => r.name);
export const namesForReview = (items, idx) =>
  items.filter((r) => r.kind === "r" && r.n === idx + 1).map((r) => r.name);
