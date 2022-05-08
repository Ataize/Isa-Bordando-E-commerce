import { todosProdutos } from "./iniciarSessao.js"

window.onload = () => {
    let personalizados = document.getElementById('personalizados');
    let diversos = document.getElementById('diversos');
    let prontaEntrega = document.getElementById('prontaEntrega')
    let html = ""
    let html2 = ""
    let html3 = ""

    todosProdutos.map((produto, indice) => {
        let imagem = produto.imagem;
        let preco = produto.preco;
        let nome = produto.nome;
        let id = produto.id;
        if(produto.categoria === "personalizados"){

            html += ` <div class="galeria__produtos" data-galeria-produtos id="${id}"><a href="verProduto.html?id=${id}">
            <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
            <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
            <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p></a>
            <a class="galeria__verProduto" href="verProduto.html?id=${id}" data-button="verProduto">Ver produto</a></div>
            `
          
        } else if(produto.categoria === "Pronta Entrega") {
            
            html2 += ` <div class="galeria__produtos" data-galeria-produtos id="${id}"><a href="verProduto.html?id=${id}">
            <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
            <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
            <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p></a>
            <a class="galeria__verProduto" href="verProduto.html?id=${id}" data-button="verProduto">Ver produto</a></div>
            `
          
            
        } else if(produto.categoria === "diversos") {
            html3 += ` <div class="galeria__produtos" data-galeria-produtos id="${id}"><a href="verProduto.html?id=${id}">
            <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
            <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
            <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p></a>
            <a class="galeria__verProduto" href="verProduto.html?id=${id}" data-button="verProduto">Ver produto</a></div>
            `
            
        }

    })

   personalizados.innerHTML += html;
   prontaEntrega.innerHTML += html2;
   diversos.innerHTML += html3;
   
}