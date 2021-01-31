'use strict';

import { logger } from '../../lib/logger.js';

//todo class
export default class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    //returns the UI element
    render() {
        //build the UI
        const tr = document.createElement('tr');
        tr.id = this.id;
        const tdTitle = document.createElement('td');
        tdTitle.innerHTML = this.title;
        tr.appendChild(tdTitle);
        const tdDescription = document.createElement('td');
        tdDescription.innerHTML = this.description;
        tr.appendChild(tdDescription);
        const closeBtn = document.createElement('a');
        closeBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'delete', 'end');
        //remove the UI element
        const toRemove = 'this.parentNode.parentNode.removeChild(this.parentNode)';
        closeBtn.setAttribute('onclick', toRemove);
        closeBtn.innerHTML = 'X';
        tr.appendChild(closeBtn);
        //the text field is editable
        tr.setAttribute('contenteditable', true);
        return tr;     
    }
}

logger.push({
    class: 'Todo'
});