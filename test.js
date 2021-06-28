const PasswordSecurityClient = require('./PasswordSecurityClient');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

pwd.passwordValidation("pds$66wo@d").then(function(result) {
    console.log(result);

    pwd.passwordValidation("abcdefg").then(function(result) {
        console.log(result);
    });    
});

// pwd.passwordDictUpdate('{"dictionary":"q1w2e3r4"}', "test message");

// pwd.passwordModelParaUpdate('{"node":4,"unit":[3,5,3,1],"activation":"sigmoid","epoch":10}', "test message");

