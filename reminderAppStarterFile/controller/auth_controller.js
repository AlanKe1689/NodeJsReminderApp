let database = require("../database");
let userModel = require("../models/userModel").userModel;

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    userModel.createUser(req.body.name, req.body.email, req.body.password);

    database[req.body.name] = {"reminders": []};

    res.redirect("/reminders");
  },
};

module.exports = authController;
