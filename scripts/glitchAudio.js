import { activateEscapeKey } from "./stopTheMadness.js";
activateEscapeKey();
// ------------------------------------------------------------

// Glitchy Audio Loop 🔊
export function glitchyAudio() {
  const sound = new Audio("../assets/unbelievable_jingle.mp3");
  sound.loop = true;
  sound.playbackRate = 1 + Math.random() * 0.2;

  setTimeout(() => {
    sound.play().catch(() => {});
  }, 1500);

  setInterval(() => {
    sound.playbackRate = 0.8 + Math.random() * 0.4;
  }, 2000);
}
