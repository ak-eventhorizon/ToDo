'use strict';

import {createItem} from './createItem.js';

import {putToLocalStorage} from './localStorage.js';
import {getFromLocalStorage} from './localStorage.js';
import {clearLocalStorage} from './localStorage.js';

// IN - object with list item parameters
// {
//     id: 1,
//     order: 1,
//     color: 'red' | 'yellow '| 'green' | 'none',
//     content: 'string up to 100 chars',
//     checked: false
// }

// OUT - undefined
// function add all event listeners on DOM element 'item-ID'

function addEventListenersOnItem(obj){

    let id = obj.id;

    //************ event handler on menu button ************
    let menuButton = document.getElementById(`menu_btn-${id}`);
    menuButton.onclick = function(){

        this.classList.toggle('menu-btn--clicked');

        let currentContextMenu = document.getElementById(`context_menu-${id}`);
        currentContextMenu.classList.toggle('context-menu--hidden');

        //hide color choice menu if it was enabled
        let currentColorMenu = document.getElementById(`color_menu-${id}`);
        if(!currentColorMenu.classList.contains('color-menu--hidden')){
        currentColorMenu.classList.toggle('color-menu--hidden');
        }

        //close all other menus if they opened
        let tempListArr = getFromLocalStorage();
        for (let i = 1; i < tempListArr.length; i++) {
            if( i !== id && tempListArr[i] !== null) {
                let currentMenuBtn = document.getElementById(`menu_btn-${i}`);
                let currentContextMenu = document.getElementById(`context_menu-${i}`);
                let currentColorMenu = document.getElementById(`color_menu-${i}`);

                currentMenuBtn.classList = 'menu-btn';
                currentContextMenu.classList = 'context-menu context-menu--hidden';
                currentColorMenu.classList = 'color-menu color-menu--hidden';
            }
        }
    };


    //************ event handler on context-menu-delete button ************
    let deleteButton = document.getElementById(`context_btn_del-${id}`);
    deleteButton.onclick = function(){

        let currentItem = document.getElementById(`item-${id}`);
        currentItem.parentNode.removeChild(currentItem);

        let tempListArr = getFromLocalStorage();
        tempListArr[id] = null;
        putToLocalStorage(tempListArr);
    };
    

    //************ event handler on context-menu-down button ************
    let downButton = document.getElementById(`context_btn_down-${id}`);
    downButton.onclick = function(){

        let currentItem = document.getElementById(`item-${id}`);

        let items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            if (items[i].style.order === String(+currentItem.style.order + 1)) {
                [currentItem.style.order, items[i].style.order] = 
                [items[i].style.order, currentItem.style.order]; // swap values in DOM <-->
                break;
            } 
        }
//***********VVVVV Переделать - работает, только если нет удаленных элементов в массиве */
        // swap values in objects <-->
        let tempListArr = getFromLocalStorage();
        for (let i = 1; i < tempListArr.length; i++) {
            if(tempListArr[i].order === tempListArr[id].order + 1) {
                tempListArr[i].order--; 
                tempListArr[id].order++;
                break;
            }
        }
        putToLocalStorage(tempListArr);

    };

    
    //************ event handler on context-menu-up button ************
    let upButton = document.getElementById(`context_btn_up-${id}`);
    upButton.onclick = function(){

        let currentItem = document.getElementById(`item-${id}`);

        let items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            if (items[i].style.order === String(+currentItem.style.order - 1)) {
                [currentItem.style.order, items[i].style.order] = 
                [items[i].style.order, currentItem.style.order]; // swap values <-->
                break;
            } 
        }

//***********VVVVV Переделать - работает, только если нет удаленных элементов в массиве */
        // swap values in objects <-->
        let tempListArr = getFromLocalStorage();
        for (let i = 1; i < tempListArr.length; i++) {
            if(tempListArr[i].order === tempListArr[id].order - 1) {
                tempListArr[i].order++; 
                tempListArr[id].order--;
                break;
            }
        }
        putToLocalStorage(tempListArr);
    };


    //************ event handler on context-menu-color button ************
    let colorButton = document.getElementById(`context_btn_color-${id}`);
    colorButton.onclick = function(){

        let currentColorMenu = document.getElementById(`color_menu-${id}`);
        currentColorMenu.classList.toggle('color-menu--hidden');
    };


    //************ event handlers on color-change buttons ************
    let colorChangeRedButton = document.getElementById(`color_btn_red-${id}`);
    let colorChangeYellowButton = document.getElementById(`color_btn_yellow-${id}`);
    let colorChangeGreenButton = document.getElementById(`color_btn_green-${id}`);
    let colorChangeNoneButton = document.getElementById(`color_btn_none-${id}`);

    let currentCheckArea = document.getElementById(`check_area-${id}`);

    colorChangeRedButton.onclick = function(){
        if(currentCheckArea.classList.contains('check-area--red')){
            currentCheckArea.classList.value = 'check-area';
        } else {
            currentCheckArea.classList.value = 'check-area check-area--red';
        }
    };

    colorChangeYellowButton.onclick = function(){
        if(currentCheckArea.classList.contains('check-area--yellow')){
            currentCheckArea.classList.value = 'check-area';
        } else {
            currentCheckArea.classList.value = 'check-area check-area--yellow';
        }
    };

    colorChangeGreenButton.onclick = function(){
        if(currentCheckArea.classList.contains('check-area--green')){
            currentCheckArea.classList.value = 'check-area';
        } else {
            currentCheckArea.classList.value = 'check-area check-area--green';
        }
    };

    colorChangeNoneButton.onclick = function(){
        currentCheckArea.classList.value = 'check-area';
    };


    //************ event handler on check box ************
    let checkBox = document.getElementById(`check_box-${id}`);
    checkBox.onclick = function(){

        this.classList.toggle('check-box--checked');
        let currentTextArea = document.getElementById(`text_area-${id}`);

        currentTextArea.toggleAttribute('readonly');
    };

}

//************ event handler on MAIN ADD button ************
function addEventListenersOnAddBtn() {

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

        //create new element in DOM
        let elem = createItem(newElement);
        let list = document.getElementById('list');
        list.appendChild(elem);
        addEventListenersOnItem(newElement);
    };
}

//************ event handler on CLEAR ALL button ************
function addEventListenersOnClearBtn() {

    let clearBtn = document.getElementById('clear-btn');

    clearBtn.onclick = function(){

        if(confirm('THIS ACTION WILL DELETE ALL!\nARE YOU SURE?')){

            let list = document.getElementById(`list`);
            list.innerHTML = '';
        
            clearLocalStorage();
        }
    };
}

export {
    addEventListenersOnItem,
    addEventListenersOnAddBtn,
    addEventListenersOnClearBtn
};