const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
const App = require("../db/postgres/index.js");
const faker = require("faker");

app.use("/:id", express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/apps/:id", (req, res) => {
  console.log(req.params.id);
  App.findOne({ where: { appId: req.params.id } })
    .then((data) => {
      res.send([data]);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.delete("/api/apps/:appid", (req, res) => {
  App.findOneAndDelete({ appId: req.params.appid })
    .then(res.send("Deleted!"))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.post("/api/apps/:appid", (req, res) => {
  var obj = {
    appId: req.params.appid,
    name: faker.random.word(),
    logo: faker.image.imageUrl(),
    company: faker.company.companyName(),
    rating: (Math.random() * (5 - 1) + 1).toFixed(2),
    description: faker.lorem.sentence(),
  };

  App.create(obj)
    .then(res.send(obj))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.put("/api/apps/:appid", (req, res) => {
  App.findOneAndUpdate({ appId: req.params.appid }, { rating: 4 })
    .then(res.json("Updated rating to equal 4!"))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.listen(port, () =>
  console.log(`Similar Component listening on port ${port}!`)
);
