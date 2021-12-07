const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncLib = require('async');
const { Model } = require("sequelize/dist");
const models = require('../models');

// import de constante pour vérification de l'email
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



// -------- SIGNUP -------- //
exports.signup = async (req, res, next) => {
    // Paramètres généraux
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const departement = req.body.departement;

    console.log(req.body);
    // vérification des paramètres obligatoires complets
    if (req.body.username == null || req.body.email == null || req.body.password == null || req.body.departement == null) {
        return res.status(400).json({
            error: 'Tous les champs sont obligatoires !'
        });
    }

    // vériication de la taille de l'username OK
    if (username.length >= 35 || username.length <= 2) {
        return res.status(400).json({
            error: 'Votre pseudo doit être compris entre 2 et 35 caractères'
        });
    }

    //vérification du format de l'adresse email
    if (!regexEmail.test(email)) {
        return res.status(400).json({
            error: 'E-mail renseigné incorrect'
        });
    }

    // vérification que l'user n'est pas déjà existant
    // utilisation de waterfall pour utilisation des fonctions en cascade
    asyncLib.waterfall([
        // vérification de l'existence de l'user
        // done car aucun argument - fonction de callback
        function (done) {
            models.User.findOne({
                    attributes: ['email'],
                    where: {
                        email: email
                    }
                })
                //userFound est le paramètre nécessaire à la fonction suivant 
                .then(function (userFound) {
                    done(null, userFound);
                })
                .catch(function (err) {
                    return res.status(500).json({
                        error: 'utilisateur non trouvé'
                    });
                });
        },
        // on passe à la fonction suivante
        function (userFound, done) {
            // vérifie le paramètre userFound
            if (!userFound) {
                // on hash le mdp et le stock dans la variable bcrypt...
                bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                    // null pour continuer la waterfall, userFound nécessaire pour la suite + mot de passe hashé 
                    done(null, userFound, bcryptedPassword);
                });
            } else {
                return res.status(409).json({
                    error: 'utilisateur déjà existant'
                });
            }
        },

        // création du nouvel utilisateur dans la database
        // récupération des variables en paramètres
        function (userFound, bcryptedPassword, done) {
            // on utilise le modele User pour création
            let newUser = models.User.create({
                    email: email,
                    username: username,
                    departement: departement,
                    password: bcryptedPassword,
                    isAdmin: 0
                })
                // on ne renvoie alors que le paramètre newUser car seul paramètre nécessaire
                .then(function (newUser) {
                    // pas de paramètre null car waterfall terminée
                    done(newUser);
                })
                .catch(function (err) {
                    return res.status(500).json({
                        error: 'impossible de créer le user'
                    });
                });
        }
    ],


        // dernière fonction indiquant la création du nouvel utilisateur
        function (newUser) {
            if (newUser) {
                return res.status(201).json({
                    'userId': newUser.id
                });
            } else {
                return res.status(500).json({
                    error: 'impossible de créer le user'
                });
            }
        })
};
