const {getTodosFavoritos, insereFavorito, deletaFavorito} = require("../services/service-favorito")

function getFavoritos(req, res){
    try{ 
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            insereFavorito(id)
            res.status(201)
            res.send("Favorito inserido com sucesso!")  
        }else{
            res.status(442)
            res.send("ID Inválido")
        } 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavorito(id)
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
    getFavoritos,
    postFavorito,
    deleteFavorito
}