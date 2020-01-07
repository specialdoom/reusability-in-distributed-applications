'use strict';

module.exports = app => {
  let toDoList = require('../controllers/to-do-list.controller');

  app
    .route('/tasks')
    .get(toDoList.listAllTasks)
    .post(toDoList.create);
};
