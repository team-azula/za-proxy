const Sequelize = require('sequelize');
const Model = Sequelize.Model;
var faker = require('faker');
const App = require('./index.js');
const { error } = require('jquery');

var addData = function() {
  App.sync().then(() => {
    App.create({
      appId: Math.round(Math.random() * (1000000 - 1) + 1),
      name: faker.name.findName(),
      logo: faker.image.imageUrl(),
      company: faker.company.companyName(),
      rating: (Math.random() * (5 - 1) + 1).toFixed(2),
      description: faker.lorem.sentence()
    });
  })
    .catch((error) => {
      console.log(error);
    });
};

//If i dont have these 4 add data functions, I get a Validation Error and the numbering is off, with these it works accurately, will attempt to fix later
// addData();
// addData();
// addData();
// addData();

var adder = function() {
  var counter = 0;
  while (counter < 3000) {
    addData();
    counter++;
  }
};

adder();