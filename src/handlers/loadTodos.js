'use strict';

import Todo from '../classes/Todo.js';
import {
  logger
} from '../../lib/logger.js';

/**
 * 
 *  It checks if there are any items in the localStorage
 *  and creates UI elements (todo's elements) from them.
 *  Then it adds them to the DOM.
 */
export function loadStorage() {
  for (var i = localStorage.length-1; i >= 0; i--) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    //deserialization 
    const des = JSON.parse(value);
    const id = des.id;
    const title = des.title;
    const message = des.description;
    const container = document.querySelector('#todo-list');
    const todo = new Todo(id, title, message);
    container.appendChild(todo.render());
    logger.push({
      object: 'todo'
    });
  }
}

logger.push({
  handler: 'loadStorage'
});