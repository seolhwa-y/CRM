const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const { executeQuery } = require('./mysql');
const path = require('path');

app.use(cors());

/********** 예시: SELECT 쿼리 실행 **********/
app.get('/api', (req, res) => {
    executeQuery('SELECT * FROM USERINFO')
        .then((results) => {
            console.table('Query results:', results);
            res.send({ message: 'hello world!', result: results });
        })
        .catch((error) => {
            console.error('Error executing query:', error);
        });
});
/*******************************************/

app.get('/getMenuList', (req, res) => {
    executeQuery('SELECT * FROM MENUINFO')
        .then((results) => {
            console.log('Query results:', results);
            res.send({ message: 'getMenuList!', result: results });
        })
        .catch((error) => {
            console.error('Error executing query:', error);
        });
});

server.listen(8080, () => {
    console.log('server is running on 8080!');
});