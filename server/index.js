const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
let app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

//need to get the data from my database
const db = require('../database/index');
const gitHubHelpers = require('../helpers/github.js');
// console.log('save', db.save);
//console.log(gitHubHelpers);
//I have imported my db and it has a .save which is a function that saves the instance of a model
app.post('/repos', function (req, res) {
  // req.body should be an obect like this {username: 'max'}
  console.log('req.body');
  //res.send('request went through');
  // var userRepos = gitHubHelpers.getRepoByUsername(req.body.username);
  gitHubHelpers.getRepoByUsername(req.body.username)
    .then((data) => {
      console.log('success');
      // res.send(data);
    })
    .catch((err) => res.send(err));

  //call this method to return all the repos by the username
  // console.log('post request', userRepos);

  //this is the basic structure of what we want, I still need to implement the helper function and then fix this up
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

