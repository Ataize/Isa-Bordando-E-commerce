import { todosProdutos } from "./iniciarSessao.js";

window.onload = function() {
  
    var personalizados =  todosProdutos;
    var tela = document.querySelector('[data-todos]')

     
    var galeria  = ''

    personalizados.map((produto, indice)=>{
        let imagem = produto.imagem;
        let preco = produto.preco;
        let nome = produto.nome;
        let descricao = produto.descricao

       

        galeria += ` <div class="galeria__produtos" data-galeria-produtos>
        <div class="alterarProduto">
        <button class="galeria__excluir"></button>
        <button class="galeria__editar"></button></div>        
        <img class="galeria__imagem" src="${imagem}" alt="Imagem do produto" data-produto-personalizado="imagem">
        <p class="galeria__descricaoProduto"data-produto-personalizado="nome">${nome}</p>
        <p class="galeria__preco"data-galeria-personalizado="preco">${preco}</p>
        </div>`

    })   
   
    
    tela.innerHTML= galeria;
   
    var editar = document.querySelectorAll('.galeria__editar');
    var excluir = document.querySelector('.galeria__excluir');

    editar.addEventListener('click', ()=>{
       
      console.log(evento.target);
    })
    
}
