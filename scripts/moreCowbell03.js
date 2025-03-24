let clickCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("confetti-reset-button");
  if (!button) return;

  button.addEventListener("click", () => {
    localStorage.removeItem("visited");
    handleClick();
  });

  // 💻 Keyboard shortcut: press 'A' to trigger ADHD mode
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "a") {
      triggerADHD();
    }
  });
});

async function handleClick() {
  const sound = new Audio("../assets/unbelievable_jingle.mp3");

  clickCount++;

  if (clickCount === 1) {
    sound.play();
    const module = await import("./confettiExplosion.js");
    module.runWildConfetti();
  } else if (clickCount === 2) {
    let playCount = 0;
    const playLoop = () => {
      if (playCount < 2) {
        sound.currentTime = 0;
        sound.play();
        playCount++;
        sound.onended = playLoop;
      }
    };
    playLoop();

    const madness = await import("./fullBlownMadness.js");
    madness.runWildConfetti();
  } else if (clickCount === 3) {
    let playCount = 0;
    const playLoop = () => {
      if (playCount < 3) {
        sound.currentTime = 0;
        sound.play();
        playCount++;
        sound.onended = playLoop;
      }
      triggerADHD();
    };
  }

  async function triggerADHD() {
    const adhd = await import("./adhdMode.js");
    adhd.goAbsolutelyBonkers();
  }
}
