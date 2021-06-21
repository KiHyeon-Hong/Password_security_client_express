const PasswordSecurityClient = require('./PasswordSecurityClient');

var pwd = new PasswordSecurityClient.passwordSecurity.passwordSecurity();

/*
console.log(pwd.passwordValidation());
console.log(pwd.passwordModelDistribution());
console.log(pwd.passwordDictUpdate());
console.log(pwd.passwordModelParaUpdate());
console.log(pwd.getLog());
*/

// console.log(pwd.passwordModelDistribution());

console.log(pwd.passwordValidation());