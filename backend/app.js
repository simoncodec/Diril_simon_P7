//importattion de express
const express = require("express");

// importation de morgan (logger http)
const morgan = require("morgan");

// utilisation de path pour accéder au chemins des fichiers
const path = require("path");

//connection a la base de donné
const db = require('./db/database')

//importation de body-parser
const bodyparser = require("body-parser");

// importation des routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/messages");



// pour crée une application express
const app = express();

// permet de verifier les requetes et le temps necessaire sur le terminal (option)
app.use(morgan("dev"));

//transformer le corps en json objets javascript utilisable
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


// app.use() route générale et la fonction middleware
app.use((req, res, next) => {
    console.log("premier requete");
    next();
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/images', express.static(path.join(__dirname, 'images')));

//La route d'authentification
app.use('/api/auth', userRoutes);
app.use('/api/messages', postRoutes);


// exportation de app.js pour pouvoir y acceder depuis un autre fichier
module.exports = app;