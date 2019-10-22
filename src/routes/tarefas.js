const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.get);
router.get('/:id', tarefasController.getById);

module.exports = router;