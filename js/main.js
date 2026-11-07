document.addEventListener("DOMContentLoaded", () => {
  // 1. Destacar automaticamente o link ativo no menu de navegação
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    // Pega o nome do arquivo atual (ex: index.html, pagina2.html)
    const linkPath = link.getAttribute("href");
    
    // Se a URL atual terminar com o link do menu (ou estiver na raiz para o index), adiciona a classe 'active'
    if (currentLocation.endsWith(linkPath) || (currentLocation.endsWith("/") && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });

  // 2. Lógica básica para um Carrossel simples (Opcional)
  // Caso queira transformar o bloco cinza da home em um carrossel funcional no futuro:
  const carouselContainer = document.querySelector(".carousel-container");
  
  if (carouselContainer) {
    // Exemplo de comportamento interativo simulado
    console.log("Carrossel inicializado com sucesso na página Home.");
  }
});