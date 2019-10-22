const tarefas = require('../models/tarefas.json');

exports.get = (req, res) => {
    console.log(req.url);
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefaById = tarefas.find(tarefa => tarefa.id == id)
    if(!tarefaById) {
        res.status(200).send('Não há tarefa registrada com este id.')
    }
    res.status(200).send(tarefaById);
}

exports.getCompletedToDos = (req, res) => {
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == 'true');
    if (tarefasConcluidas.length == 0) {
        res.status(200).send('Não há tarefas concluídas.')
    } else {
        res.status(200).send(tarefasConcluidas);
    }
}

exports.getToDosByCollaborator = (req, res) => {
    const nome = req.params.nome;
    const tarefasFiltradas = tarefas.filter( tarefa =>  tarefa.colaborador.toUpperCase() == nome.toUpperCase());

    if (tarefasFiltradas.length == 0) {
        res.status(200).send('Não há tarefas para este colaborador.')
    } else {
        res.status(200).send(tarefasFiltradas);
    }
}
