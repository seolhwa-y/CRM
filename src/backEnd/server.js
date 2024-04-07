const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const server = require('http').createServer(app);
const { executeQuery } = require('./mysql');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/api/customers', (req, res) => {
    executeQuery('SELECT * FROM `REACT-APP`.CUSTOMER')
        .then((results) => {
            console.log('Query results:', results);
            res.send(results);
        })
        .catch((error) => {
            console.error('Error executing query:', error);
            res.status(500).send('Internal Server Error'); // 에러 발생 시 응답을 보냄
        });
});

server.listen(port, () => {
    console.log('server is running on 8080!');
});
