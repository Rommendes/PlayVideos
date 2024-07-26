import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");
    
async function criarVideo(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();   
 //A descrição é de acordo com a interação do usuário = visualizações
   

     await conectaApi.criaVideo(titulo, descricao, url, imagem)

     window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento))