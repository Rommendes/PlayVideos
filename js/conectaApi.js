async function listaVideos(){
    const conexao = await fetch("http://localhost:300/videos");
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida  
}
//inserir mais  videos no json criar essa requisição:
async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        })
    })
    //lembrando que o erro pode se no link da conecção
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo!")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}
//CAMPO DE PESQUISA
async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo

}