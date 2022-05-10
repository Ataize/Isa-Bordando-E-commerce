import { todosProdutos } from "./iniciarSessao.js"

window.onload = () => {

    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    let produtoDestaque = todosProdutos.filter(item => {
        return item.id === id
    })
    adicionarProdutoDestaque(produtoDestaque);
}


function adicionarProdutoDestaque(produtoDestaque) {
    const produto = document.querySelector('.produto')

    produto.childNodes[1].src = produtoDestaque[0].imagem

    const informacoesProduto = produto.childNodes[3];
    informacoesProduto.childNodes[1].textContent = produtoDestaque[0].nome;
    informacoesProduto.childNodes[2].textContent = produtoDestaque[0].preco;
    informacoesProduto.childNodes[3].textContent = produtoDestaque[0].descricao;

    criaSimilares(produtoDestaque);
}
function criaSimilares(produtoDestaque) {
    const produtosSimilares = document.getElementById('produtosSimilares')
    const categoria = produtoDestaque[0].categoria;
    let adiciona = ""

    const similares = todosProdutos.filter(item => {
        if (item.categoria === categoria && item.id != produtoDestaque[0].id) {
            return item;
        }
    })

    similares.map((produto) => {
        const id = produto.id;
        const imagem = produto.imagem;
        const preco = produto.preco;
        const nome = produto.nome;

        adiciona += `<div class="galeria__produtos" data-galeria-produtos id="${id}"><a href="verProduto.html?id=${id}">
            <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
            <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
            <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p></a>
            <a class="galeria__verProduto" href="verProduto.html?id=${produto.id}" data-button="verProduto">Ver produto</a></div>`

    })

    produtosSimilares.innerHTML += adiciona;
}