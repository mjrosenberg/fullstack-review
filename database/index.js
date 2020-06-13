const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: {type: String, unique: true},
  username: String,
  link: String,
  stars: Number
});
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
    link: dataObj.html_url,
    stars: dataObj.stargazers_count
  });
  repo.save((err, result) => {
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
  }).sort({stars: -1}).limit(25);
  return query;
  // return query.sort({name: desc});
}

module.exports.save = save;
module.exports.getTopTwentyFive = getTopTwentyFive