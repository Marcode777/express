var express = require("express");
var bodyParser = require("body-parser");// this is a middleware piece; parser gets data that needs to be parsed in order for it to be usable; it takes data and takes the 
var app = express(); // this also handles creating the server, which on the previous examples, would have normally taken around 75 lines of code total
var PORT = 3000;
​
function myLoggingMiddleWare(req, res, next){
  var url = req.url;
  var method = req.method;

  console.log("%s request at %s", url, method);
  next();
}

app.use(myLoggingMiddleware); // this is our own middleware that we made
​
app.get("/login", function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});//sendFile is loading a file, whcih would be login.html; process.cwd is like the absolute filepath on the computer; (cwd=currentworkingdirectory); 
​
app.get("/help", function(req, res) {
  res.sendFile(process.cwd() + "/views/help.html");
});
​
app.post("/login", function(req, res) {
  console.log(req.body);
});
​
app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});