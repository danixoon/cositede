var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

const requestHandler = require("./requestHandler");

app.set("view engine", "ejs");
app.use("/public", express.static("./public"));

app.get("/", function(req, res) {
  // console.log(res);
  res.render("index");
});
app.get("/shop/", function(req, res) {
  res.render("shop");
});

app.get("/api", function(req, res) {
  let query = req.query;
  if (!query.action) return;

  let action = requestHandler[query.action];
  if (!action) return;

  res.send(action(query));
});

// app.get("/api/"), function(req, res) {
//   let action = req.params.action;
//   res.render("shop");
//};
app.listen(port, function() {
  console.log(`Cositede listening on ${port} port`);
});
