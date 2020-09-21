const { reset } = require('nodemon');
const  taskShow = require('../controller/task_controller');
const db = require ('../config/db_close_todoapp');
const taskController = require('../controller/task_controller');

module.exports = (app) => {

    app.get('/', taskController.showTask());

    app.delete('/:id', taskController.removeTask());
};