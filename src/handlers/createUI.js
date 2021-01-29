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
    // check if the fields are empty
    if(title === '' || message === ''){
        // a failier message sends arguments to showAlert method of Todo class.
        Todo.showAlert('please fill in all fields', 'danger');
   
    }
    else{
    const todo = new Todo(1, title, message);
    container.appendChild(todo);
   // Todo.showAlert('Item added', 'success');
    }
  
}