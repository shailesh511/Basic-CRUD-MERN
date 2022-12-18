require('dotenv').config()
require('./Database/Database').connect()
const express = require("express");
const { getUsers } = require('./Controllers/userControllers');
const app = express();

const userRoutes = require('./Routes/userRoutes')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

////home 
app.use("/", userRoutes);

////create user
app.use("/createuser", userRoutes);

////read users
app.use("/getusers", userRoutes);

////update user 
app.use("/updateuser", userRoutes);

////update user 
app.use("/deleteuser", userRoutes);
module.exports = app;
