const express = require('express');
const pathTasks = require('../src/paths/path_tasks');
const bodyParser = require('body-parser');
const methodOverRide = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverRide(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.idTask != "null") {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

pathTasks(app);


app.listen(port, () => console.log('server initialiazed'));
module.exports = app;