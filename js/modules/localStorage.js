'use strict';

function putToLocalStorage(obj){
    localStorage.setItem('list', JSON.stringify(obj));
}

function getFromLocalStorage() {
    let obj = JSON.parse(localStorage.getItem('list'));
    return obj;
}

export {putToLocalStorage, getFromLocalStorage};