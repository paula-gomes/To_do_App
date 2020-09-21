const express = require('express');
const pathTasks = require('../src/paths/path_tasks');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use('/static', express.static('src/public'));
app.use(bodyParser.json());

pathTasks(app);


app.listen(port, () => console.log('server initialiazed'));
module.exports = app;