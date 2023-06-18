
const paragrafo = document.querySelector('.cadastro-paragrafo');
const botao = document.querySelector("#btn")
const input = document.querySelector('input[type=text]');

const form = document.querySelector("form");



form.addEventListener("submit", (event)=>
{
    event.preventDefault();
})

botao.addEventListener("click", (evento)=>{
    escreverTexto(paragrafo, input.value)
})

function escreverTexto(elemento, texto){
    elemento.innerText = texto;
}


