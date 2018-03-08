const todosController = require('../controllers/todos.js');
const todoItemsController = require('../controllers/todoitems');
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );

  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};