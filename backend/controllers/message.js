// -------- IMPORT DU MODELE -------- //
const models = require('../models/index');

// -------- CREATION D'UN POST -------- //
exports.createmessage = (req, res, next) => {
    const attachment = `${req.protocol}://${req.get("host")}/image/${req.file.filename}`;

    // création du post
    models.Post.create({
            UserId: res.locals.userId,
            content: req.body.content,
            attachment: attachment,
        })
        .then(() => res.status(201).json({
            message: "Post créé"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};