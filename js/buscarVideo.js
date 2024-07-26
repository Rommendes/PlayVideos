import { conectaApi } from "./conectaApi.js";
import  { constroiCard } from "./mostrarVideos.js";

 async function buscaVideo(evento){
    evento.preventDefault();
    
    const busca = await conectaApi.buscarVideo();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    
    const lista = document.querySelector("[data-lista] ");
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemnto.imagem)));
     
}
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")
botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento))