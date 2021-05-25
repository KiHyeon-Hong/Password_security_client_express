const passwordSecurityClient = require('./PasswordSecurityClient');
const request = require('request');

request.get(
  {url:'http://localhost:65001/Test'},
  function(err, res, body) {
    console.log(body);
  }
);
