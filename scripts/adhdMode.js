export function goAbsolutelyBonkers() {
  createMatrixCanvas();
  scrambleFonts();
}

// 1. Matrix Background 🌌
function createMatrixCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "matrixCanvas";
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "9998";
  canvas.style.pointerEvents = "none";
  canvas.style.backgroundColor = "transparent"; // <-- important!
  // canvas.style.opacity = "0.5";
  canvas.style.mixBlendMode = "screen";

  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars =
    "アァイゥエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
      ""
    );
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // translucent clear
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

// 2. Font Scramble 🌀
function scrambleFonts() {
  const scramble = () => {
    document.querySelectorAll("h1, h2, p, a, button, span").forEach((el) => {
      const original = el.textContent;
      const scrambled = original
        .split("")
        .map((c) =>
          Math.random() > 0.5
            ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
            : c
        )
        .join("");
      el.textContent = scrambled;
    });
  };

  // scramble every second forever 😈
  setInterval(scramble, 1000);
}
