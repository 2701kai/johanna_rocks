// stopTheMadness.js - just reload page
// ------------------------------------------------------------

let reloadCooldown = false;

export function activateEscapeKey() {
  document.addEventListener("keydown", (e) => {
    if (reloadCooldown) return;

    const key = e.key.toLowerCase();

    // Reload on Escape
    if (e.key === "Escape") {
      triggerReload();
    }

    // Reload on Ctrl+C or Cmd+C
    if ((e.ctrlKey || e.metaKey) && key === "c") {
      triggerReload();
    }
  });
}

function triggerReload() {
  reloadCooldown = true;
  window.location.reload(); // boom. reboot reality.

  // timeout added to prevent  50 billion reloads..
  setTimeout(() => {
    reloadCooldown = false;
  }, 1000);
}
