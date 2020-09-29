class TaskDao {

    constructor(db) {
        this._db = db;
    }

    viewTasks() {

        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT * FROM tasks`,
                (err, rows) => {
                    if (err) return reject('Not able to show tasks');

                    return resolve(rows);
                }
            )
        });
    }

    removeTasks(id) {

        return new Promise((resolve, reject) => {
            this._db.run(
                `DELETE FROM tasks WHERE id_tasks = ? `,
                [id],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Not able to delete task');
                    }
                        return resolve();
                }
            );
        });
        
    };

    addTasks(title,desc,status){

        return new Promise ((resolve, reject) => {
            this._db.run(
                `INSERT INTO tasks(title_task,details_task,id_status) VALUES (?, ?, ?)`, 
                [title,desc,status],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Not able to add task')
                    }
                        return resolve ();
                }
            );
        });
    };

    updateTasks(title,desc,status,id){

        return new Promise ((resolve,reject)=>{
            this._db.run(
                `UPDATE tasks SET title=?, desc=?, status =? WHERE id =?`,
                [title,desc,status,id],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Not able to update task')
                    }
                        return resolve ();
                }

            );
        });
    };
}

module.exports = TaskDao; 