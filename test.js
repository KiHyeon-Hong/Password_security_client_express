const request = require('request');
const PasswordSecurityClient = require('./PasswordSecurityClient');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

/*
console.log(pwd.passwordValidation());
console.log(pwd.passwordModelDistribution());
console.log(pwd.passwordDictUpdate());
console.log(pwd.passwordModelParaUpdate());
console.log(pwd.getLog());
*/

// request.post({
//     headers: {
//         'content-type': 'application/json'
//     },
//     url:'http://localhost:65001/passwordDictUpdate',
//     body: {
//         dict: {
//             insert: "insert data",
//             delete: "delete data"
//         },
//         comment: "Test Comment"
//     },
//     json: true
// }, function(err, res, body) {
//     // res.json(body);
//     console.log(body);
// });

// console.log(pwd.passwordDictUpdate('{"insert":"insert data","delete":"delete data"}', "test comment"));
console.log(pwd.passwordModelParaUpdate('{"node":3,"hidden":[5,5,5,5]}', "test comment"));