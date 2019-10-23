# ToDoList

Primeiro projeto realizado para a turma n1-meli-reprograma, utilizando Javascript, Node.js v12.10.0, Express v4.17.1 e Nodemon v1.19.4. 

## Instalação
Para instalar as dependências Nodemon e Express, utilizar o comando:
```bash
npm install
```

## Iniciar Aplicação
Para iniciar a aplicação, utilizar o comando:
```bash
npm start
```

## Objetivo
API criada a fim de disponibilizar uma lista de tarefas a ser compartilhada entre os funcionários. Os dados da tarefa são:

- Descrição da tarefa
- Data de Inclusão 
- Check para verificar se o item já foi concluído.
- Colaborador responsável pela tarefa.

## Endpoint

### Listar Tarefas
Endpoint: http://localhost:3000/tarefas

### Buscar uma tarefa específica
Endpoint: http://localhost:3000/tarefas/:id

### Buscar tarefas concluídas
Endpoint: http://localhost:3000/tarefas/concluidos/filtrar

### Buscar tarefas por colaborador
Endpoint: http://localhost:3000/tarefas/:nome/buscar