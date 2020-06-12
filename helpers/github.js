const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('username to be found', username);
  let options = {
    url: 'https://api.github.com', //maybe needs a /repos or something to specify we want all his repos
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return $axios.$get(`/users/${username}`, options); //not sure if this is 100% right, I'm gonna look into the github API and see
  //figure out axios after lunch
}

module.exports.getReposByUsername = getReposByUsername;