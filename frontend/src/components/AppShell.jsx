import { useEffect, useMemo, useState } from "react";
import {
  Timer, History, LifeBuoy, Settings, ChevronRight, ChevronLeft, BookOpen, Compass, FileDown,
  Sparkles, Smartphone, Heart, Shield, MessageCircleQuestion, Clock, MessageCircle, Printer, Trash2, ClipboardList,
} from "lucide-react";
import { t, currentLocale } from "@/i18n";
import { shortDate } from "@/i18n/dates";
import { manualUrl, guideUrl, manualPdfUrl } from "@/utils/manual";
import { DONATION_URL, donationAvailable, playStoreUrl, suggestPlayStoreApp } from "@/utils/donation";
import { loadHistory, deleteReport, openReport } from "@/utils/studyHistory";
import { Report } from "@/pages/ReportPage";

/**
 * Piezas del aspecto de app (móvil y tableta): barra superior, barra de pestañas
 * y las pantallas Historial y Ayuda. El estilo de cada plataforma (Android / iPhone)
 * sale de index.css según <html data-ui="android|ios">.
 */

export const APP_TABS = [
  { id: "study", icon: Timer, label: "tabStudy" },
  { id: "history", icon: History, label: "tabHistory" },
  { id: "help", icon: LifeBuoy, label: "tabHelp" },
  { id: "settings", icon: Settings, label: "settings" },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return scrolled;
}

/**
 * Barra superior.
 * - Android: barra de 64 px con el título a la izquierda; toma color al desplazar.
 * - iPhone: título grande que, al desplazar, pasa a una barra fina con el título centrado.
 */
