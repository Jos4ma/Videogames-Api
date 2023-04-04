const API_KEY = "34bb47fcfd214eb19d606230197330f2"
const router = require("express").Router()
const axios = require('axios')

//const { getDetail, joinAllDates, postVideogame, deleteVideogame, getAllGenres } = require("controllers.js")



router.get("/", async(req, res) =>  {
	try {
		let endpoints = [
			    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${1}`),
			    //  axios.get(`https://api.rawg.io/api/games?key=246561ca3d1b44d1877ac14e4ffc9ef5&page=2`),
			    //  axios.get(`https://api.rawg.io/api/games?key=246561ca3d1b44d1877ac14e4ffc9ef5&page=3`),
			    //  axios.get(`https://api.rawg.io/api/games?key=246561ca3d1b44d1877ac14e4ffc9ef5&page=4`),
			    //  axios.get(`https://api.rawg.io/api/games?key=246561ca3d1b44d1877ac14e4ffc9ef5&page=5`),
		];
		const api = await Promise.all(endpoints);
		let arrOfIds = [];
        
		for (let i = 0; i < api.length; i++) {
			arr = await api[i].data.results.map((v) => {
        // console.log("holaV",v)
			return {
                id: v.id.toString().trim(),
                name: v.name.charAt(0).toUpperCase()+v.name.slice(1), 
                released: v.released,
                description: v.description,
                rating: v.rating,
                image: v.background_image,
                // rating: v.rating.toFixed(2),
                genders: v.genres.map(g => g.name).join(', ').trim(),
                // genres: v.genres.map((e) => {
                //     return { name: e.name };
                //   }).join().split(",").sort(),
                // //genres: v.genres.join().split(",").sort(),
                platforms: v.platforms.map((e) => e.platform.name).join(', ').trim(),
            }
            });

			arrOfIds= [...arrOfIds,...arr];
		}
            //return arrOfIds
            return res.status(200).json({message:'Hello perrou world',arrOfIds})
	} catch (error) {
	    	console.log(error);
	}
})
// router.get("/Detail/:id", getDetail)
// router.post("/create", postVideogame)
// router.delete("/delete/:id", deleteVideogame)
// router.get("/genres", getAllGenres)




module.exports = router