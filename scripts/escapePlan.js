// escapePlan.js

export function activateEscapeKey() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      escapeEverything();
    }
  });
}

function escapeEverything() {
  // 1. Stop sounds
  document.querySelectorAll("audio").forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  // 2. Remove matrix canvas
  const matrix = document.getElementById("matrixCanvas");
  if (matrix) matrix.remove();

  // 3. Remove minion clones
  document.querySelectorAll(".chaos-minion").forEach((el) => el.remove());

  // 4. Stop font scrambling
  if (window._scrambleInterval) clearInterval(window._scrambleInterval);

  // 5. Remove portal effect
  document.querySelectorAll(".portal-effect").forEach((el) => el.remove());

  // 6. Reset background and filters
  document.body.style.backgroundColor = "";
  document.querySelectorAll("*").forEach((el) => {
    el.style.transform = "";
    el.style.filter = "";
  });
}