export function AppTopBar({ ui, title, actions = null, onBack }) {
  const scrolled = useScrolled(ui === "ios" ? 34 : 4);
  if (ui === "ios") {
    return (
      <>
        <header className={`app-topbar app-topbar-ios ${scrolled ? "is-scrolled" : ""}`} data-testid="app-topbar">
          <div className="app-topbar-row">
            <span className="app-topbar-side">
              {onBack && (
                <button className="app-back" onClick={onBack} data-testid="app-back">
                  <ChevronLeft className="w-6 h-6" strokeWidth={2.4} /> {t("tabHistory")}
                </button>
              )}
            </span>
            <span className="app-topbar-small" aria-hidden={!scrolled}>{title}</span>
            <span className="app-topbar-side app-topbar-actions">{actions}</span>
          </div>
        </header>
        <h1 className="app-large-title" data-testid="app-title">{title}</h1>
      </>
    );
  }
  return (
    <header className={`app-topbar app-topbar-android ${scrolled ? "is-scrolled" : ""}`} data-testid="app-topbar">
      {onBack && (
        <button className="app-icon-btn" onClick={onBack} aria-label={t("tabHistory")} data-testid="app-back">
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      <h1 className="app-topbar-title" data-testid="app-title">{title}</h1>
      <div className="app-topbar-actions">{actions}</div>
    </header>
  );
}

/** Botón de icono para la barra superior. */
export function AppIconButton({ icon: Icon, label, onClick, testid }) {
  return (
    <button className="app-icon-btn" onClick={onClick} aria-label={label} title={label} data-testid={testid}>
      <Icon className="w-6 h-6" strokeWidth={1.9} />
    </button>
  );
}

/** Barra de pestañas inferior. */
export function AppTabBar({ tab, onChange }) {
  return (
    <nav className="app-tabbar" aria-label={t("appName")} data-testid="app-tabbar">
      {APP_TABS.map((tb) => {
        const Icon = tb.icon;
        const on = tab === tb.id;
        return (
          <button
            key={tb.id}
            className={`app-tab ${on ? "is-active" : ""}`}
            aria-current={on ? "page" : undefined}
            onClick={() => onChange(tb.id)}
            data-testid={`app-tab-${tb.id}`}
          >
            <span className="app-tab-icon"><Icon strokeWidth={on ? 2.2 : 1.8} /></span>
            <span className="app-tab-label">{t(tb.label)}</span>
          </button>
        );
      })}
    </nav>
  );
}

/** Grupo de filas (lista agrupada en iPhone, lista con separadores en Android). */
export function AppSection({ title, footer, children, testid }) {
  return (
    <section className="app-section" data-testid={testid}>
      {title && <h2 className="app-section-title">{title}</h2>}
      <div className="app-section-body">{children}</div>
      {footer && <p className="app-section-footer">{footer}</p>}
    </section>
  );
}

/** Fila de lista: enlace o botón, con icono, texto y detalle a la derecha. */
export function AppRow({ icon: Icon, tone = "brand", label, sub, detail, href, onClick, external, testid, chevron = true, children }) {
  const inner = (
    <>
      {Icon && <span className={`app-row-icon tone-${tone}`}><Icon strokeWidth={2} /></span>}
      <span className="app-row-text">
        <span className="app-row-label">{label}</span>
        {sub && <span className="app-row-sub">{sub}</span>}
        {children}
      </span>
      {detail != null && <span className="app-row-detail">{detail}</span>}
      {chevron && <ChevronRight className="app-row-chevron" />}
    </>
  );
  if (href) {
    return (
      <a className="app-row" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} data-testid={testid}>
        {inner}
      </a>
    );
  }
  return <button className="app-row" onClick={onClick} data-testid={testid}>{inner}</button>;
}

/** Pantalla «Ayuda»: guía, manual, novedades y la información que antes iba al pie de la web. */
export function HelpScreen({ onWhatsNew }) {
  return (
    <div className="app-screen" data-testid="help-screen">
      <AppSection>
        <AppRow icon={Compass} tone="brand" label={t("quickGuide")} href={guideUrl()} external testid="help-guide" />
        <AppRow icon={BookOpen} tone="blue" label={t("userManual")} href={manualUrl()} external testid="help-manual" />
        <AppRow icon={FileDown} tone="indigo" label={t("manualPdf")} href={manualPdfUrl()} external testid="help-manual-pdf" />
        <AppRow icon={Sparkles} tone="purple" label={t("whatsNewLink")} onClick={onWhatsNew} testid="help-whats-new" />
      </AppSection>
      <AppSection title={t("aboutApp")} footer={`${t("unofficialNotice")} · © safeSingleMark S.L.`}>
        {suggestPlayStoreApp() && (
          <AppRow icon={Smartphone} tone="green" label={t("playLink")} href={playStoreUrl("app-help")} external testid="help-play" />
        )}
        {donationAvailable() && (
          <AppRow icon={Heart} tone="red" label={t("donate")} sub={t("donateHint")} href={DONATION_URL} external testid="help-donate" />
        )}
        <AppRow icon={Shield} tone="gray" label={t("privacyPolicy")} href="/privacidad" testid="help-privacy" />
        <AppRow icon={MessageCircleQuestion} tone="gray" label={t("supportPage")} href="/soporte" testid="help-support" />
      </AppSection>
    </div>
  );
}

const pad = (n) => String(n).padStart(2, "0");
function mmss(sec) {
  const s = Math.max(0, Math.round(sec || 0));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h ? `${h}:${pad(m)}:${pad(s % 60)}` : `${m}:${pad(s % 60)}`;
}
const clock = (ms) => (ms ? new Date(ms).toLocaleTimeString(currentLocale(), { hour: "2-digit", minute: "2-digit" }) : "—");

/** Pantalla «Historial»: lista de estudios terminados y el informe de cada uno. */
export function HistoryScreen({ selectedId, onSelect }) {
  const [version, setVersion] = useState(0);
  const [confirmId, setConfirmId] = useState(null);
  const history = useMemo(() => loadHistory(), [version]); // eslint-disable-line react-hooks/exhaustive-deps
  const report = selectedId ? history.find((r) => r.id === selectedId) : null;

  if (report) {
    return (
      <div className="app-screen app-report" data-testid="history-detail">
        <Report report={report} />
        <button className="app-wide-btn" onClick={() => openReport(report.id)} data-testid="history-print">
          <Printer className="w-5 h-5" /> {t("rpPrint")}
        </button>
      </div>
    );
  }

  const remove = (rid) => {
    if (confirmId !== rid) { setConfirmId(rid); return; }
    deleteReport(rid);
    setConfirmId(null);
    setVersion((v) => v + 1);
  };

  return (
    <div className="app-screen" data-testid="history-screen">
      {history.length === 0 ? (
        <div className="app-empty" data-testid="history-empty">
          <ClipboardList className="w-12 h-12" strokeWidth={1.5} />
          <p>{t("historyEmpty")}</p>
        </div>
      ) : (
        <AppSection footer={t("rpOnDevice")} testid="history-list">
          {history.map((r) => {
            const dur = Math.round((r.endedAt - r.startedAt) / 1000);
            return (
              <div key={r.id} className="app-row-wrap">
                <AppRow
                  label={r.titleLine || r.articleLine}
                  onClick={() => onSelect(r.id)}
                  testid="history-item"
                >
                  <span className="app-row-sub app-row-meta">
                    <span>{shortDate(r.startedAt)}</span>
                    <span><Clock className="w-3 h-3" />{clock(r.startedAt)}–{clock(r.endedAt)} · {mmss(dur)}</span>
                    <span><MessageCircle className="w-3 h-3" />{r.totalComments || 0}</span>
                  </span>
                </AppRow>
                <button
                  className={`app-row-delete ${confirmId === r.id ? "is-confirm" : ""}`}
                  onClick={() => remove(r.id)}
                  aria-label={t("rpDelete")}
                  data-testid="history-delete"
                >
                  <Trash2 className="w-4 h-4" />{confirmId === r.id ? t("rpDeleteConfirm") : null}
                </button>
              </div>
            );
          })}
        </AppSection>
      )}
    </div>
  );
}
