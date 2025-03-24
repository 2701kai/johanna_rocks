// document
//   .getElementById("confetti-reset-btn")
//   .addEventListener("click", async () => {
//     localStorage.removeItem("visited");

//     // 3x Wooooooow! :)
//     const sound = new Audio("../assets/unbelievable_jingle.mp3");
//     let playCount = 0;

//     const playLoop = () => {
//       if (playCount < 3) {
//         sound.currentTime = 0;
//         sound.play();
//         playCount++;
//         sound.onended = playLoop;
//       }
//     };
//     playLoop();

//     // Dynamically import the dramatic confetti module
//     const module = await import("./confettiExplosion.js");
//     module.runWildConfetti();
//   });

// --------------------------------------------------------------------------------------
// didn´t work, dev tools returned
// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// due to: event existing BEFORE button existed.
// solution: wait until DOM content fully loaded before attaching e.listener
// e.g. w. wrapper DOMContentLoaded:

//

// --------------------------------------------------------------------------------------
// update to FULL BLOWN MADNESS:

let hasPressedOnce = false;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("confetti-reset-button");
  if (!button) return;

  button.addEventListener("click", async () => {
    localStorage.removeItem("visited");

    // 3x Wooooooow! :)
    const sound = new Audio("../assets/unbelievable_jingle.mp3");
    sound.play();

    // Dynamically import the dramatic confetti module
    const module = await import("./confettiExplosion.js");
    module.runWildConfetti();
  });
});
