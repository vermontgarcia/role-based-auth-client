const express = require("express");
const authRouter = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GET & POST & PATCH routes

authRouter.post("/signup", (req, res) => {
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
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 300,
      });
      delete user._doc.password;
      res.status(200).json({ msg: "User created succesfully", user, token });
    })
    .catch((err) => {
      console.log("User SingUp Error =====>", err);
      res.status(500).json({ err, msg: "User already registered" });
    });
});

authRouter.post("/login", async (req, res) => {
  // Find user and validate password
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).json({ msg: "User not registered" });
  let validPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!validPassword)
    return res.status(500).json({ msg: "Username and password not matching" });

  // Create token valid for 5 minutes
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 300,
  });
  delete user._doc.password;

  res.status(200).json({ user, token, msg: "User logged succesfully" });
});

authRouter.get("/loggedin", (req, res) => {
  // User session validation by token
  const token = req.headers["x-access-token"];
  if (!token) return res.status(403).json({ msg: "Token not received" });

  jwt.verify(token, process.env.SECRET, async (err) => {
    if (err)
      return res.status(403).json({ msg: "Session expired, please login" });
    res.status(200).json({ msg: "Valid user and session" });
  });
});

module.exports = authRouter;
