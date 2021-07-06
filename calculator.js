//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = n1 + n2;
  res.send("Your result " + result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var weight = parseFloat((req.body.w));
  var height = parseFloat((req.body.h));

  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
