'use strict';

/*
import handler
add event to UI element
*/

import { createUI } from '../handlers/createUI.js';

let btnAdd = document.querySelector('button[type="submit"]');

btnAdd.addEventListener('click', createUI);



