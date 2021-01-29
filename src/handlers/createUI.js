'use strict';

import Todo from '../classes/Todo.js';

export function createUI(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#description').value;
    //create a todo object and add it to the DOM
    const container = document.querySelector('#todo-list');
    //create the object and add it to the DOM
    const todo = new Todo(Date.now().toString(), title, message);
    container.appendChild(todo.printObj());
}
