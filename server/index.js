const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

//need to get the data from my database
const db = require('../database/index');
// console.log('save', db.save);
//I have imported my db and it has a .save which is a function that saves the instance of a model
app.post('/repos', function (req, res) {
  // req.body should be an obect like this {username: 'max'}

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

