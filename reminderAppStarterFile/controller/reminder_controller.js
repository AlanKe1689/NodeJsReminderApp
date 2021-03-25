let reminderDatabase = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: reminderDatabase.cindy.reminders, picture: reminderDatabase.cindy.picture });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = reminderDatabase.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: reminderDatabase.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminderDate = req.body.date;
    if (reminderDate !== undefined) {
      let dateArray = reminderDate.split("/");

      if (dateArray[2].length < 4) {
        dateArray[2] = "20" + dateArray[2];
      }

      reminderData = new Date(parseInt(dateArray[2], 10), parseInt(dateArray[0], 10) - 1, parseInt(dateArray[1], 10)).toLocaleDateString("en-US");
    } else {
      reminderData = new Date().toLocaleDateString("en-US");
    }

    let reminderTags = req.body.tags;
    if (reminderTags !== undefined) {
      reminderTags = reminderTags.split(",");
    } else {
      reminderTags = [];
    }

    let reminderSubTasks = req.body.subtasks;
    if (reminderSubTasks !== undefined) {
      reminderSubTasks = reminderSubTasks.split(",");
    } else {
      reminderSubTasks = [];
    }
    let reminder = {
      id: reminderDatabase.cindy.reminders.length + 1,
      title: req.body.title,
      date: reminderData,
      description: req.body.description,
      completed: false,
      tags: reminderTags,
      subtasks: reminderSubTasks
    };

    reminderDatabase.cindy.reminders.push(reminder);

    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = reminderDatabase.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.body.id;

    let searchResult = reminderDatabase.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    const index = reminderDatabase.cindy.reminders.indexOf(searchResult);

    if (index > -1) {
      let reminderDate = req.body.date;
      if (reminderDate !== undefined) {
        let dateArray = reminderDate.split("/");

        if (dateArray[2].length < 4) {
          dateArray[2] = "20" + dateArray[2];
        }

        reminderData = new Date(parseInt(dateArray[2], 10), parseInt(dateArray[0], 10) - 1, parseInt(dateArray[1], 10)).toLocaleDateString("en-US");
      } else {
        reminderData = new Date().toLocaleDateString("en-US");
      }

      let reminderTags = req.body.tags;
      if (reminderTags !== undefined) {
        reminderTags = reminderTags.split(",");
      } else {
        reminderTags = [];
      }

      let reminderSubTasks = req.body.subtasks;
      if (reminderSubTasks !== undefined) {
        reminderSubTasks = reminderSubTasks.split(",");
      } else {
        reminderSubTasks = [];
      }

      reminderDatabase.cindy.reminders[index]['title'] = req.body.title;
      reminderDatabase.cindy.reminders[index]['description'] = req.body.description;
      reminderDatabase.cindy.reminders[index]['completed'] = req.body.completed;
      reminderDatabase.cindy.reminders[index]['date'] = reminderData;
      reminderDatabase.cindy.reminders[index]['tags'] = reminderTags;
      reminderDatabase.cindy.reminders[index]['subtasks'] = reminderSubTasks;
    }

    res.redirect("/reminders");
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;

    let searchResult = reminderDatabase.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    const index = reminderDatabase.cindy.reminders.indexOf(searchResult);

    if (index > -1) {
      reminderDatabase.cindy.reminders.splice(index, 1);
    }

    res.redirect("/reminders");
  },
};

module.exports = remindersController;
