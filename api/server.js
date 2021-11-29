const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:9081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Postcontroller = require("./app/controllers/post.controller");
const Commentcontroller = require("./app/controllers/comment.controller");

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mini twitter application." });
});

//routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/comment.routes')(app);
require('./app/routes/like.routes')(app);
require('./app/routes/post.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});