'use strict';

export function deleteAll() {
    const tbody = document.querySelector('#todo-list');
    var tableRows = tbody.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    //erase elements
    for (var x = rowCount - 1; x >= 0; x--) {
        tbody.removeChild(tableRows[x]);
    }
}