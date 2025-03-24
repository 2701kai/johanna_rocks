import { activateEscapeKey } from "./stopTheMadness.js";
activateEscapeKey();
// ------------------------------------------------------------

export function goMultiverseMadness() {
  cloneMinions();
  shakeCamera();
  glitchEverything();
}

// 1. 👯 Clone minions endlessly (limit for performance!)
function cloneMinions(count = 10) {
  const base = document.querySelector(".minions img");
  if (!base) return;

  for (let i = 0; i < count; i++) {
    const clone = base.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.left = `${Math.random() * 90}vw`;
    clone.style.top = `${Math.random() * 80}vh`;
    clone.style.transform = `rotate(${Math.random() * 360}deg) scale(${
      Math.random() * 1.5 + 0.5
    })`;
    clone.style.opacity = "0.8";
    clone.style.zIndex = "9999";
    clone.classList.add("chaos-minion");
    document.body.appendChild(clone);
  }
}

// 2. 📸 Camera shake
function shakeCamera(duration = 1500) {
  const body = document.body;
  body.classList.add("shake-it");

  setTimeout(() => {
    body.classList.remove("shake-it");
  }, duration);
}

// 3. 🌀 Glitch text and images
function glitchEverything() {
  setInterval(() => {
    document.querySelectorAll("h1, h2, p, a, button, span").forEach((el) => {
      el.style.transform = `rotate(${Math.random() * 2 - 1}deg) scale(${
        0.95 + Math.random() * 0.1
      })`;
      el.style.filter = `blur(${Math.random() * 1.5}px) brightness(${
        0.8 + Math.random() * 0.5
      })`;
    });

    document.querySelectorAll("img").forEach((img) => {
      img.style.filter = `hue-rotate(${Math.random() * 360}deg) contrast(${
        1 + Math.random()
      })`;
      img.style.transform = `scale(${0.9 + Math.random() * 0.3}) rotate(${
        Math.random() * 4 - 2
      }deg)`;
    });
  }, 500);
}
