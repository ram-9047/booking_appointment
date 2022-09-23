const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getUser);

router.post("/add-user", userController.postUser);

module.exports = router;
