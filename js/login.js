
document.querySelector('#form-submit').addEventListener('click', e =>{
    e.preventDefault();

    let email = document.querySelector('#form-email').value;
    let passsword = document.querySelector('#form-password').value;
    validacao(email, passsword);
})
function validacao(email, passsword){
    if(!email){
        alert("O campo e-mail deve ser preenchido!")
    } else if(!passsword){
        alert("O campo senha não foi preenchido!")
    } else if ( email === "isa.aragao@hotmail.com" && passsword === "12345"){
        alert("Acesso liberado")
    } else{
        alert("Acesso negado!")
    }
}