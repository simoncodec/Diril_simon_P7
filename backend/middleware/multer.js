const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
};

// utilisation de multer pour l'enregistrement des images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'image');
    },
    filename: (req, file, callback) => {
        // création d'un nom pour l'image 
        console.log("1")
        const name = file.originalname.split(' ').join('_');
        console.log("2")
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({
    storage: storage
}).single('attachement');