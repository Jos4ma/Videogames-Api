const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeVideogame = require("./routeVideogame")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/allVideogames", routeVideogame)


module.exports = router;
