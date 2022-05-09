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

}