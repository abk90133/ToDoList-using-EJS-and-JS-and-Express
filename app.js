//jsversion6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Exercise", "Take Bath", "Make Breakfast"];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("lists", {kindofday: day, newlistitems: items});


});

app.post("/", function(req, res){
  var item = req.body.newitem;

  items.push(item);

  res.redirect("/");
});



app.listen(3202, function(){
  console.log("Server started on port 3202");
});
