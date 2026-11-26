import { useState } from "react";
import { Hand, Plus, X } from "lucide-react";
import { t } from "@/i18n";

/**
 * «Comentarios reservados»: el conductor apunta quién le pidió comentar en un párrafo
 * o en una pregunta de repaso. Cuando llega ese momento, la app enseña el nombre.
 */
export function ReservationsCard({ paragraphNumbers = [], finalCount = 0, items = [], onChange, darkMode }) {
  const [target, setTarget] = useState(paragraphNumbers.length ? `p:${paragraphNumbers[0]}` : finalCount ? "r:1" : "");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(items.length > 0);

  const label = (r) => (r.kind === "p" ? t("reservedParagraph", { n: r.n }) : t("reservedReview", { n: r.n }));
  const add = () => {
    const nm = name.trim();
    if (!nm || !target) return;
    const [kind, n] = target.split(":");
    onChange([...items, { id: `${Date.now()}`, kind, n: Number(n), name: nm }]
      .sort((a, b) => (a.kind === b.kind ? a.n - b.n : a.kind === "p" ? -1 : 1)));
    setName("");
  };
  const remove = (id) => onChange(items.filter((r) => r.id !== id));

  const card = darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-slate-200";
  const input = darkMode ? "bg-zinc-700 border-zinc-600 text-zinc-100 placeholder:text-zinc-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400";
  const muted = darkMode ? "text-zinc-400" : "text-slate-500";

  return (
    <div className={`rounded-2xl border shadow-sm ${card}`} data-testid="reservations-card">
      <button type="button" onClick={() => setOpen((v) => !v)} className="w-full flex items-center gap-3 p-3 text-left" aria-expanded={open} data-testid="reservations-toggle">
        <span className="w-9 h-9 shrink-0 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><Hand className="w-5 h-5" /></span>
        <span className="flex-1 min-w-0">
          <span className={`block text-sm font-semibold ${darkMode ? "text-zinc-100" : "text-slate-800"}`}>{t("reservedTitle")}</span>
          <span className={`block text-xs ${muted}`}>
            {items.length ? items.map((r) => `${r.name} (${label(r)})`).join(" · ") : t("reservedHint")}
          </span>
        </span>
        {items.length > 0 && <span className="shrink-0 min-w-[1.5rem] h-6 px-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">{items.length}</span>}
      </button>

      {open && (
        <div className={`px-3 pb-3 pt-1 border-t ${darkMode ? "border-zinc-700" : "border-slate-100"}`}>
          {items.length > 0 && (
            <ul className="space-y-1.5 my-2" data-testid="reservations-list">
              {items.map((r) => (
                <li key={r.id} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 ${darkMode ? "bg-zinc-700/60" : "bg-emerald-50"}`}>
                  <Hand className={`w-4 h-4 shrink-0 ${darkMode ? "text-emerald-300" : "text-emerald-700"}`} />
                  <span className={`flex-1 min-w-0 text-sm font-semibold truncate ${darkMode ? "text-zinc-100" : "text-slate-800"}`}>{r.name}</span>
                  <span className={`text-xs shrink-0 ${muted}`}>{label(r)}</span>
                  <button type="button" onClick={() => remove(r.id)} className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${darkMode ? "hover:bg-zinc-600 text-zinc-300" : "hover:bg-emerald-100 text-slate-500"}`} aria-label={t("reservedRemove")} data-testid={`reservation-remove-${r.id}`}>
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className={`text-xs mb-2 ${muted}`}>{t("reservedHint")}</p>
          <div className="flex flex-wrap gap-2">
            <select value={target} onChange={(e) => setTarget(e.target.value)} className={`h-10 rounded-lg border px-2 text-sm font-semibold ${input}`} data-testid="reservation-target">
              {paragraphNumbers.map((n) => <option key={`p${n}`} value={`p:${n}`}>{t("reservedParagraph", { n })}</option>)}
              {Array.from({ length: finalCount }, (_, i) => <option key={`r${i}`} value={`r:${i + 1}`}>{t("reservedReview", { n: i + 1 })}</option>)}
            </select>
            <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") add(); }}
              maxLength={40} placeholder={t("reservedName")} className={`h-10 flex-1 min-w-[8rem] rounded-lg border px-3 text-sm ${input}`} data-testid="reservation-name" />
            <button type="button" onClick={add} disabled={!name.trim()} className="h-10 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold inline-flex items-center gap-1 disabled:opacity-40" data-testid="reservation-add">
              <Plus className="w-4 h-4" /> {t("reservedAdd")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
