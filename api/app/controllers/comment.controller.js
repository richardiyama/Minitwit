const db = require("../models");
const Comment = db.comments;


exports.createComment = (req, res) => {

  // Validate request
  if (!req.body.name && !req.body.text && !req.body.postId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

 // Create a Comment
 const comment = {
  name: req.body.name,
  text: req.body.text,
  postId: req.body.postId,
};

    Comment.create(comment)
      .then((comment) => {
        res.send(comment);
      })
      .catch((err) => {
        res.status(500).send({
          
          message: err.message 
        });
      });
  };

  exports.findCommentById = (req,res) => {
    
  

    Comment.findByPk(id)
      .then((comment) => {
        if (comment) {
          res.send(comment);
        } else {
          res.status(404).send({
            message: `Cannot find Comment with id=${id}.`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message 
        });
      });
  };

