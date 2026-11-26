import { useRef, useCallback } from 'react';

/**
 * Tipos de sonido de los avisos (Ajustes → Avisos → Tipo de sonido).
 * «beep» (un solo pitido corto y discreto) es el de serie: los sonidos largos
 * distraían al conductor. «classic» es el sonido anterior (2–3 pitidos y tono largo).
 */
export const SOUND_STYLES = ['beep', 'soft', 'double', 'chime', 'classic'];
export const DEFAULT_SOUND_STYLE = 'beep';

export function useNotifications(soundEnabled, vibrationEnabled, soundStyle = DEFAULT_SOUND_STYLE) {
  const audioContextRef = useRef(null);

  const triggerVibration = useCallback((pattern) => {
    if (!vibrationEnabled) return;
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (error) {
        console.log('Vibration not supported');
      }
    }
  }, [vibrationEnabled]);

  /** Reproduce un sonido. type: 'warning' | 'urgent' | 'final'. style: para escuchar un tipo en Ajustes. */
  const playNotificationSound = useCallback((type = 'warning', style, force = false) => {
    if (!soundEnabled && !force) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
      const t0 = ctx.currentTime + 0.02;

      // Un tono con subida y bajada suaves (sin chasquido)
      const tone = (freq, at, dur, gain = 0.25, wave = 'sine', endFreq) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.connect(g);
        g.connect(ctx.destination);
        osc.type = wave;
        osc.frequency.setValueAtTime(freq, t0 + at);
        if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t0 + at + dur);
        g.gain.setValueAtTime(0.0001, t0 + at);
        g.gain.exponentialRampToValueAtTime(gain, t0 + at + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
        osc.start(t0 + at);
        osc.stop(t0 + at + dur + 0.02);
      };

      switch (style || soundStyle || DEFAULT_SOUND_STYLE) {
        case 'soft':
          tone(523, 0, 0.35, 0.18, 'triangle');
          break;
        case 'double':
          tone(880, 0, 0.12, 0.22);
          tone(880, 0.2, 0.12, 0.22);
          break;
        case 'chime':
          tone(988, 0, 0.35, 0.18);
          tone(784, 0.22, 0.5, 0.18);
          break;
        case 'classic':
          if (type === 'urgent') {
            [0, 0.3, 0.6].forEach((at) => tone(1100, at, 0.2, 0.4));
          } else if (type === 'final') {
            tone(660, 0, 1, 0.5);
            tone(660, 1.1, 0.5, 0.5, 'sine', 1320);
          } else {
            tone(880, 0, 0.3, 0.3);
            tone(880, 0.4, 0.3, 0.3);
          }
          break;
        case 'beep':
        default:
          tone(880, 0, 0.12, 0.22);
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [soundEnabled, soundStyle]);

  return {
    playNotificationSound,
    triggerVibration,
    audioContextRef,
  };
}
