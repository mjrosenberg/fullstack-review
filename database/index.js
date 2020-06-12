const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //not sure if the column names in the schema need to be the same as they are in the gitHub API data
  //specifically because username is owner.login, which just seems like an odd col name
  name: String,
  username: String,
  link: String //idk if there is a link type that is clickable but that seems more for the front end to handle
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  //should take in an instance of the repo model and call repo.save with a callback
  // saving it and returning the error if there is one otherwise I'm console looging the repo that was saved
  // This function should save a repo or repos to
  // the MongoDB
  repo.save((err, repo) => {
    if (err) {
      return console.error(err);
    }
    console.log(repo);
  });
}

module.exports.save = save;