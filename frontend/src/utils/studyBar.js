/**
 * «Barra del estudio»: todo el estudio de un vistazo.
 *
 * Compara DÓNDE VAS (el tramo actual) con DÓNDE DEBERÍAS IR según la hora, usando el
 * plan del inicio del estudio (no el recalculado: ese siempre «va a tiempo»).
 * El plan se hace con la duración real del estudio (de la hora de inicio a la de fin),
 * así que respeta «Cambiar hora de fin», la hora de la reunión y la visita del S. C.
 *
 * Tramos: introducción · cada párrafo o grupo · repaso · conclusión.
 */
import { buildStaticPlan } from './timePlan';

// Por debajo de esto se considera «a tiempo» (evita que el texto cambie por segundos)
export const ON_TIME_MARGIN = 60;

export function buildStudyBar({
  analysis,
  groups,            // groupedParagraphs (cada uno con .indices)
  startTime,
  endTime,
  now = Date.now(),
  phase,             // 'intro' | 'paragraphs' | 'review' | 'conclusion' | 'finished'
  currentGroupIndex, // índice en groups (fase de párrafos)
  currentReviewQuestion = 0,
  segmentElapsed = 0,
  introSeconds,
  conclusionSeconds,
  answerTime,
  longParagraphWeight = 1,
  livePerQuestion, // (no se usa: el recálculo en vivo no cambia mientras sigues en el mismo párrafo)
}) {
  if (!analysis || !startTime || !endTime || !groups?.length) return null;
  const start = new Date(startTime).getTime();
  const total = Math.max(1, (new Date(endTime).getTime() - start) / 1000);

  const plan = buildStaticPlan({
    analysis, totalSeconds: total, introSeconds, conclusionSeconds, answerTime, longParagraphWeight,
  });
  if (!plan) return null;
  const paragraphs = analysis.paragraphs || [];
  const finals = analysis.final_questions?.length || 0;

  // Duración prevista de cada tramo
  const segs = [{ kind: 'intro', dur: introSeconds }];
  groups.forEach((g, gi) => segs.push({
    kind: 'group', gi,
    dur: g.indices.reduce((s, i) => s + plan.paragraphDuration(paragraphs[i]), 0),
  }));
  if (finals > 0) segs.push({ kind: 'review', dur: finals * plan.perQuestion });
  segs.push({ kind: 'conclusion', dur: conclusionSeconds });

  const sum = segs.reduce((s, x) => s + Math.max(0, x.dur), 0) || 1;
  let acc = 0;
  segs.forEach((s) => { s.from = acc; acc += Math.max(0, s.dur); });

  // Tramo actual
  let cur;
  if (phase === 'intro') cur = 0;
  else if (phase === 'paragraphs') cur = 1 + Math.max(0, currentGroupIndex ?? 0);
  else if (phase === 'review') cur = segs.findIndex((s) => s.kind === 'review');
  else if (phase === 'conclusion') cur = segs.length - 1;
  else if (phase === 'finished') cur = segs.length;
  else return null;
  if (cur < 0) cur = segs.length - 1;

  // Dónde vas (segundos del plan): inicio del tramo + lo que llevas en él, sin pasar de su final
  let you;
  if (cur >= segs.length) you = sum;
  else {
    const s = segs[cur];
    let inSeg = segmentElapsed;
    if (s.kind === 'review') inSeg = currentReviewQuestion * plan.perQuestion + Math.min(segmentElapsed, plan.perQuestion);
    you = s.from + Math.min(Math.max(0, inSeg), Math.max(0, s.dur));
  }

  // Dónde deberías ir: lo que ha pasado del reloj
  const elapsed = Math.max(0, (now - start) / 1000);
  const should = Math.min(elapsed, sum);
  // Atraso (+) o adelanto (−) en segundos
  const delay = elapsed - you;

  // Si no se recupera el atraso, cuánto tiempo pierde cada turno de comentario que falta
  let unitsLeft = 0;
  if (phase === 'intro' || phase === 'paragraphs') {
    const lastIdx = cur === 0 ? -1 : Math.max(...groups[cur - 1].indices);
    for (let i = lastIdx + 1; i < paragraphs.length; i++) unitsLeft += plan.commentUnits.units[i] || 0;
    unitsLeft += finals;
  } else if (phase === 'review') {
    unitsLeft = Math.max(0, finals - currentReviewQuestion - 1);
  }
  const perQuestionDelta = delay > 0 && unitsLeft > 0 ? -delay / unitsLeft : 0;

  return {
    segments: segs.map((s) => ({ kind: s.kind, frac: Math.max(0, s.dur) / sum })),
    current: cur,
    youFrac: Math.min(1, you / sum),
    shouldFrac: Math.min(1, should / sum),
    delay,
    status: delay >= ON_TIME_MARGIN ? 'late' : delay <= -ON_TIME_MARGIN ? 'early' : 'ontime',
    minutes: Math.max(1, Math.round(Math.abs(delay) / 60)),
    perQuestionDelta: Math.round(perQuestionDelta),
    plannedPerQuestion: plan.perQuestion,
  };
}
