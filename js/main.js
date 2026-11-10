document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    
    if (currentLocation.endsWith(linkPath) || (currentLocation.endsWith("/") && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });
});