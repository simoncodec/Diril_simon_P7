//importattion de express
const express = require('express');

// pour crée une application express
const app = express();

// importation de morgan (logger http)
const morgan = require("morgan");


app.use(morgan("dev"));

//connection a la base de donné
const db = require('./db/database')


// app.use() route générale et la fonction middleware
app.use((req, res, next) => {
    console.log("premier requete");
    next();
});

app.use((req, res, next) => {
    res.json({ message : "ca fonctionne"})
    next();
});

app.use((req, res) => {
res.status(201);
})



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// exportation de app.js pour pouvoir y acceder depuis un autre fichier
module.exports = app;