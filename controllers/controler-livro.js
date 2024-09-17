const { getTodosLivros, getTodosLivrosPorID, insereLivro, modificaLivro, deletaLivro } = require("../services/service-livros")

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
        if (id && Number(id)) {
            const livros = getTodosLivrosPorID(id)
            res.send(livros)  
        }else{
            res.status(442)
            res.send("ID Inválido")
        }  
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (livroNovo.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro criado com sucesso!")  
        }else{
            res.status(442)
            res.send("O campo 'nome' é obrigatório")
        } 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Livro modificado com sucesso!")  
        }else{
            res.status(442)
            res.send("ID Inválido")
        } 

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivro(id)
            res.send("Livro deletado com sucesso!")  
        }else{
            res.status(442)
            res.send("ID Inválido")
        } 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}