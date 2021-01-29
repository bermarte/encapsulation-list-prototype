'use strict';

import Todo from '../classes/Todo.js';

export function createUI(e) {
    e.preventDefault();
    console.log('create UI element');
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#description').value;
    console.log(title.length);
    //create a todo object and add it to the DOM
    const container = document.querySelector('#todo-list');
    const todo = new Todo(1, title, message);
    container.appendChild(todo);
}