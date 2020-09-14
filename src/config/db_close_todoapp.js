const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db_todo.db');

process.on('SIGINT', () => {

    db.close(() => {

        console.log('bd closed');
        process.exit(0);
    })
});

module.exports = db;
