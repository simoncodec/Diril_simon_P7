// -------- IMPORT DU MODELE -------- //
const models = require('../models/index');

// -------- CREATION D'UN COMMENTAIRE -------- //
exports.createComment = (req, res, next) => {
    // création d'un commentaire
    console.log(req.params)
    models.Comments.create({
            UserId: res.locals.userId,
            MessageId: req.params.postId,
            content: req.body.content,
        })
        .then(() => res.status(201).json({
            message: "Commentaire posté"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};