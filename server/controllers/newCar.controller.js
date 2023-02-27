const db = require("../models/index");
const NewCar = db.newcar;

exports.getAllNewCars = (req, res) => {
  NewCar.find((err, cars) => {
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

exports.getOneNewCar = (req, res) => {
  const { id } = req.params;
  NewCar.findById(id, (err, car) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this NewCar",
      });
    }
    return res.send({
      status: "Success",
      car,
    });
  });
};

exports.addNewCar = async (req, res) => {
  const {
    carInfo,
    year,
    enginetype,
    transmission,
    color,
    price,
    description,
    image,
  } = req.body;
  const newcar = new NewCar({
    carInfo,
    year,
    enginetype,
    transmission,
    color,
    price,
    description,
    image,
  });
  newcar.save((err, newRecord) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Add NewCar to database",
      });
    }
    return res.send({
      status: "Success",
      data: newRecord,
    });
  });
};

exports.updateNewCar = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(id, body);
  NewCar.findOneAndUpdate({ _id: id }, body, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "unable to update requested record",
      });
    }
    return res.send({
      status: "success, updated record was",
      data: record,
    });
  });
};

exports.deleteNewCar = (req, res) => {
  const { id } = req.params;
  NewCar.findByIdAndDelete(id, (err, record) => {
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
