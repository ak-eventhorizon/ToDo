'use strict';

import {createListItem} from './modules/createListItem.js';
import {addEventListenersOnItem} from './modules/addEventListenersOnItem.js';



let list = document.getElementById('list');

//array example
// arr[0] - counter, arr[1]...arr[n] - objects
// ID - equal index in arr
let listArr = [
    5,
    {
        id: 1,
        order: 1,
        color: 'red',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia perferendis architecto se',
        checked: false
    },
    {
        id: 2,
        order: 2,
        color: 'yellow',
        content: 'Привет! Я блокнотик и мы будем записывать сюда все умные мысли, какие придут в голову!',
        checked: true
    },
    {
        id: 3,
        order: 3,
        color: 'green',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia',
        checked: false
    },
    undefined,
    {
        id: 5,
        order: 5,
        color: 'none',
        content: 'Всего три слова',
        checked: false
    }
];

for (let i = 1; i < listArr.length; i++) {
    if(listArr[i] !== undefined) {
        let elem = createListItem(listArr[i]);
        list.appendChild(elem);
        addEventListenersOnItem(listArr[i]);
    }
}


//************ event handlers on main ADD button ************
let mainBtn = document.getElementById('main-btn');
mainBtn.onclick = function(){

    // localStorage.counter++;

};




//******************** localStorage setup ********************
//************************************************************

// if(!localStorage.counter){
//  localStorage.counter = 0;
// }

// if (!localStorage.toDo){
//     localStorage.toDo = [0,1,2];
// }