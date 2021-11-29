const db = require("../models");
const User = db.user;


exports.userDashboard = (req, res) => {
    res.status(200).send("User Content.");
  };

  exports.findAll = (req,res) => {
    User.findAll({
      include: ["posts"],
    }).then((user) => {
      res.send(user);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
  };

  