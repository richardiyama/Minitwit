# Minitwit

run:npm install to install required packages
Run: node server.js to start the server.

# Database used
Progresql

# ORM used
Sequelize

# End points
# Register new user
Post: localhost:8080/api/auth/signup
# Signin
Post: localhost:8080/api/auth/signin

# Get all User
Post: localhost:8080/api/user/getAllUser

#Get a User
Get: localhost:8080//api/user/getuser

# Create Post
Post: localhost:8080/api/twits/post

# Get Post By ID
Get: localhost:8080/api/twit/getPostById

# Comment on post
Post: localhost:8080/api/twit/comments
