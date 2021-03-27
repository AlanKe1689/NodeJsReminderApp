let database = require("../database");
let userModel = require("../models/userModel").userModel;
const fetch = require("node-fetch");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  registerSubmit: (req, res) => {
    const client_id = process.env.UNSPLASH_CLIENT_ID;
    const query = "cats";
    let picture = null;

    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`)
      .then(photos => photos.json())
      .then(parsedPhotos => {
        let pictureLength = Object.keys(parsedPhotos).length;
        let index = Math.floor(Math.random() * (pictureLength - 1));
        picture = parsedPhotos.results[index].urls.thumb;

        userModel.createUser(req.body.name, req.body.email, req.body.password);

        database[req.body.name] = {
          "reminders": [],
          "friends": [],
          "picture": picture
        };
      });

    res.redirect("/reminders");
  },
};

module.exports = authController;
