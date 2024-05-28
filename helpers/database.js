const mariadb = require('mariadb');
const db = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thats_what_she_said'
});

db.getConnection((err, connection) =>{
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection LOST');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database connection LOST');
        }
    } 
    if (connection) connection.release();
    return;
        
})
module.exports = pool;