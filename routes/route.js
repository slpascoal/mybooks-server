const {Router} = require("express")
const { getLivros } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) =>{

})

router.patch('/', (req, res) =>{
    
})

router.delete('/', (req, res) =>{
    
})

module.exports = router