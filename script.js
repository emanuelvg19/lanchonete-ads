const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
// Impede o recarregamento da página
event.preventDefault();

// Capturando os valores dos campos
const senha = document.getElementById('senha').value;
const confirmaSenha = document.getElementById('confirma-senha').value;

// Procura uma mensagem de erro que já exista
const mensagemErroExistente = document.getElementById('mensagem-erro');

// Se já existir uma mensagem, remove antes de fazer uma nova validação
if (mensagemErroExistente) {
    mensagemErroExistente.remove();
}

// Requisito 2: verifica se a senha possui no mínimo 6 caracteres
if (senha.length < 6) {
    const mensagemErro = document.createElement('p');

    mensagemErro.id = 'mensagem-erro';
    mensagemErro.textContent = 'A senha deve ter no mínimo 6 caracteres.';
    mensagemErro.classList.add('erro');

    form.appendChild(mensagemErro);

    return;
}

// Requisito 3: verifica se as senhas são exatamente iguais
if (senha !== confirmaSenha) {
    const mensagemErro = document.createElement('p');

    mensagemErro.id = 'mensagem-erro';
    mensagemErro.textContent = 'As senhas não são iguais.';
    mensagemErro.classList.add('erro');

    form.appendChild(mensagemErro);

    return;

}

/* Se chegou aqui, as duas validações foram aprovadas - ativar depois se der erro.
console.log("Cadastro realizado com sucesso!");

const nomeDigitado = document.getElementById('nome').value;
console.log("Cliente:", nomeDigitado);

// Redireciona o usuário para o cardápio
window.location.href = "cardapio.html"; até aqui */ 

// Cenário de Sucesso
    divMensagem.textContent = 'Cadastro realizado com sucesso! Entrando...';
    divMensagem.className = 'msg-sucesso';
    
    // NOVO CÓDIGO: Redireciona o usuário para o cardápio após 1 segundo (1000 milissegundos)
    setTimeout(() => {
        window.location.href = "cardapio.html";
    }, 1000);

});