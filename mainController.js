// const passwordSecurityClient = require('./PasswordSecurityClient');
const passwordSecurityClient = require('@kihyeon-hong/passwordsecurityclient');
const request = require('request');

// request.get(
//   {url:'http://54.157.166.99:65001/Test'},
//   function(err, res, body) {
//     console.log(body);
//   }
// );

console.log(passwordSecurityClient.passwordSecurityClient.test());
