const express = require('express');
const pathTasks = require('../src/paths/path_tasks');

const app = express();
const port = 3000;
pathTasks(app);
app.listen(port, () => console.log('server initialiazed'));
module.exports = app;