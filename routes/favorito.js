const {Router} = require("express")
const { getFavoritos, deleteFavorito, postFavorito } = require("../controllers/controler-favorito")

const router = Router()

// Favoritos
router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router