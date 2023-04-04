const functions = require("firebase-functions");
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeVideogame = require("./routeVideogame")
const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.use("/allVideogames", routeVideogame)
app.get('/hello-world',(req,res) => {
    return res.status(200).json({message:'Hello perrou world'})
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


//module.exports = router;
exports.app = functions.https.onRequest(app)




// const functions = require("firebase-functions");
// const express = require('express')

// const app = express()

// app.get('/hello-world',(req,res) => {
//     return res.status(200).json({message:'Hello perrou world'})
// })

// exports.app = functions.https.onRequest(app)



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

