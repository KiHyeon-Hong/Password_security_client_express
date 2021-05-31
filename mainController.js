const passwordSecurityClient = require('./PasswordSecurityClient');
const request = require('request');

request.get(
  {url:'http://192.168.0.18:65001/Test'},
  function(err, res, body) {
    console.log(body);
  }
);
