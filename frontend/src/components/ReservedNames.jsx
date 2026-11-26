import { Hand } from "lucide-react";
import { t } from "@/i18n";

/** Chip pequeño con los nombres reservados (en la lista de párrafos y preguntas). */
export function ReservedChip({ names, darkMode, testid }) {
  if (!names?.length) return null;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${darkMode ? "bg-emerald-900/70 text-emerald-200" : "bg-emerald-100 text-emerald-800"}`} data-testid={testid}>
      <Hand className="w-3 h-3 shrink-0" /> {names.join(", ")}
    </span>
  );
}

/** Aviso grande cuando toca el párrafo o la pregunta reservada. */
export function ReservedBanner({ names, darkMode, testid }) {
  if (!names?.length) return null;
  return (
    <div className={`mx-3 mb-2 rounded-xl border-2 px-3 py-2 flex items-center gap-2.5 ${darkMode ? "bg-emerald-950/60 border-emerald-500 text-emerald-100" : "bg-emerald-50 border-emerald-500 text-emerald-900"}`} data-testid={testid}>
      <span className="w-8 h-8 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center"><Hand className="w-4 h-4" /></span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-wide opacity-80">{t("reservedNow")}</span>
        <span className="block text-lg font-black leading-tight">{names.join(", ")}</span>
      </span>
    </div>
  );
}
