const express= require("express");
const addUsers = require("../controllers/userController");
const router= express.Router();

router.post("/add", addUsers);

module.exports= router;