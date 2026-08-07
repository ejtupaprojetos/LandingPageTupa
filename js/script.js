const btn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".header");

btn.addEventListener("click", () => { //quando clicar no botão o js adiciona/remove (alterna) a classe ativo
    menu.classList.toggle("ativo");
});

// Ativa a animação de entrada da seção "Quem somos" quando ela entra na tela
document.addEventListener('DOMContentLoaded', function () {
  var secaoQuemSomos = document.getElementById('quem-somos');
  if (!secaoQuemSomos) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        secaoQuemSomos.classList.add('is-visible');
        observer.disconnect();
      }
    });
  }, { threshold: 0.18 });

  observer.observe(secaoQuemSomos);
});