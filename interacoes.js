// Seleciona os elementos do HTML
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const contadorHtml = document.getElementById('contador-itens');
const listaCarrinho = document.getElementById('lista-carrinho');
const valorTotalHtml = document.getElementById('valor-total');

// Elementos da sidebar
const btnAbrirCarrinho = document.getElementById('abrir-carrinho');
const btnFecharCarrinho = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('sidebar-carrinho');

// Variáveis do carrinho
let totalNoCarrinho = 0;
let valorTotal = 0;

// Formata um valor para moeda brasileira
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Atualiza o total exibido no HTML
valorTotalHtml.textContent = formatarMoeda(valorTotal);

// Adiciona o evento de clique a cada botão
botoesAdicionar.forEach((botao) => {

    botao.addEventListener('click', () => {

        // Localiza o cartão do produto
        const card = botao.closest('.card-produto');

        // Obtém o nome e o preço do produto
        const nomeProduto = card.querySelector('h3').textContent;
        const textoPreco = card.querySelector('.preco-destaque').textContent;

        // Converte o preço em número
        const precoProduto = Number(
            textoPreco.replace('R$', '').trim().replace(/\./g, '').replace(',', '.')
        );

        // Cria um novo item na lista do carrinho
        const novoItem = document.createElement('li');

        // Exibe o nome e o preço do produto
        novoItem.textContent = `${nomeProduto} - ${formatarMoeda(precoProduto)}`;

        // Adiciona o item à lista
        listaCarrinho.appendChild(novoItem);

        // Atualiza a quantidade de itens
        totalNoCarrinho++;
        contadorHtml.textContent = totalNoCarrinho;

        // Soma o preço ao valor total
        valorTotal += precoProduto;
        valorTotalHtml.textContent = formatarMoeda(valorTotal);

    });

});

// Abre o carrinho
btnAbrirCarrinho.addEventListener('click', () => {
    sidebar.classList.remove('carrinho-oculto');
    sidebar.classList.add('carrinho-aberto');
});

// Fecha o carrinho
btnFecharCarrinho.addEventListener('click', () => {
    sidebar.classList.remove('carrinho-aberto');
    sidebar.classList.add('carrinho-oculto');
});

