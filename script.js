
const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores dos campos
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;

    // Remove uma mensagem anterior, se existir
    const mensagemErroExistente = document.getElementById('mensagem-erro');

    if (mensagemErroExistente) {
        mensagemErroExistente.remove();
    }

    const mensagemSucessoExistente = document.getElementById('mensagem-sucesso');

    if (mensagemSucessoExistente) {
        mensagemSucessoExistente.remove();
    }

    // Valida o tamanho da senha
    if (senha.length < 6) {
        const mensagemErro = document.createElement('p');

        mensagemErro.id = 'mensagem-erro';
        mensagemErro.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        mensagemErro.classList.add('erro');

        form.appendChild(mensagemErro);
        return;
    }

    // Valida se as senhas são iguais
    if (senha !== confirmaSenha) {
        const mensagemErro = document.createElement('p');

        mensagemErro.id = 'mensagem-erro';
        mensagemErro.textContent = 'As senhas não são iguais.';
        mensagemErro.classList.add('erro');

        form.appendChild(mensagemErro);
        return;
    }

    // Cadastro validado com sucesso
    const divMensagem = document.createElement('p');

    divMensagem.id = 'mensagem-sucesso';
    divMensagem.textContent = 'Cadastro realizado com sucesso! Entrando...';
    divMensagem.classList.add('msg-sucesso');

    form.appendChild(divMensagem);

    // Redireciona para o cardápio após 1 segundo
    setTimeout(() => {
        window.location.href = 'cardapio.html';
    }, 1000);
});
