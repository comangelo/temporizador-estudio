/**
 * Donaciones voluntarias (Stripe, enlace de pago con importe libre).
 *
 * El botón solo se muestra en la web y en la versión instalada desde el navegador.
 * Dentro de las apps de tienda (Google Play y la futura app de iPhone/App Store)
 * NO se muestra: sus normas exigen su propio sistema de pagos dentro de la app.
 *
 * Mientras DONATION_URL esté vacío, el botón no aparece.
 */
export const DONATION_URL = 'https://buy.stripe.com/00w3co8x958ngB2beb00000';

const PLAY_PACKAGE = 'com.comangelo.temporizadorestudio';
const PLAY_FLAG = 'pdfTimer_playStoreApp';

/** true si la app se abrió desde la app de Google Play (Trusted Web Activity). */
export function isPlayStoreApp() {
  try {
    if (typeof document !== 'undefined' && document.referrer.startsWith(`android-app://${PLAY_PACKAGE}`)) {
      sessionStorage.setItem(PLAY_FLAG, '1');
      return true;
    }
    return sessionStorage.getItem(PLAY_FLAG) === '1';
  } catch {
    return false;
  }
}

/**
 * true si la web corre dentro de una app nativa hecha con Capacitor
 * (la futura app de iPhone/App Store). Capacitor define window.Capacitor.
 */
export function isNativeApp() {
  try {
    return typeof window !== 'undefined' && !!window.Capacitor?.isNativePlatform?.();
  } catch {
    return false;
  }
}

/** true dentro de cualquier app de tienda: Google Play (TWA) o app nativa (Capacitor). */
export function isStoreApp() {
  return isPlayStoreApp() || isNativeApp();
}

export function donationAvailable() {
  return !!DONATION_URL && !isStoreApp();
}

/** Enlace a la ficha de Google Play (con origen «web» para verlo en las estadísticas de Play Console). */
export function playStoreUrl(medium = 'banner') {
  const ref = encodeURIComponent(`utm_source=web&utm_medium=${medium}`);
  return `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${ref}`;
}

/** true en un móvil o tableta Android que usa la web (no la app de Google Play). */
export function suggestPlayStoreApp() {
  try {
    return /Android/i.test(navigator.userAgent) && !isStoreApp();
  } catch {
    return false;
  }
}
