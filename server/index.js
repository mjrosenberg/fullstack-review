const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Promise = require('bluebird');
// require('dotenv').config();
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

//need to get the data from my database
const db = require('../database/index');
Promise.promisifyAll(require('mongoose'));
const gitHubHelpers = require('../helpers/github.js');

app.post('/repos', function (req, res) {
  console.log('body in post', req.body);
  gitHubHelpers.getReposByUsername(req.body.username)
    .then((data) => {
      for (repo of data.data) {
        db.save(repo);
      }
      res.send(data.data);
    })
    .catch((err) => {
      console.log('getting an error', err);
      res.send(err)
    });

  //call this method to return all the repos by the username
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  db.getTopTwentyFive()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // This route should send back the top 25 repos sprted alphabetically
  //having an issue with lowercase v. uppercase
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

