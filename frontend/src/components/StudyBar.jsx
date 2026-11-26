import React from "react";
import { t } from "@/i18n";

/**
 * Barra del estudio: todo el estudio en una línea, sin colores propios.
 *  - relleno blanco = lo que ya llevas; blanco suave = lo que falta
 *  - raya = dónde deberías ir según la hora
 *  - texto: «A tiempo» · «2 min tarde · −15 s por pregunta» · «1 min adelantado»
 * variant: "dark" (fondo gris oscuro neutro: el retraso se escribe en ámbar)
 *          "color" (fondo verde/amarillo/rojo del semáforo: todo en blanco)
 *          "ring" (diseño «Anillo»: toma los colores del estado, variables --ring-*)
 */
export default function StudyBar({ bar, variant = "dark", size = "md", className = "", testid = "study-bar" }) {
  if (!bar) return null;
  const onColor = variant === "color";
  const onRing = variant === "ring";
  const done = onRing ? "var(--ring)" : onColor ? "rgba(255,255,255,0.92)" : "rgba(244,244,245,0.92)";
  const todo = onRing ? "var(--ring-track)" : onColor ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.14)";
  const lineColor = onRing ? "var(--ring-fg)" : onColor ? "#111" : "#fff";
  const ring = onRing ? "var(--ring-bg)" : onColor ? "rgba(255,255,255,0.95)" : "rgba(24,24,27,0.95)";

  let acc = 0;
  const big = size === "lg";
  const text = bar.status === "late"
    ? t("barLate", { n: bar.minutes })
    : bar.status === "early" ? t("barEarly", { n: bar.minutes }) : t("barOnTime");
  const showPerQ = bar.status === "late" && bar.perQuestionDelta <= -1;
  const statusColor = onRing ? "" : bar.status === "late" && !onColor ? "text-amber-400" : onColor ? "text-white" : "text-zinc-100";

  return (
    <div className={`w-full ${className}`} data-testid={testid} data-status={bar.status}>
      <div className={`relative w-full ${big ? "h-3" : "h-2.5"}`}>
        {/* tramos */}
        <div className="absolute inset-0 flex gap-[2px]">
          {bar.segments.map((s, i) => {
            const from = acc; acc += s.frac;
            // parte rellena de este tramo (según «dónde vas»)
            const fill = Math.max(0, Math.min(1, (bar.youFrac - from) / (s.frac || 1)));
            return (
              <div key={i} className="relative h-full rounded-[3px] overflow-hidden" style={{ flex: `${Math.max(s.frac, 0.004)} 1 0`, background: todo }}>
                <div className="absolute inset-y-0 left-0" style={{ width: `${fill * 100}%`, background: done }} />
              </div>
            );
          })}
        </div>
        {/* dónde deberías ir */}
        <div
          className={`absolute rounded-full transition-[left] duration-1000 ease-linear ${big ? "-top-[7px] -bottom-[7px] w-[4px]" : "-top-[6px] -bottom-[6px] w-[3px]"}`}
          style={{ left: `calc(${bar.shouldFrac * 100}% - ${big ? 2 : 1.5}px)`, background: lineColor, boxShadow: `0 0 0 2px ${ring}` }}
          data-testid={`${testid}-should`}
        />
      </div>
      <p className={`mt-2.5 text-center tabular-nums leading-tight ${big ? "text-xl md:text-2xl" : "text-base"}`} data-testid={`${testid}-text`}>
        <b className={`font-bold ${statusColor}`} style={onRing ? { color: bar.status === "late" ? "var(--ring)" : "var(--ring-fg)" } : undefined}>{text}</b>
        {showPerQ && (
          <span className={`ml-2 font-medium ${big ? "text-base md:text-lg" : "text-sm"} ${onRing ? "opacity-75" : onColor ? "text-white/85" : "text-zinc-300"}`}>
            {t("barPerQuestion", { s: Math.abs(bar.perQuestionDelta) })}
          </span>
        )}
      </p>
    </div>
  );
}
