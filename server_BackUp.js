// server.js - express

const express = require('express'); // 라이브러리 참고하세요.
const app = express(); // 라이브러리를 이용해서 객체를 만들어주세요.
const { executeQuery } = require('./mysql');

app.listen(8080, function () {
    console.log('## hi bebe on 8080 ##');
}); // 서버 포트, 띄운 후 실행할 코드

// server - Get req, res
app.get('/pet', function (req, res) {
    res.send('hello PET!!');
}); // 경로, 실행할 코드

// html 파일 보내기
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // 보낼파일경로
}); // 경로, 실행할 코드

// server.js - http

// const http = require('http');
// const app = http.createServer((req, res) => {
//     console.log(req.url); // 들어온 url로 라우팅

//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     req.url == '/' ? res.end('여기는 루트입니다.') : res.end('루트가 아닙니다.'); // utf8 처리 필요
// });

// app.listen(8081, () => {
//     console.log('http로 가동된 서버');
// });

// 예시: SELECT 쿼리 실행
executeQuery('SELECT * FROM USERINFO')
    .then((results) => {
        console.log('Query results:', results);
    })
    .catch((error) => {
        console.error('Error executing query:', error);
    });
