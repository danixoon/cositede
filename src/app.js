var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("./public"));
app.get(
  "/user/:id",
  function(req, res, next) {
    console.log("ID:", req.params.id);
    next();
  },  
  function(req, res, next) {
    res.send("Usser Info");
  }
);

// handler for the /user/:id path, which prints the user ID
app.get("/user/:id", function(req, res, next) {
  res.end(req.params.id);
});

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/:id/:he", (req, res)=>{
  console.log(`Request: ${req.params.id}/${req.params.he}`);
  res.send("FUCK U");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
