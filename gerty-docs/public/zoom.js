// Click (or Enter/Space) on a document image to see it full size; Esc, click or the button closes it.
(() => {
  const SELECTOR = ".sl-markdown-content .doc-media img";
  let dialog;
  const ensureDialog = () => {
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.className = "zoom-dialog";
    dialog.innerHTML = '<button type="button" class="zoom-close" aria-label="Close">×</button><img alt="">';
    dialog.addEventListener("click", () => dialog.close());
    document.body.append(dialog);
    return dialog;
  };
  const open = (img) => {
    const d = ensureDialog();
    const big = d.querySelector("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    d.showModal();
  };
  const ready = () => {
    for (const img of document.querySelectorAll(SELECTOR)) {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      if (!img.getAttribute("aria-label")) img.setAttribute("aria-label", document.documentElement.lang === "ko" ? "이미지 크게 보기" : "View image full size");
    }
  };
  document.addEventListener("click", (e) => {
    const img = e.target.closest?.(SELECTOR);
    if (img) open(img);
  });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches?.(SELECTOR)) {
      e.preventDefault();
      open(e.target);
    }
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
})();
