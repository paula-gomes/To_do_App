const { reset } = require('nodemon');
const  taskShow = require('../controller/task_controller');
const db = require ('../config/db_close_todoapp');
const TaskDao = require('../DAO/tasks_DAO');

module.exports = (app) => {

    app.get('/', taskShow.showTask());

    app.delete('/:id', (req,res) =>{
        const id = req.params.id;
        const newTask = new TaskDao;
        newTask.removeTasks(id)
                        .then(() => { res.send('deleted')})
                        .catch( err => console.log(err));
    });
};