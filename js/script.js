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

// Ativa a animação de entrada da seção "Serviços" quando ela entra na tela

const servicos = document.querySelector('.servicos');

const observerServicos = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerServicos.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

if (servicos) {
    observerServicos.observe(servicos);
}