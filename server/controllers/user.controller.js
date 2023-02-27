const db = require("../models/index");
const User = db.user


exports.addUsers = async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phone,
    profileImg,
    posts,
  } = req.body;

  const user = new User({
    name,
    email,
    password,
    address,
    phone,
    profileImg,
    posts,
  });
  user.save((err, newRecord) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Add User to database",
      });
    }
    return res.send({
      status: "Success",
      data: newRecord,
    });
  });
};

exports.getOneUser = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, user) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this User",
      });
    }
    return res.send({
      status: "Success",
      user: user,
    });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  User.findByIdAndUpdate(id, body, (err, record) => {
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

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Delete",
      });
    }
    return res.send({
      status: "User Profile Deleted",
      data: record,
    });
  });
};

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find Users",
      });
    }
    return res.send({
      status: "Success",
      users: users,
    });
  });
};

//------------------------
exports.addCarToUser = (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  User.findByIdAndUpdate(id, { $push: { cars: req.body.carId } }, (err, user) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this User",
      });
    } return res.send({
      status: "Success",
      user: user,
    });

  })
}
exports.getAllCars = async (req, res) => {
  const { id } = req.params
  const foundCar = await User.findById(id).populate("cars");
  res.send({
    status: "Success",
    data: foundCar
  })
}
