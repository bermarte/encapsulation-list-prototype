'use strict';

import Todo from '../classes/Todo.js';
import Validator from '../classes/Validator.js';
import {
    logger
} from '../../lib/logger.js';


export function createUI(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#description').value;
    const container = document.querySelector('#todo-list');
    // check if the fields are empty
    if (title === '' || message === '') {
        // a failing message sends arguments to the showAlert method of the VALIDATOR class
        Validator.showAlert('please fill in all fields', 'danger');
    } else {
        //create the object and add it to the DOM
        const todo = new Todo(Date.now().toString(), title, message);
        container.appendChild(todo.render());
    }
}

logger.push({
    handler: 'createUI'
});