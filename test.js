const PasswordSecurityClient = require('./PasswordSecurityClient');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

pwd.passwordValidationTest("pds$66wo@d").then(function(result) {
    console.log(result);

    pwd.passwordValidationTest("q1w2e3r4").then(function(result) {
        console.log(result);
    });    
});

