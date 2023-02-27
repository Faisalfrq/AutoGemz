const db = require("../models/index");
const Car = db.car;

exports.getAllCars = (req, res) => {
  Car.find((err, cars) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable To Find Record",
      });
    }
    return res.send({
      status: "Success",
      cars: cars,
    });
  });
};

exports.getOneCar = (req, res) => {
  const { id } = req.params;
  Car.findById(id, (err, car) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this Car",
      });
    }
    return res.send({
      status: "Success",
      car,
    });
  });
};

exports.addUsedCar = async (req, res) => {
  const {
    city,
    carInfo,
    register,
    year,
    enginetype,
    transmission,
    color,
    mileage,
    price,
    description,
    image,
    contact,
    secondContact,
  } = req.body;
  const car = new Car({
    city,
    carInfo,
    register,
    year,
    enginetype,
    transmission,
    color,
    mileage,
    price,
    description,
    image,
    contact,
    secondContact,
  });
  car.save((err, newRecord) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Add Car to database",
      });
    }
    return res.send({
      status: "Success",
      data: newRecord,
    });
  });
};

exports.updateUsedCarById = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Car.findByIdAndUpdate(id, body, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Update records",
      });
    }
    return res.send({
      status: "Updated",
      data: record,
    });
  });
};

exports.deleteUsedCar = (req, res) => {
  const { id } = req.params;
  Car.findByIdAndDelete(id, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Delete records",
      });
    }
    return res.send({
      status: "Deleted",
      data: record,
    });
  });
};
