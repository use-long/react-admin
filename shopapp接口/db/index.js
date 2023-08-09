import mysql from 'mysql';
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shop-app",
})

/**
 * sql语句执行函数
 * @param {*} sql sql语句
 * @param {*} param sql语句需要的参数 是个数组
 * @returns 
 */
export const query = (sql, param) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, param, (err, data) => {
                connection.release();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);

            })
        })
    })
}
