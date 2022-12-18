const express = require('express');
const { home, createNotes, updateUser, deleteUser, getUsers } = require('../Controllers/userControllers');
const router = express.Router();


router.get("/", home);

//create user
router.post("/createuser", createNotes);

//read users
router.get("/getusers", getUsers)

//update user 
router.post("/updateuser", updateUser);

//delete user
router.delete("/deleteuser", deleteUser);

module.exports = router