'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.listAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create = (req, res) => {
  var newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};
