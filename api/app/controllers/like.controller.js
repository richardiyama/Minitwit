const db = require("../models");
const Like = db.likes;



exports.createLike = (req,res) => {

  
// Create a Likes
const like = {
  
  postId: req.body.postId,
  userId: req.body.userId,
};


    Like.create(like)
      .then((like) => {
        res.send(like);
      })
      .catch((err) => {
        res.status(500).send({
          
          message: err.message 
        });
      });
};

  exports.findLikeById = (req,res) => {

    const Id = req.params.id;
    

    Like.findByPk(Id, { include: ["post","user"] })
      .then((like) => {
        if (like) {
          res.send(like);
        } else {
          res.status(404).send({
            message: `Cannot find Like with id=${Id}.`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message 
        });
      });
  };

  exports.findAll = (res) => {
    Like.findAll({
      include: ["post","user"],
    }).then((posts) => {
      res.send(posts);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
  };

 