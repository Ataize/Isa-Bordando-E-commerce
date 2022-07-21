const dropZone = document.querySelector(".dropzone");
let img = document.querySelector(".adicionar-imagem-drop");
const arquivo = document.querySelector(".adicionar-arquivos-file").value;
let file;

dropZone.addEventListener("dragover", (event)=>{
  event.preventDefault();
  dropZone.classList.add("active");
})

dropZone.addEventListener("dragleave", ()=>{
dropZone.classList.remove("active");
})

dropZone.addEventListener("drop",(evento)=> {
  evento.preventDefault();

  file = evento.dataTransfer.files[0];
  mostraArquivo();
})

function handleFiles(){
  var objectURL = window.URL.createObjectURL(fileObj);
  file = objectURL.value;
  mostraArquivo()

}
// arquivo.addEventListener("click", (evento)=>{
//   evento.preventDefault();
//   file = evento.dataTransfer.files[0];
//   mostraArquivo();
// })
function mostraArquivo(){
  let tipoArquivo = file.type;

  let validaArquivos = ["image/png", "image/jpg", "image/jpeg"];

  if(validaArquivos.includes(tipoArquivo)){
    let fileReader = new FileReader();
    fileReader.onload = ()=>{
      let fileURL = fileReader.result;
      let imgTag = `<img class="adicionar-imagem-drop" src="${fileURL}">`;
      let img = imgTag;
      dropZone.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("Arquivo inválido");
  }
}

