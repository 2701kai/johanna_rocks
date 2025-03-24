if (!localStorage.getItem("visited  ")) {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
  //   bigger woooow:
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
    });
  }, 750);

  //   localStorage.setItem("visited", "true");
}
