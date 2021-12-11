const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer')
const postCtrl = require('../controllers/message');

router.post('/', auth, multer, postCtrl.createmessage);


module.exports = router;