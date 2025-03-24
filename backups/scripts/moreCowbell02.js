let hasPressedOnce = false;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("confetti-reset-button");
  if (!button) return;

  button.addEventListener("click", async () => {
    localStorage.removeItem("visited");

    const sound = new Audio("../assets/unbelievable_jingle.mp3");

    if (!hasPressedOnce) {
      // 🔊 First click: play sound once
      sound.play();

      // 🎉 Load moreCowbell effect
      const module = await import("./confettiExplosion.js");
      module.runWildConfetti();

      hasPressedOnce = true;
    } else {
      // 🔊 Second click: loop sound 3x
      let playCount = 0;
      const playLoop = () => {
        if (playCount < 3) {
          sound.currentTime = 0;
          sound.play();
          playCount++;
          sound.onended = playLoop;
        }
      };
      playLoop();

      // 🔥 Load full-blown madness
      const madness = await import("./fullBlownMadness.js");
      madness.runWildConfetti();
    }
  });
});
