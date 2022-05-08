import { todosProdutos } from "./iniciarSessao.js"

window.onload = ()=>{
    let produto = document.querySelector('.produto')
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    let produtoDestaque = todosProdutos.filter(item => {
        return item.id === id
    })
    produto.childNodes[1].src = produtoDestaque[0].imagem
   
}