
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});



const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  if (!backTop) return;
  backTop.style.display = window.scrollY > 300 ? "block" : "none";
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



document.querySelectorAll(".view-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.getAttribute("data-title") || "";
    const desc = btn.getAttribute("data-desc") || "";
    const img = btn.getAttribute("data-img") || "";

    const modalTitle = document.getElementById("productModalLabel");
    const modalImg = document.getElementById("productModalImg");
    const modalDesc = document.getElementById("productModalDesc");

    if (modalTitle) modalTitle.textContent = title;
    if (modalImg) modalImg.src = img;

 
    if (modalDesc) {
      modalDesc.textContent = desc;
    }

    const modalElLocal = document.getElementById("productModal");
    if (modalElLocal) {
      const modal = new bootstrap.Modal(modalElLocal);
      modal.show();
    }
  });
});
