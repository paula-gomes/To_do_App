const  taskShow = require('../controller/task_controller');

module.exports = (app) => {

    app.get('/', taskShow.showTask());
}