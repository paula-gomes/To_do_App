class TaskDao{

    constructor(db){
        this._db=db;
    }

    viewTasks(){

        return new Promise ((resolve,reject)=>{
            this._db.all(
                `SELECT * FROM tasks`,
                (err,rows)=>{
                    if(err) return reject('Not able to show tasks');

                    return resolve(rows);
                }
            )
        });
    }
}

module.exports=TaskDao;