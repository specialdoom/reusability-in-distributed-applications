const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/to-do-list.model'),
  parser = require('body-parser'),
  routes = require('./api/routes/to-do-list.routes'),
  cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/to-do-db');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

routes(app);

app.listen(port);

console.log(`RESTful api is listenin on port ${port}`);
