require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", async function (req, res) {
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        console.error("Error hashing password:", err);
      }

      const newUser = new User({
        email: req.body.username,
        password: hash
      });

      await newUser.save();
      res.render("secrets");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
});

app.post("/login", async function (req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const founduser = await User.findOne({ email: username });

    if (founduser) {
      bcrypt.compare(password, founduser.password, function (err, result) {
        if (err) {
          console.error("Error comparing passwords:", err);
          return res.status(500).send("Error logging in");
        }

        if (result === true) {
          res.render("secrets");
        } else {
          res.render("login");
        }
      });
    } else {
      res.render("login");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen("3000", function () {
  console.log("listening to port 3000");
});

