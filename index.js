var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('( "response": "Halo Sangga" )');
});

app.get("/will", function (req, res) {
  res.send('( "response": "Selamat Datang Sangga" )');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": "Kamu Keren" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
