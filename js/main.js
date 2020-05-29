'use strict';

import {createItem} from './modules/createItem.js';
import {addEventListenersOnItem} from './modules/addEventListenersOnItem.js';
import {initializeLocalStorage} from './modules/localStorage.js';
import {putToLocalStorage} from './modules/localStorage.js';
import {getFromLocalStorage} from './modules/localStorage.js';
import {clearLocalStorage} from './modules/localStorage.js';


//************* localStorage, ArrayCache and App state initialize **************
//******************************************************************************

initializeLocalStorage();

// arr[0] - counter
// arr[1]...arr[n] - objects
// ID - equal index in arr

let listArrCache = getFromLocalStorage();
let listNode = document.getElementById('list');

for (let i = 1; i < listArrCache.length; i++) {
    if(listArrCache[i] !== null) {
        let elem = createItem(listArrCache[i]);
        listNode.appendChild(elem);
        addEventListenersOnItem(listArrCache[i]);
    }
}

//************ event handler on main ADD button ************
//**********************************************************
let mainBtn = document.getElementById('main-btn');
mainBtn.onclick = function(){

    let tempListArr = getFromLocalStorage();

    tempListArr[0]++;

    let newElement = {
        id: tempListArr[0],
        order: tempListArr[0],
        color: 'none',
        content: '',
        checked: false
    };

    tempListArr.push(newElement);
    putToLocalStorage(tempListArr);

    //new (just pushed in array) element creation in DOM
    let elem = createItem(newElement);
    listNode.appendChild(elem);
    addEventListenersOnItem(newElement);
};

//************ event handler on DELETE ALL button ************
//***********************************************************




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




