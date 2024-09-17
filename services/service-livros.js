const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getTodosLivrosPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    return livros.filter( livro => livro.id === id )[0]

}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const livroModificados = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = livroModificados

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroRemovido = livros.filter( livro => livro.id !== id )

    fs.writeFileSync("livros.json", JSON.stringify(livroRemovido))
}

module.exports = {
    getTodosLivros,
    getTodosLivrosPorID,
    insereLivro,
    modificaLivro,
    deletaLivro
}