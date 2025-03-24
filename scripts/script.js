import { activateEscapeKey } from "./stopTheMadness.js";
activateEscapeKey();
// ------------------------------------------------------------

//  second attempt, more dramatic:
// Helper function for a dramatic confetti blast
function blastConfetti(repeats = 1, delay = 500) {
  for (let i = 0; i < repeats; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 160,
        angle: Math.random() * 360,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.7,
        },
      });
    }, i * delay);
  }
}

// Run only on first visit
if (!localStorage.getItem("visited")) {
  const isBigScreen = window.innerWidth > 768;

  if (isBigScreen) {
    // More dramatic and repeated on large screens
    blastConfetti(6, 400); // 6 bursts every 400ms
  } else {
    // Simpler single burst for mobile
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  }

  //   localStorage.setItem("visited", "true");
}

// ------------------------------------------------------------------------
// chgd. visibilty of .hint by DOM manipulation after correcting false html
// ------------------------------------------------------------------------
const hint = document.querySelector(".hint");
setTimeout(() => {
  hint.classList.add("fade-out");
}, 3000);
setTimeout(() => {
  hint.remove();
}, 6000);
