import Todo from '../classes/Todo.js';
import { DeleteAll } from '../handlers/delete-todo-list.js';


Todo.addEventListener('Click', DeleteAll);