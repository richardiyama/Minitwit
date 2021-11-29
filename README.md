# Minitwit

### Registration


<img src="https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitReg.png" height="400" />

### Login

<img src="https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitlogin.png" height="400" />


### Post

<img src="https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitpost.png" height="400" />

### Post List

<img src=https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitList.png height="400" />

### Post

<img src="https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitpost.png" height="400" />



### Comment on Post

<img src="https://github.com/richardiyama/Minitwit/blob/master/twit-client-app/public/twitcomment.png" height="400" />



### Frontend deployed to netlify
https://61a4a09034467b009a7e7d2c--twitapp.netlify.app/

### Backend deployed to heroku
https://stormy-mesa-92667.herokuapp.com/

### Install Packages



- Run: npm install or yarn install or yarn add to install packages defined in the package.json file

- cd to Backend Folder
- Run: node server.js or npm run dev to start the server.

- cd to Frontend Folder
- Run: npm start to start React app

# Database used
Prostgresql

# ORM used
Sequelize

# End points
# Register new user
Post: localhost:8080/api/auth/signup

{
	"email": "iyamarichard@gmail.com",
	"password": "JAVA4real2021"
}

# Signin
Post: localhost:8080/api/auth/signin

{
	"email": "iyamarichard@gmail.com",
	"password": "JAVA4real2021"
}

# Get all User
Post: localhost:8080/api/user/getAllUser

# Get a User
Get: localhost:8080//api/user/getuser

# Create Post
Post: localhost:8080/api/twits/post

{
	"title": "gift",
	"content": "Great Post",
	"userId": "1"
}

# Get Post By ID
Get: localhost:8080/api/twit/getPostById

# Comment on post
Post: localhost:8080/api/twit/comment

{
"name": "iyamarichard",
 "text":"I will extend this post",
 "postId":"1"
 
}

# Like a post
Post: localhost:8080/api/twit/like
{
"postId": 1,
 "userId":1
}

# Client Side
- Run: npm start to start React app


### The Frontend(Client Side) was built with
- [React](https://reactjs.org/) - React Framework

# The Server Side(Backend) was built with
- [Postgres](https://www.postgresql.org/) - A relational Sql Database
- [Nodejs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Sequelize ORM](https://sequelize.org/) - a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
