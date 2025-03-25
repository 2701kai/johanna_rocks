import { activateEscapeKey } from "./stopTheMadness.js";
activateEscapeKey();
// ------------------------------------------------------------

// confettiExplosion.js

export function runWildConfetti() {
  emojiExplosion();
  flashBackground();
  spinMinions();

  // Regular confetti burst x10
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 360,
        angle: Math.random() * 360,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.8,
        },
        scalar: 1.1 + Math.random() * 0.5,
        ticks: 180,
      });
    }, i * 200);
  }
}

// 🎉 1. Emoji Confetti!
function emojiExplosion() {
  const emojis = ["🎉", "😂", "🔥", "🌈", "💖", "🍌", "🦄"];
  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = "fixed";
    span.style.fontSize = `${Math.random() * 3 + 2}rem`;
    span.style.left = `${Math.random() * 100}vw`;
    span.style.top = `${Math.random() * 100}vh`;
    span.style.transition = "all 5s ease-out";
    span.style.zIndex = "9999";
    document.body.appendChild(span);

    requestAnimationFrame(() => {
      span.style.transform = `translateY(${
        100 + Math.random() * 100
      }px) rotate(${Math.random() * 360}deg)`;
      span.style.opacity = "0";
    });

    setTimeout(() => span.remove(), 6000);
  }
}

// 🌈 2. Flashing Background Colors
function flashBackground() {
  const colors = ["#ff4a11", "#00ffff", "#ff00ff", "#ffff00", "#00ff00"];
  let count = 0;
  const interval = setInterval(() => {
    document.body.style.backgroundColor = colors[count % colors.length];
    count++;
    if (count > 15) {
      clearInterval(interval);
      document.body.style.backgroundColor = ""; // reset
    }
  }, 150);
}

// 💫 3. Rotating Minions
function spinMinions() {
  const minion = document.querySelector(".minions img");
  if (!minion) return;

  minion.style.transition = "transform 4s ease-in-out";
  minion.style.transform = "rotate(1080deg)";
  setTimeout(() => {
    minion.style.transform = "rotate(0deg)";
  }, 5000);
}
