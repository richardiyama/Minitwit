const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.posts = require("./post.model")(sequelize, Sequelize);
db.comments = require("./comment.model")(sequelize, Sequelize);
db.likes = require("./like.model")(sequelize, Sequelize);

db.user.hasMany(db.posts, { as: "posts" });
db.posts.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.hasMany(db.likes, { as: "likes" });
db.likes.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.posts.hasMany(db.likes, { as: "likes" });
db.likes.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "post",
});


db.posts.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "post",
});

module.exports = db;