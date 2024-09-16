const {Router} = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("Olá BH")
})

module.exports = router