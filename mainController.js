const request = require('request');
const fs = require('fs');
const http = require('http');

// const PasswordSecurityClient = require('./PasswordSecurityClient');
const passwordSecurityClient = require('@kihyeon-hong/passwordsecurityclient');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();
// pwd.passwordModelDistribution('0.2', 'comment');


