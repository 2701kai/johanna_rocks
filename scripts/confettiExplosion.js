// confettiExplosion.js
export function runWildConfetti() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 300,
        spread: 360,
        startVelocity: 45,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.8,
        },
        scalar: 1.2 + Math.random(),
        ticks: 200,
      });
    }, i * 250);
  }

  // Extra fancy mega burst after a delay
  setTimeout(() => {
    confetti({
      particleCount: 500,
      spread: 360,
      origin: { y: 0.5 },
      scalar: 2,
      ticks: 300,
    });
  }, 3000);
}
