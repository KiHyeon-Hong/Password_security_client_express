const PasswordSecurityClient = require('./PasswordSecurityClient');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

// pwd.passwordValidationTest("pds$66wo@d").then(function(result) {
//     console.log(result);
// });

console.log(pwd.passwordValidationTest("pds$66wo@d"));