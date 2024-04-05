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
                resolve(results);
            });
        });
    });
}

// 모듈 내보내기
module.exports = {
    executeQuery,
};
