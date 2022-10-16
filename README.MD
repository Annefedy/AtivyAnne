
<div align="center">
<img src="https://user-images.githubusercontent.com/103973102/196051172-70bd605d-e533-4bb5-9559-adbce7a23a5a.jpg" width="800px" height="300px"/>
</div>

<h1 align="center"> Rest JWT Authentication API with CRUD system built on Node.js, Express and MongoDB Compass.</h1>
Rest Node.js and Express api with user authentication using JWT (Json Web Token), Nodemailer for password recovery, MongoD Compass for cloud data storage services and a CRUD system for registering, reading, updating and deleting projects and your tasks.


<h1 align="center"> Initial Settings </h1>
configure the **mail.json** file structure with your email provider's **SMTP** credentials. The file is located in the **config** folder. In the project, the [Mailtrap] tool was used to test the sending of email.

```
{
  "host": "smtp.domain.io",
  "port": 2525,
  "secure": false,
  "user": "username@domain.com",
  "pass": "password"
}
```

will need to install "mongodb compass" create a new collection.
set the environment variables in the **.env** file at the project root. Paste the connection string into the value to be received in the **mongodb_url** variable. Replace with the database user **<password>**. Change the test database name to one of your own. In the **jwt_key** variable, create a secret key to create the **authentication token**. Example of secret key ```hgfj5hi6jhy546fvgfrtjghuv6```. The port variable will hold the **port** number the application will be running on.

```
module.exports = {
  mongodb_url: 'mongodb://localhost:27017/',
  jwt_key: '<secret_key>',
  port: 8080
}
```

<h1 align="center"> installation </h1>

Install the module to restart the server whenever there is a change in the code
"g" means globally

Install **nodemon** globally on your machine
```
npm install -g nodemon
```

install **nodemon** in your project
```
 npm install --save-dev nodemon
```
Clone the repository

```
git clone https://github.com/Annefedy/AtivyAnne.git
```
HOW TO RUN THE PROJECT
Install all dependencies indicated by package.json run the following command:
```
npm install 
```

Run the project
```
npm run dev 
```
<h1 align="center"> Testing API </h1>
I used [Insomnia](https://insomnia.rest/) to test the API, but you can use any of your own.
```
{
	"name": "Ana",
	"email": "Ana@gmail.com",
	"password": "123456",
  "birthDate": "15/07/97",
  "address": "Av Brasil"
}
```

#### Authenticating user

To authenticate the user, create and use the ```http://localhost:8080/auth``` route with the **POST** method, specifying **email** and **password**.

```
{
"email": "Ana@gmail.com",
"password": "123456"
}
```

#### Access token

After authenticating the user, a token is generated. Copy the token and paste it into the **Header** of the requests that need user authentication. Create ```http://localhost:8080/user``` route with **GET** method. Add a new **Header** to the ```Authorization``` request and a ```Bearer user_access_token``` value.

#### I forgot the password

To change the password, an email is sent to the user with **token** to be added to the **reset_password** request. Create and use the ```http://localhost:8080/auth/forgot_password``` route with the **POST** method to send the token to the user's email. Copy the token.

```
{
"email": "Ana@gmail.com"
}
```

Create and use the ```http://localhost:8080/auth/reset_password``` route with the **POST** method to change the user's password. Paste the token into the request body.

```
{
"email": "carine@gmail.com",
"token": "encryption password",
"password": "789654"
}
```

## Accessing Protected Routes

To access protected routes it is necessary to copy the user's authentication token and paste it in the **Header** of each request. New ```Authorization``` header and new ```Bearer user_access_token``` value.

#### Creating project

Create and use the ```http://localhost:8080/projects``` route with the **POST** method, to create the projects and their tasks.
```
{
"title": "Project 1",
"description": "Project Description",
"tasks": [
{
"title": "Task 1"
},
{
"title": "Task 2"
}
]
}
```

#### Listing projects

Create and use the ```http://localhost:8080/projects``` route with the **GET** method, to list the projects.

#### Updating project

Create and use ```http://localhost:8080/projects/projectId``` route with **PUT** method. You will need to copy the id of a project and replace it in **projectId**.

```
{
"title": "Updated Project",
"description": "Updated project description",
"tasks": [
{
"title": "Updated Task"
}
]
}
```

#### Deleting project

Create and use ```http://localhost:8080/projects/projectId``` route with **DELETE** method. You will need to copy the id of a project and replace it in **projectId**.

#### Listing a single project

Create and use ```http://localhost:8080/projects/projectId``` route with **GET** method. You will need to copy the id of a project and replace it in **projectId**.
