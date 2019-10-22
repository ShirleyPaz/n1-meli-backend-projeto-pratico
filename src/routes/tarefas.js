const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.get);
router.get('/:id', tarefasController.getById);
router.get('/concluidos/filtrar', tarefasController.getCompletedToDos);
router.get('/:nome/buscar', tarefasController.getToDosByCollaborator);


module.exports = router;