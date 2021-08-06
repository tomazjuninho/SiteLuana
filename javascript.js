const botao = document.querySelector('botao');

function ativarMenu() {
    const nav = document.querySelector('botao');
    nav.classList.toggle('active');
}

botao.addEventListener('click', ativarMenu);