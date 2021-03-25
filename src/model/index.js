const connection = require('../config');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM table', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM table where id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getDataCount: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) as total FROM table', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getAllWithLimit: (offset, limit) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM table LIMIT ?,?', [offset, limit], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addData: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO table SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateData: (data, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE table SET ? WHERE id = ?`, [data, idBook], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteData: (id) => {
        console.log(idbook)
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM table WHERE id = ?`, idbook, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getSortedData: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM table ORDER BY column', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    searchDataBy: (column) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM table WHERE column LIKE CONCAT('%',?,'%')", column, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}