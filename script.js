// Toggle ver más / ver menos
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.parentElement;
    product.classList.toggle("expanded");
    btn.textContent = product.classList.contains("expanded") ? "Ver menos" : "Ver más";
  });
});

console.log("Página lista para negocios locales con productos y Google Maps");
