// stopTheMadness.js - just reload page
// ------------------------------------------------------------

export function activateEscapeKey() {
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    // Reload on Escape key
    if (e.key === "Escape") {
      window.location.reload(); // boom. reboot reality.
    }

    // Reload on Ctrl + C (Windows/Linux) or Cmd + C (Mac)
    if ((e.ctrlKey || e.metaKey) && key === "c") {
      window.location.reload(); // boom. reboot reality.
    }
  });
}
