var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

// This is the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + '/views/login.html');
});

app.get('/account', function(req, res) {
  res.sendFile(process.cwd() + '/views/account.html');
});

app.post('/login', function(req, res) {
    // Check to make sure they are an authenticate user
    // if they are
    console.log(req.body);
    res.redirect("/account");

});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});