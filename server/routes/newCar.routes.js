const express = require("express");
const router = express.Router();
const newCarController = require("../controllers/newCar.controller");

router.get(
  "/getAllNewCars",
  //   (req, res, next) => {
  //       const token = req.headers.authorization || req.headers['x-acess-token']
        
  //       // implement jwt verify toconfirm token if yes
  //       // if(token verified) next()
  //       // else res.status(403).send({})
  // },
  newCarController.getAllNewCars
);
router.get("/getOneNewCar/:id", newCarController.getOneNewCar);
router.post("/addNewCar", newCarController.addNewCar);
router.put("/updateNewCar/:id", newCarController.updateNewCar);
router.delete("/deleteNewCar/:id", newCarController.deleteNewCar);

module.exports = router;
