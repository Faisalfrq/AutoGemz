const express = require("express");
const router = express.Router();
const rentControllers = require("../controllers/rent.controllers");

router.get("/getAllRentCars", rentControllers.getAllRentCars);
router.get("/getOneRentCars/:id", rentControllers.getOneRentCars);
router.post("/addRentCar", rentControllers.addRentCar);
router.put("/updateOneRentCar/:id", rentControllers.updateOneRentCar);
router.delete("/deleteRentCar/:id", rentControllers.deleteRentCar);

module.exports = router;
