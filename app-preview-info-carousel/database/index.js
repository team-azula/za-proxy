const mongoose = require('mongoose');
// const db = require('../database');
mongoose.connect('mongodb://localhost/googleplay', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

 module.exports = db;