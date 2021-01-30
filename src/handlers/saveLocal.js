'use strict';


export function save(){
    const obj = {};
    const tbody = document.querySelector('#todo-list');
    const tableRows = tbody.getElementsByTagName('tr');
    const rowCount = tableRows.length;
    for (let x = 0; x < rowCount; x++) {
        //store id
        obj.id = tableRows[x].id;
        const td = tableRows[x].getElementsByTagName('td');
        //store the text of the 2 tds in the todo
        obj.title = td[0].innerHTML;
        obj.description = td[1].innerHTML;
        //serialization
        const ser = JSON.stringify(obj);
        localStorage.setItem(obj.id, ser);
    }
}