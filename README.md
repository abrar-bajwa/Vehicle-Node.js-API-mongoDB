# Vehicle-Node.js-API-mongoDB
Vehicle Node.js Application with mongoDB Database<br>

# Description
The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.


# Getting Started
To get started with this project, follow these steps:

1) Clone or download the repository in your local machine.<br>
```cmd
  git clone https://github.com/abrar-bajwa/Vehicle-Node.js-API-mongoDB
```
2) Open the solution folder in Visual Studio
3) Run this command in terminal to install required packages.
```cmd
  npm i
``` 
4) Make .env file in Solution Folder and write this code.
```cmd
  URI=mongodb://localhost:27017/vehicleDB
  PORT=3000
``` 
6) Run this command in vs code terminal.<br>
```cmd
  npm start
```
 API Reference
GET all Vehicles
```cmd
    GET /
```

 POST all vehicles
```cmd
    GET /newform
    POST /save
```
 Update all vehicles
```cmd
    GET /edit/:id
    POST /update/:id
```
 Delete all vehicles
```cmd
    GET /delete/:id
```
