// importattion de express
const express = require("express");

//importation du controller/user.js
const userController = require("../controllers/user");
//importattion des du midlleware auth
const auth = require('../middleware/auth');

// la fonction router
const router = express.Router();


// la route signup
router.post('/signup', userController.signup);
//la route login
router.post('/login', userController.login);


router.get('/', userController.getAllUser);
router.get('/:id', userController.getOneUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);


// exportation du modules
module.exports = router;
