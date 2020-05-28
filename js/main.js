'use strict';

import {createListItem} from './modules/createListItem.js';
import {addEventListenersOnItem} from './modules/addEventListenersOnItem.js';
import {putToLocalStorage} from './modules/localStorage.js';
import {getFromLocalStorage} from './modules/localStorage.js';


//************* localStorage, ArrayCache and app state initialize **************
//******************************************************************************

if(!localStorage.list){
    localStorage.list = '[0]';
}

let listArrCached = getFromLocalStorage();

let listNode = document.getElementById('list');
for (let i = 1; i < listArrCached.length; i++) {
    if(listArrCached[i] !== undefined) {
        let elem = createListItem(listArrCached[i]);
        listNode.appendChild(elem);
        addEventListenersOnItem(listArrCached[i]);
    }
}

//************ event handler on main ADD button ************
//***********************************************************
let mainBtn = document.getElementById('main-btn');
mainBtn.onclick = function(){

    // arr[0] - counter, arr[1]...arr[n] - objects
    // ID - equal index in arr

    listArrCached[0]++;

    let newElement = {
        id: listArrCached[0],
        order: listArrCached[0],
        color: 'none',
        content: '',
        checked: false
    };

    listArrCached.push(newElement);
    putToLocalStorage(listArrCached);

    //last (just pushed) array element creation
    let elem = createListItem(listArrCached[listArrCached.length-1]);
    listNode.appendChild(elem);
    addEventListenersOnItem(listArrCached[listArrCached.length-1]);
};




// listArrCached example
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




