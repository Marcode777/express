// this time, we are sending users who did not pass authentication are not allowed back in with their id

var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');


var app = express();
var PORT = 8080;


app.use(session({
  secret: 'crazy secret boom!!',
  cookie: {
    maxAge: 60000
  },
  saveUninitialized:true,
  resave: false
}
));

app.use(bodyparser.urlencoded({extended:false}));

function middleware(req,res,next){
  var sess = req.session;

  if(sess.authenticated === undefined || sess.authenticated === false){
    res.redirect("/login");
  }
  next();

}


app.get('/login', function(req,res){
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get('/logout', function(req,res){
  req.session.authenticated = false;
  res.redirect("/login");
});

app.post('/login', function(req,res){
  console.log(req.body);
  debugger
  if(req.body.email === "me@me.com" && req.body.password === "guest"){
    req.session.authenticated = true;
    res.redirect("/account");
  }
  else{
    req.session.authenticated = false;
    res.redirect("/login");
  }

});

app.get('/account', middleware, function(req,res){
  res.end('<h1>'+"Account!!"+'</h1>');
});

app.get('/', function(req, res){
  res.sendFile(process.cwd() + "/home.html");

});

app.listen(PORT,function(){
  console.log("listening on port: "+PORT);
});