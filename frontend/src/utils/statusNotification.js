/**
 * Icono en la barra del móvil mientras se dirige el estudio.
 *
 * Si el estudio está en marcha y el conductor cambia a otra app (o apaga la pantalla),
 * se muestra una notificación silenciosa «Estudio en curso · termina a las 11:40».
 * En Android aparece como icono pequeño arriba; al tocarla se vuelve a la app.
 * Al volver a la app, o al terminar el estudio, se quita.
 */
const TAG = "estudio-en-curso";

export const notificationsSupported = () =>
  typeof window !== "undefined" && "Notification" in window && "serviceWorker" in navigator;

export const notificationPermission = () => (notificationsSupported() ? Notification.permission : "unsupported");

export async function requestNotificationPermission() {
  if (!notificationsSupported()) return "unsupported";
  try { return await Notification.requestPermission(); } catch { return Notification.permission; }
}

export async function showStudyNotification(title, body) {
  if (notificationPermission() !== "granted") return;
  try {
    const reg = await navigator.serviceWorker.ready;
    await reg.showNotification(title, {
      body,
      tag: TAG,
      renotify: false,
      silent: true,
      requireInteraction: true,
      icon: "/icon-192.png",
      badge: "/badge-96.png",
      data: { url: "/" },
    });
  } catch { /* sin notificaciones */ }
}

export async function hideStudyNotification() {
  if (!notificationsSupported()) return;
  try {
    const reg = await navigator.serviceWorker.getRegistration();
    const list = reg ? await reg.getNotifications({ tag: TAG }) : [];
    list.forEach((n) => n.close());
  } catch { /* nada */ }
}
