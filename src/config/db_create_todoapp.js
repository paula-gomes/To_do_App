const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db_todo.db');

const TASK_SCHEMA = `
CREATE TABLE IF NOT EXISTS tasks (
        id_tasks INTEGER PRIMARY KEY AUTOINCREMENT,
        title_task VARCHAR(100),
        details_task TEXT,
        id_status VARCHAR(50)
    )
`;

const ADD_TASKS = `
INSERT or IGNORE into tasks (
        title_task,
        details_task,
        id_status
    )
VALUES 
    ('Academia','Trocar de série Segunda-feira as 9:30','To do'),
    ('Reuniao com Luiza','programa de coaching Resilia toda segunda às 19:30','Every week')
`;

db.serialize(() => {

    db.run(TASK_SCHEMA, (err) => {
        if (err) {
            console.log("Could not create table tasks");
            process.exit(1);
        }
    });

    db.run(ADD_TASKS, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
    });

});


