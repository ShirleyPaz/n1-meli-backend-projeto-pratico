const tarefas = require('../models/tarefas.json');

exports.get = (req, res) => {
    console.log(req.url);
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id < 1 || id > 17) {
       // Se não encontrar
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}
