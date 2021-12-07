const Sequelize = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'rose', {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("connexion reussis a la base");
}).catch((err) => {
    console.log("erreur lors de la connection !");
});





// var express = require('express');
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rose',
//     database: 'mysql'
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connection Mysql etabli");
// });