const express = require('express');
const router = express.Router()
const userContoller = require('../controllers/user.controller');

router.get('/getAllUsers', userContoller.getAllUsers);
router.get("/getOneUser/:id", userContoller.getOneUser);
router.post("/addUsers", userContoller.addUsers);
router.put("/updateUser/:id", userContoller.updateUser);
router.delete("/deleteUser/:id", userContoller.deleteUser);


//--------------------adding Car to User/Getting CarData through user-----------
router.post("/users/:id/create", userContoller.addCarToUser);
router.get("/users/:id/getAllCars", userContoller.getAllCars);
module.exports = router;