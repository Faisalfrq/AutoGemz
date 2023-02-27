const db = require("../models/index");
const Rent = db.rent;
exports.getAllRentCars = (req, res) => {
  Rent.find((err, data) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Failed to Get data",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        data: data,
      });
    }
  });
};

exports.getOneRentCars = (req, res) => {
  const { id } = req.params;
  Rent.findById(id, (err, data) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Failed to Get data",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        data: data,
      });
    }
  });
};
exports.addRentCar = (req, res) => {
  const {
    pickup,
    info,
    engineType,
    color,
    transmission,
    rentPerDay,
    description,
    image,
    contact,
    secondContact,
    status,
    } = req.body;
    const rent = new Rent({
      pickup,
      info,
      engineType,
      color,
      transmission,
      rentPerDay,
      description,
      image,
      contact,
      secondContact,
      status,
    });
    rent.save((err, newData) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Unable to Add Car to Rent database",
        });
      }
      return res.send({
        status: "Success",
        data: newData,
      });
    });
};

exports.updateOneRentCar = (req, res) => {
    const { id } = req.params
    const { body } = req
    Rent.findByIdAndUpdate(id, body, (err, updatedData) => {
        if (err) {
          return res.status(500).send({
            status: "Failed",
            message: "Unable to Update records",
          });
        }
        return res.send({
          status: "Updated",
          data: updatedData,
        });
    })
}
exports.deleteRentCar = (req, res) => {
    const { id } = req.params
    Rent.findByIdAndDelete(id, (err, deleted) => {
        if (err) {
            return res.status(500).send({
                status: "Error",
                message:"Record Not Found"
            })
        }
        else {
            return res.status(200).send({
                status: "Success",
                data:deleted
            })
        }
    })
}
