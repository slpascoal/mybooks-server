const express = require("express")
const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send("Olá BH")
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})