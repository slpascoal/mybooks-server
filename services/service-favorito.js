const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLFavoritos))
}

function deletaFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const livroRemovido = livros.filter( livro => livro.id !== id )

    fs.writeFileSync("favoritos.json", JSON.stringify(livroRemovido))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavorito
}