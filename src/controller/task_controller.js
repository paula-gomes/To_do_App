const taskDao = require('../DAO/tasks_DAO');
const db = require('../config/db_close_todoapp');
const viewToDo = require('../views/template_todoapp');

class TaskController {

    static showTask() {

        return ((req, res) => {
            const taskDaoInstance = new taskDao(db);
            taskDaoInstance.viewTasks().then((row) => {
                if (row.length > 0) {
                    res.send(viewToDo(row))
                }
                else res.send(viewToDo());
            })
                .catch((err) => console.log(err));
        });

    }

    static removeTask() {

        return ((req, res) => {
            const taskDaoInstance = new taskDao(db);
            taskDaoInstance.removeTasks(req.params.id)
                .then(() => res.status(200).send("deleted"))
                .catch(err => console.log(err));
        });
    }

    static addTask() {

        return ((req, res) => {
            const taskDaoInstance = new taskDao(db);
            taskDaoInstance.addTasks(req.body.titleTask, req.body.descTask, req.body.statusTask)
                .then(()=>res.redirect('/'))
                .catch((err) => {console.log(err);});
        });
    };

    static updateTask(){

        return ((req,res)=>{

            const taskDaoInstance = new taskDao(db);
            taskDaoInstance.updateTasks(req.body.titleTask, req.body.descTask, req.body.statusTask,req.params.id)
                .then(()=>res.redirect('/'))
                .catch((err) => { console.log (err);});
        });
    };
}

module.exports = TaskController;