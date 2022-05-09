import { todosProdutos } from "./iniciarSessao.js"

window.onload = ()=>{
    let produto = document.querySelector('.produto')
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    let produtoDestaque = todosProdutos.filter(item => {
        return item.id === id
    })
    produto.childNodes[1].src = produtoDestaque[0].imagem

    let informacoesProduto = produto.childNodes[3];
    informacoesProduto.childNodes[1].textContent = produtoDestaque[0].nome;
    informacoesProduto.childNodes[2].textContent = produtoDestaque[0].preco;
    informacoesProduto.childNodes[3].textContent = produtoDestaque[0].descricao;

    let produtosSimilares = document.getElementById('produtosSimilares')
    let categoria = produtoDestaque[0].categoria;
    let adiciona = ""

    let similares = todosProdutos.filter(item =>{
         if(item.categoria === categoria && item.nome != produtoDestaque.nome){
             return item;
         }
    })
 
        similares.map((produto)=>{

            let imagem = produto.imagem;
            let preco = produto.preco;
            let nome = produto.nome;

            adiciona += `<div class="galeria__produtos" data-galeria-produtos id="${id}"><a href="verProduto.html?id=${id}">
            <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
            <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
            <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p></a>
            <a class="galeria__verProduto" href="verProduto.html?id=${id}" data-button="verProduto">Ver produto</a></div>`
            
    })
  
       produtosSimilares.innerHTML += adiciona;
    
   
}