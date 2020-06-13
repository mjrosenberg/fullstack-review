const axios = require('axios');
// const config = require('../config.js'); //uncomment if the process.env.token doesn't work

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  var url = `https://api.github.com/users/${username}/repos`;
  // console.log('username to be found', username);
  // console.log('url is', url, 'with type', typeof url)
  let options = {
    url: url, //maybe needs a /repos or something to specify we want all his repos
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `token ${config.TOKEN}`,
      'Authorization': `token ${process.env.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };
  return axios.get(url, options); //not sure if this is 100% right, I'm gonna look into the github API and see
  //figure out axios after lunch
}

module.exports.getReposByUsername = getReposByUsername;