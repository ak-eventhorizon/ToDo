'use strict';

function initializeLocalStorage(){
    if(!localStorage.toDoList){
        localStorage.toDoList = '[0]';
    }
}

function putToLocalStorage(arr){
    localStorage.setItem('toDoList', JSON.stringify(arr));
}

function getFromLocalStorage() {
    let arr = JSON.parse(localStorage.getItem('toDoList'));
    return arr;
}

function clearLocalStorage(){
    localStorage.toDoList = '[0]';
}

export {
    initializeLocalStorage,
    putToLocalStorage,
    getFromLocalStorage,
    clearLocalStorage
};