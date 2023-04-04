
const router = require("express").Router()
const { getDetail, joinAllDates, postVideogame, deleteVideogame, getAllGenres } = require("../controllers/controllers")



router.get("/", joinAllDates)
router.get("/Detail/:id", getDetail)
router.post("/create", postVideogame)
router.delete("/delete/:id", deleteVideogame)
router.get("/genres", getAllGenres)




module.exports = router