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

exports.deleteComment = (req, res, next) => {
    if (!res.locals.isAdmin) {
        models.Comments.destroy({
                where: {
                    id: req.params.id,
                    UserId: res.locals.userId
                }
            })
            .then(() => res.status(200).json({
                message: 'Commentaire supprimé !'
            }))
        //   .catch((error) => res.status(400).json({ error }));
    } else {
        models.Comments.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(200).json({
                message: 'Commentaire supprimé !'
            }))
            .catch((error) => res.status(400).json({
                error
            }));
    }
}

exports.getOneComment = (req, res, next) => {
    models.Comments.findOne({
            where: {
                id: req.params.id,
                MessageId : req.params.postId
            },
        })
        .then(comment => res.status(200).json(comment))
        .catch(error => res.status(400).json({
            error
        }));
}

exports.getAllComments = (req, res, next) => {
    let order = req.query.order;
    models.Comments.findAll({
            order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
            include: [{
                    model: models.User,
                    attributes: ["username"],
                },

            ],
            where: {
                MessageId: req.params.postId
            }
        }).then(result => {
            res.status(200).json(result);
        })
        .catch((error) => res.status(400).json({
            error
        }));
}