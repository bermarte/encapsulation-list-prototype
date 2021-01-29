'use strict';

//todo class




export default class Todo {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        //build the UI
        const tr = document.createElement('tr');
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
        closeBtn.setAttribute('onclick',toRemove);
        closeBtn.innerHTML = 'X';
        tr.appendChild(closeBtn);
        tr.setAttribute('contenteditable', true);
        return tr;
    }
   
    setDescription(text){
        this.description = text;
    };
    setTitle(text){
        this.title = text;
    };
}

