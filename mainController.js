const request = require('request');
const fs = require('fs');

// const PasswordSecurityClient = require('./PasswordSecurityClient');
const PasswordSecurityClient = require('@kihyeon-hong/password_security_client');
var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

// 학습된 예측모델 받아오기
// pwd.passwordModelDistribution('0.1', 'test comment');

// 예측모델 사용

/*
pwd.passwordValidation("pds$66wo@d").then(function(result) {
    console.log(result);

    pwd.passwordValidation("203918").then(function(result) {
        console.log(result);
    });    
});
*/