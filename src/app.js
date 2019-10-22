const express = require('express');
const app = express();

// rotas
const index = require('./routes/index');
const tarefas = require('./routes/tarefas');

app.all('*', function(req, res, next) {
    console.log('passando pelo ToDoList')
    next()
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    next();
})
app.use('/', index);
app.use('/tarefas', tarefas);

module.exports = app;