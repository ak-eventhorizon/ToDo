'use strict';

import {createItem} from './modules/createItem.js';

import {addEventListenersOnItem} from './modules/addEventListeners.js';
import {addEventListenersOnAddBtn} from './modules/addEventListeners.js';
import {addEventListenersOnClearBtn} from './modules/addEventListeners.js';


import {initializeLocalStorage} from './modules/localStorage.js';
import {putToLocalStorage} from './modules/localStorage.js';
import {getFromLocalStorage} from './modules/localStorage.js';
import {clearLocalStorage} from './modules/localStorage.js';


//************* localStorage, interface and App state initialize **************
//******************************************************************************

initializeLocalStorage();
addEventListenersOnAddBtn();
addEventListenersOnClearBtn();

let tempListArr = getFromLocalStorage();
let list = document.getElementById('list');

for (let i = 1; i < listArrCache.length; i++) {
    if(tempListArr[i] !== null) {
        let elem = createItem(tempListArr[i]);
        list.appendChild(elem);
        addEventListenersOnItem(tempListArr[i]);
    }
}


// arr[0] - counter, so for starts with 1
// arr[1]...arr[n] - objects
// ID - equal index in arr


// listArrCache example
// arr[0] - counter, arr[1]...arr[n] - objects
// ID - equal index in arr
// let listArr = [
//     5,
//     {
//         id: 1,
//         order: 1,
//         color: 'red',
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia perferendis architecto se',
//         checked: false
//     },
//     {
//         id: 2,
//         order: 2,
//         color: 'yellow',
//         content: 'Привет! Я блокнотик и мы будем записывать сюда все умные мысли, какие придут в голову!',
//         checked: true
//     },
//     {
//         id: 3,
//         order: 3,
//         color: 'green',
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia',
//         checked: false
//     },
//     undefined,
//     {
//         id: 5,
//         order: 5,
//         color: 'none',
//         content: 'Всего три слова',
//         checked: false
//     }
// ];




