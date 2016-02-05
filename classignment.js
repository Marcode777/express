// * Create a web app using Express that has 5 routes
//   * Home
//   * Login Page
//   * Account Page
//   * Help Page
// * If a user correctly logs in, send them to the Account Page (the correct credentials are whatever you want)


//REMEMBER, AFTER MAKING CHANGES, YOU NEED TO RELOAD THE SERVER

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + '/views/login.html');//get rid of views bc this was just Mike's folder name
});

app.get('/account', function(req, res) {
  res.sendFile(process.cwd() + '/account.html');
});

app.get('/expresslogin', function(req, res) {
  res.sendFile(process.cwd() + '/expresslogin.html');
});

//help here will be the header in the url
app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + '/help.html');//this is the filepath that will load, this is the html help i did.
});


app.post('/login', function(req, res) {
    console.log(req.body);//the "myemail@gmail.com" is what we're validating for, we did not validate for the password
    if (req.body.email == "myemail@gmail.com"){
            res.redirect("/account");
    } else {
            res.redirect("/login");
    }


});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});