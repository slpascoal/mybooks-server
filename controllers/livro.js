function getLivros(req, res){
    try{ 
        res.send("Olá BH")
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}