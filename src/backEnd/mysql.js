const mysql = require('mysql');

// 쿼리 실행 함수
function executeQuery(query) {
    return new Promise((resolve, reject) => {
        // MySQL 연결 정보 설정
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'test3978!!',
            database: 'REACT-APP',
            port: '3306',
        });

        // MySQL 연결
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL database:', err);
                reject(err);
                return;
            }
            console.log('Connected to MySQL database');

            // 쿼리 실행
            connection.query(query, (error, results, fields) => {
                // 연결 종료
                connection.end();

                if (error) {
                    reject(error);
                    return;
                }
                const sendData = convertKeysToCamelCase(results);
                resolve(sendData);
            });
        });
    });
}

// 데이터의 키를 소문자 카멜 케이스로 변환하는 함수
function convertKeysToCamelCase(data) {
    return data.map((item) => {
        const newItem = {};
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                const camelKey = key
                    .toLowerCase()
                    .replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
                newItem[camelKey] = item[key];
            }
        }
        return newItem;
    });
}

// 모듈 내보내기
module.exports = {
    executeQuery,
};
