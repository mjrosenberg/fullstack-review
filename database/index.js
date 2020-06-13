const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //not sure if the column names in the schema need to be the same as they are in the gitHub API data
  //specifically because username is owner.login, which just seems like an odd col name
  name: {type: String, unique: true},
  username: String,
  link: String
});
//need to figure out how to clear the db because I have duplicates but I don't want them
let Repo = mongoose.model('Repo', repoSchema);

let save = (dataObj) => {
  // TODO: Your code here
  //should take in an instance of the repo model and call repo.save with a callback
  // saving it and returning the error if there is one otherwise I'm console looging the repo that was saved
  // This function should save a repo or repos to
  // the MongoDB
  var repo = new Repo({
    name: dataObj.name,
    username: dataObj.owner.login,
    link: dataObj.html_url
  });
  repo.save((err, repo) => {
    if (err) {
      return console.error(err);
    }
  });
}

let getTopTwentyFive = () => {
  //make another filter for sorting
  queryParams = {};
  var query = Repo.find(queryParams,(err, results) => {
    if (err) {
      return console.error(err)
    }
    return results;
  });
  return query;
  // return query.sort({name: desc});
}

module.exports.save = save;
module.exports.getTopTwentyFive = getTopTwentyFive