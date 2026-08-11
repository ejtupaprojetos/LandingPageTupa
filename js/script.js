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

// scripits do pop up

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-contato');
    const modalSucesso = document.getElementById('modal-sucesso');
    const modalErro = document.getElementById('modal-erro');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            modalErro.showModal();
            return;
        }

        const btnEnviar = form.querySelector('.btn-enviar');
        btnEnviar.disabled = true;
        btnEnviar.textContent = "Enviando...";

        const formData = new FormData(form);
        const objectData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/maquiavelcampos@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(objectData)
            });

            if (response.ok) {
                modalSucesso.showModal();
                form.reset();
            } else {
                modalErro.showModal();
            }
        } catch (error) {
            modalErro.showModal();
        } finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = "Enviar Mensagem";
        }
    });
});