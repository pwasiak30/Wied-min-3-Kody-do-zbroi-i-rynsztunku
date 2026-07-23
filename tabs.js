/* ==========================================================================
   Przełączanie zakładek: Kody / Tutorial
   ========================================================================== */

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === "tab-" + target);
    });

    // Przy pierwszym wejściu w zakładkę tutorialu upewnij się, że lista jest wyrenderowana.
    if (target === "tutorial" && window.renderTutorial) {
      window.renderTutorial();
    }

    history.replaceState(null, "", "#" + target);
  });
});

// Otwórz zakładkę wskazaną w hashu URL przy starcie (np. #tutorial).
(function initTabFromHash() {
  const hash = (location.hash || "").replace("#", "");
  if (hash === "tutorial" || hash === "codes") {
    const btn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
    if (btn) btn.click();
  }
})();
