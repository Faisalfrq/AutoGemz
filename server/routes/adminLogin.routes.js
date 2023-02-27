const express = require("express");
const router = express.Router();
const adminLoginController = require("../controllers/adminLogin.controllers");

router.post("/adminLogin", adminLoginController.adminLogin);

module.exports = router;
