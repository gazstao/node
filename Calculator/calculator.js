const serverPort = 3000;

const express = require("express");
const app = express();

var reqNum = 0;
app.get("/",function(req,res){
  console.log("Respondendo requisição n."+reqNum+" em /");
  reqNum++;
  res.sendFile(__dirname+"/index.html");
});

app.listen(serverPort,function(){
  console.log("")
});
