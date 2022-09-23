const User = require("../models/user");

exports.getUser = (req, res, next) => {
  User.findAll()
    .then((result) => {
      // console.log(result);
      //send a json object
      res.json(result);
    })
    .catch((err) => {
      console.log(err, "error in fetching all the products from db");
    });
};

exports.postUser = (req, res, next) => {
  console.log(req.body, "this is request body");
  const email = req.body.email;
  const name = req.body.name;
  User.create({
    name: name,
    email: email,
  })
    .then(() => {
      console.log("user created");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "error in create user");
    });
};
