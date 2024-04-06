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
    res.send([
        {
            id: '1',
            image: 'https://mblogthumb-phinf.pstatic.net/20130619_253/yim530219_1371615735621JW3IC_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-7.jpg?type=w210',
            name: '홍길동',
            birthday: '001212',
            job: '직장인',
        },
        {
            id: '2',
            image: 'https://mblogthumb-phinf.pstatic.net/20130619_219/yim530219_1371615735476KEbko_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-3.jpg?type=w210',
            name: '홍678동',
            birthday: '006781212',
            job: '직678장인',
        },
        {
            id: '3',
            image: 'https://mblogthumb-phinf.pstatic.net/20130619_205/yim530219_1371615735701ak7em_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-11.jpg?type=w210',
            name: '홍345길동',
            birthday: '034501212',
            job: '직장345인',
        },
        {
            id: '4',
            image: 'https://mblogthumb-phinf.pstatic.net/20130619_214/yim530219_1371615736032UNijl_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-12.jpg?type=w210',
            name: '홍354길동',
            birthday: '00231212',
            job: '직345장인',
        },
        {
            id: '5',
            image: 'https://mblogthumb-phinf.pstatic.net/20130619_100/yim530219_1371615736285IOtTs_JPEG/%B1%B8%B1%DB%B0%AD%BE%C6%C1%F6-0619-9.jpg?type=w210',
            name: '홍길동23',
            birthday: '0012232312',
            job: '직23장인',
        },
    ]);
});

server.listen(port, () => {
    console.log('server is running on 8080!');
});
