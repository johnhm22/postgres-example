// const Todos = require('./db.js');
import { Todos } from './db.js';

(async () => {
  const todos = await Todos.GetTodos();
  console.log('todo: ', todos);
})();
