# ToDoList

Primeiro projeto realizado para a turma n1-meli-reprograma.

## Objetivo
API criada a fim de disponibilizar uma lista de tarefas a ser compartilhada entre os funcionários. Os dados da tarefa são:

- Descrição da tarefa
- Data de Inclusão 
- Check para verificar se o item já foi concluído.

## Tarefas

### Listar Tarefas
Endpoint: http://localhost:3000/tarefas

### Buscar uma tarefa específica
Endpoint: http://localhost:3000/tarefas/:id

### Buscar tarefas concluídas
Endpoint: http://localhost:3000/tarefas/concluidos/filtrar

### Buscar tarefas por colaborador
Endpoint: http://localhost:3000/tarefas/:nome/buscar