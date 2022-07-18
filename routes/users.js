const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

userRouter.get("/list", (req, res) => {
  // Get the list of all users

  User.find()
    .then((list) => {
      list.forEach((employee) => {
        delete employee._doc.password;
      });
      res.status(200).json({ list, msg: "List retrieved succesfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err, msg: "Something went grong. List not retrieved" });
    });
});

userRouter.get("/:id", (req, res) => {
  // Get user by ID

  const id = req?.params?.id;

  User.findById(id)
    .then((user) => {
      console.log(user);
      delete user._doc.password;
      res.status(200).json({ user, msg: "User retrieved succesfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err, msg: "Something went grong. User not retrieved" });
    });
});

userRouter.post("/create", (req, res) => {
  // Password validation, encryption, user creation on data base and token creation
  if (req.body.password !== req.body.confirmPassword)
    return res.status(500).json({ msg: "Password missmatch" });

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  req.body.password = hashedPassword;

  let user = {};
  Object.keys(req.body).forEach((key) => {
    user[key] = req.body[key];
  });

  User.create(user)
    .then((user) => {
      delete user._doc.password;
      res.status(200).json({ msg: "User created succesfully", user });
    })
    .catch((err) => {
      console.log("User Creation Error =====>", err);
      res.status(500).json({ err, msg: "Erro creating user" });
    });
});

module.exports = userRouter;
