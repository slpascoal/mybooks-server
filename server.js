const express = require("express")
const rotaLivro = require("./routes/route")

const app = express()
app.use(express.json())

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})