// importattion de express
const express = require("express");

//importation du controller/user.js
const userController = require("../controllers/user");

// la fonction router
const router = express.Router();


// la route signup
router.post("/", userController.signup);
//la route login
router.post("/", userController.login);



// exportation du modules
module.exports = router;
