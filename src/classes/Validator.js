'use strict';

import { logger } from '../../lib/logger.js';

export default class Validator {
  static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.form-parent');
        const form = document.querySelector('#todo-form');
       // console.log('form parent elements: '+ form.parentElement.parentElement.classList)
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}

logger.push({
  class: 'Validator'
});