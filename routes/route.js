const {Router} = require("express")
const { getLivros, getLivro, postLivro } = require("../controllers/controler-livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) =>{
    
})

router.delete('/', (req, res) =>{
    
})

module.exports = router