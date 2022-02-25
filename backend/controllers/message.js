// -------- IMPORT DU MODELE -------- //
const models = require('../models');

// -------- CREATION D'UN POST -------- //
exports.createmessage = (req, res, next) => {
    const attachment = req.file ? `${req.protocol}://${req.get("host")}/image/${req.file.filename}`:'';

    // création du post
    console.log(attachment)
    models.Message.create({
            UserId: res.locals.userId,
            content: req.body.content,
            attachement: attachment,
            likes : 0,
        })
        .then((messsage) => res.status(201).json(messsage))
        .catch((error) => res.status(400).json({
            error
        }));
};

// -------- LISTE DE TOUS LES POSTS -------- //
exports.getAllPost = (req, res, next) => {
    const order = req.query.order;
    models.Message.findAll({
            order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
            include: [{
                model: models.User,
                attributes: ["username"],
            }, ],
        })
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({
            error
        }));
};

// -------- DELETE -------- //
exports.deletePost = (req, res, next) => {
    models.Message.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(() => res.status(200).json({
            message: "Post supprimé !"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};