const passwordSecurityClient = require('./PasswordSecurityClient');
const request = require('request');

request.get(
  {url:'http://172.31.57.146:65001/Test'},
  function(err, res, body) {
    console.log(body);
  }
);
