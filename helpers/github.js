const axios = require('axios');
const config = {TOKEN: process.env.TOKEN}; //uncomment if the process.env.token doesn't work
// require('../config.js') ||
let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  var url = `https://api.github.com/users/${username}/repos`;
  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };
  return axios.get(url, options); //not sure if this is 100% right, I'm gonna look into the github API and see
  //figure out axios after lunch
}

module.exports.getReposByUsername = getReposByUsername;