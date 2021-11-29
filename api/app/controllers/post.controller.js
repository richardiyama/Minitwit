const db = require("../models");
const Post = db.posts;



exports.createPost = (req,res) => {

  // Validate request
  if (!req.body.title && !req.body.content && !req.body.userId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

// Create a Post
const post = {
  title: req.body.title,
  content: req.body.content,
  userId: req.body.userId,
};


    Post.create(post)
      .then((post) => {
        res.send(post);
      })
      .catch((err) => {
        res.status(500).send({
          
          message: err.message 
        });
      });
};

  exports.findPostById = (req,res) => {

    

    Post.findByPk(id)
      .then((post) => {
        if (post) {
          res.send(post);
        } else {
          res.status(404).send({
            message: `Cannot find Post with id=${id}.`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message 
        });
      });
  };

  exports.findAll = (req,res) => {
    Post.findAll({
      include: ["comments"],
    }).then((posts) => {
      res.send(posts);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
  };

 