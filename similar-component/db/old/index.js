const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/similarApps', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(error => handleError(error));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

module.exports = db;