
const controller = require("../controllers/like.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/twit/like",
    
    controller.createLike
  );

  app.get("/api/twit/getLikeById", controller.findLikeById);
};