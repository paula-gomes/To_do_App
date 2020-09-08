const tasksToDo = require('../views/template_todoapp');

const db = [

    { name: 'Paula', tasks: [{ title: 'Academia', 'details': 'Malhar as 9am' }] },
    { name: 'Julia', tasks: [{ title: 'yoga', 'details': ' Aulas terças e quintas' }] }
];

module.exports = (app) => {

    app.get('/:name', (req, res) => {

      
        for (let i = 0; i < db.length; i++) {

            if (req.params.name == db[i].name)
               res.send(tasksToDo(db[i].tasks));
        }
    })};