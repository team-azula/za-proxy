const Sequelize = require("sequelize");
const Model = Sequelize.Model;
// const postgresStuff = require('./config.js');
const { STRING } = require("sequelize");

const sequelize = new Sequelize("SDC", "postgres", "password", {
  host: "ec2-3-129-5-1.us-east-2.compute.amazonaws.com",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  logging: false,
});

const App = sequelize.define("AppTable", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: false,
  },
  appId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  logo: Sequelize.STRING,
  company: Sequelize.STRING,
  rating: Sequelize.DECIMAL,
  description: Sequelize.STRING,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:");
  });

module.exports = App;
