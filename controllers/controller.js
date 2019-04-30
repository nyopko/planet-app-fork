const db = require("../models");

module.exports = {
    addUser: function(req, res){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        db.User.findAll({       //check to see if the user already exists
            where: {
                email: newUser.email
            }
        }).then(data => {
            if(!data[0]){
                db.User.create(newUser)     //if the user does not exist, add it to the database
                    .then(data => {
                        console.log(data);
                        res.json(data);
                    })
            }
            else{
                console.log("User Already Exists")      //otherwise, send a "user exists" response
                res.json({status: 'User Already Exists'})
            }
        })
        
    },
    findUser: function(req, res){
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            console.log(data);
            res.json(data);
            //return data;
        })
    },
    findUrls: function(req, res){
        db.Favorites.findAll({
            attributes: ['url'],
            where: {
                UserId: req.params.user
            }
        }).then(data => {
            console.log(data);
            res.json(data);
            return data;
        })
    },
    addFavUrl: function(req, res){
        let newFav = {
            UserId: req.body.userId,
            url: req.body.favUrl,
            media_type: req.body.media_type
        };

        db.Favorites.findAll({
            attributes: ['url'],
            where: {
                UserId: newFav.UserId,
                url: newFav.url
            }
        }).then(data => {
            if(!data[0]){
                db.Favorites.create(newFav).then(data => {
                    console.log(data);
                    res.json(data);
                })
            }
            else {
                res.json({status: "Video URL already exists"})
            }
        })
    },
    remove: function(req, res){
        db.Favorites.destroy({
            where: {
                userId: req.params.user,
                url: req.body.favUrl
            }
        }).then(data => {
            console.log(data);
        })
    }
};