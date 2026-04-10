// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    
    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// ---
// Ativar Items do Orçamento
// ---
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    };
    console.log(parametro);
};

parametros.forEach(ativarProduto);

// ---
// Perguntas e Respostas
// ---
const perguntas = document.querySelectorAll('.qa button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.querySelector('#' + controls);

    resposta.classList.toggle("active");
    const ativa = resposta.classList.contains("active");
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// ---
// Galeria
// ---
const galeria = document.querySelectorAll('.bike-imgs img');
const galeriaContainer = document.querySelector('.bike-imgs');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 800px)').matches;
    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// ---
// Animação
// ---
if (window.SimpleAnime) {
    new SimpleAnime();
}
