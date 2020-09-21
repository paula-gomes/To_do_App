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

    removeTasks(id_tasks) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `DELETE FROM tasks WHERE id = ? `,
                [id_tasks],
                (err) => {
                    if (err) {
                        return reject('Not able to delete task');
                    }
                    return resolve();
                }
            );
        });
        
    };
}

module.exports = TaskDao;