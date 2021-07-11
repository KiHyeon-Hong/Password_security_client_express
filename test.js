const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// const PasswordSecurityClient = require('./PasswordSecurityClient');
const PasswordSecurityClient = require('@kihyeon-hong/password_security_client');

var pwd = new PasswordSecurityClient.PasswordSecurity.PasswordSecurity();

// 유출 비밀번호 사전 추가
// pwd.passwordDictUpdate('{"dictionary":"q1w2e3r4"}', "test message");

// 유출 비밀번호 예측 모델 하이퍼 파라매터 수정
// pwd.passwordModelParaUpdate('{"node":4,"unit":[3,5,3,1],"activation":"relu","epoch":10}', "test message.");



app.get('/passwordModelDistribution', (req, res, next) => {
    res.send(pwd.passwordModelDistribution(req.query.versionData, req.query.comment));
});

app.get('/passwordValidation', (req, res, next) => {
    console.log(req.query.password)

    pwd.passwordValidation(req.query.password).then(function(result) {
        res.send(result);
    });   
});

app.get('/passwordDictUpdate', (req, res, next) => {
    res.send(pwd.passwordDictUpdate('{"dictionary":"q1w2e3r4"}', "test message"));
});

app.get('/passwordModelParaUpdate', (req, res, next) => {
    res.send(pwd.passwordModelParaUpdate('{"node":4,"unit":[3,5,3,1],"activation":"relu","epoch":12}', "test message."));
});

app.get('/serverAddressUpdate', (req, res, next) => {
    res.send(pwd.serverAddressUpdate(req.query.serverAddress));
});


app.listen(65002, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				console.log('server running at ' + body + ':65002');
		}
	);
});