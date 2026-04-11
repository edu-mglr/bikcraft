const form = document.querySelector('form');

function formularioEnviado(resposta) {
    if(resposta.ok) {
        form.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1'; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
    } else {
        form.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1'; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para nosso email em: contato@bikcraft.net</p>";
    }
}

function enviarFormulario(event) {
   event.preventDefault();
   const botao = document.querySelector('form btn');
   botao.disabled = true;
   botao.innerText = 'Enviando...';

   const data = new FormData(form);

   fetch('./enviar.php', {
    method: 'POST',
    body: data,
   }).then(formularioEnviado);
}

form.addEventListener('submit', enviarFormulario);