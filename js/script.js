const btn = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".header");

btn.addEventListener("click", () => { //quando clicar no botão o js adiciona/remove (alterna) a classe ativo
    menu.classList.toggle("ativo");
});