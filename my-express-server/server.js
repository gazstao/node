// 2020-04-14 16:40 - Class 235 Angela Yu WebDev Course

const serverPort = 3000;

const express = require("express");
const app = express();

app.get("/", function(req, res){
  console.log("Requisição recebida");
  res.send("<h1>Hello! by Gazstao (c) 2020</h1><br>"+
  "Here we use nodemon<br>Requisicao recebida de "+req.user);
});

app.get("/contact", function(req,res){
  res.send("<h4>Contact me at sac@aztechtecnologia.com.br<h4>");
});

app.get("/about",function(req,res){
  res.send("<h4>I am <a href='https://www.aztechtecnologia.com.br/Gazstao.html'>Gazstao</a> "+
  "and I love2code!");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Energy Drink</li><li>Fuck</li><li>Get a joint</li></ul>");
});

app.listen(serverPort, function(){
  console.log("\nServer Started and Listening in Port "+serverPort+"\n");
});
