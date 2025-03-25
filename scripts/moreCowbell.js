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
  clickCount++;

  const sound = new Audio("../assets/unbelievable_jingle.mp3");
  const sound2 = new Audio("../assets/plexico-1-shorter.mp3");

  if (clickCount === 1) {
    // First click: one sound + mild confetti
    sound.play();
    const module = await import("./confettiExplosion.js");
    module.runWildConfetti();

    // added image of minions after first button-click ------------
    const srcImage = document.createElement("img");
    srcImage.src = "./assets/tenor_1.webp";
    srcImage.alt = "";
    srcImage.classList.add("src");
    document.querySelector(".minions").appendChild(srcImage);

    // also moved hint after first button-click from html----------
    const hint = document.createElement("div");
    hint.classList.add("hint");
    hint.innerHTML = `<small> Press <kbd>ESC</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd> </small>
      <br />
      <small> to stop the madness <br />at any time. </small>`;
    document.querySelector(".minions").appendChild(hint);

    // then moved opacity from css to js after first button-click---
    hint.style.opacity = "1";
    hint.style.transition = "opacity 5s ease-in-out";

    setTimeout(() => {
      hint.classList.add("fade-out");
      hint.style.opacity = "0";
    }, 6000);

    // ------------------------------------------------------------
  } else if (clickCount === 2) {
    // Second click: play sound twice
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
    // Third click: play sound 3x
    let playCount = 0;
    const playLoop = () => {
      if (playCount < 3) {
        sound.currentTime = 0;
        // sound.play();
        // chgd.to plexico 1x
        sound2.play();
        playCount++;
        sound.onended = playLoop;
      }
    };
    playLoop();

    triggerADHD();
  } else if (clickCount === 4) {
    const shrink = await import("./contactYourShrink.js");
    shrink.goMultiverseMadness();
  }
}

async function triggerADHD() {
  const adhd = await import("./adhdMode.js");
  adhd.goAbsolutelyBonkers();
}
