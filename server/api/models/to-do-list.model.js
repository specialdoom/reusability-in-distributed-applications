'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Title of the task'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
