const { getTodosLivros, getTodosLivrosPorID, insereLivro } = require("../services/service-livros")

function getLivros(req, res){
    try{ 
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){
    try{ 
        const id = req.params.id
        const livros = getTodosLivrosPorID(id)
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro criado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro
}