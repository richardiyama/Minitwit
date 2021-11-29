# Minitwit

run:npm install to install required packages
Run: node server.js to start the server.

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

