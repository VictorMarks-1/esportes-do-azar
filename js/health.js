document.addEventListener("DOMContentLoaded", () => {
  // Filtro de artigos
  const filterBtns = document.querySelectorAll(".filter-btn");
  const articleCards = document.querySelectorAll(".article-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove classe active de todos
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      articleCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Simulação de envio da newsletter
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Inscrição realizada com sucesso! Obrigado por apoiar a conscientização.");
      newsletterForm.reset();
    });
  }
});