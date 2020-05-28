'use strict';

import {createListItem} from './modules/createListItem.js';
import {addEventListenersOnItem} from './modules/addEventListenersOnItem.js';

//************ event handlers on all menu buttons ************
let menuButtons = document.querySelectorAll('.menu-btn');
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].onclick = function(){

        this.classList.toggle('menu-btn--clicked');

        let currentID = this.id.split('-')[1]; //tag id num

        let currentContextMenu = document.getElementById(`context_menu-${currentID}`);
        currentContextMenu.classList.toggle('context-menu--hidden');

        //отключение меню выбора цвета, если оно включено
        let currentColorMenu = document.getElementById(`color_menu-${currentID}`);
        if(!currentColorMenu.classList.contains('color-menu--hidden')){
            currentColorMenu.classList.toggle('color-menu--hidden');
        }
    };
}

//************ event handlers on all context-menu-delete buttons ************
let deleteButtons = document.querySelectorAll('.context-btn--del');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentItem = document.getElementById(`item-${currentID}`);
        
        currentItem.parentNode.removeChild(currentItem);
    };
}

//************ event handlers on all context-menu-down buttons ************
let downButtons = document.querySelectorAll('.context-btn--down');
for (let i = 0; i < downButtons.length; i++) {
    downButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentItem = document.getElementById(`item-${currentID}`);

        let items = document.querySelectorAll('.item');
        for (let j = 0; j < items.length; j++) {
            if (items[j].style.order === String(+currentItem.style.order + 1)) {
                [currentItem.style.order, items[j].style.order] = 
                [items[j].style.order, currentItem.style.order]; // swap values <-->
                break;
            } 
        }
    };
}

//************ event handlers on all context-menu-up buttons ************
let upButtons = document.querySelectorAll('.context-btn--up');
for (let i = 0; i < upButtons.length; i++) {
    upButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentItem = document.getElementById(`item-${currentID}`);

        let items = document.querySelectorAll('.item');
        for (let j = 0; j < items.length; j++) {
            if (items[j].style.order === String(+currentItem.style.order - 1)) {
                [currentItem.style.order, items[j].style.order] = 
                [items[j].style.order, currentItem.style.order]; // swap values <-->
                break;
            } 
        } 
    };
}

//************ event handlers on all context-menu-color buttons ************
let colorButtons = document.querySelectorAll('.context-btn--color');
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentColorMenu = document.getElementById(`color_menu-${currentID}`);
        currentColorMenu.classList.toggle('color-menu--hidden');
    };
}

//************ event handlers on all color-change buttons ************
let colorChangeButtons = document.querySelectorAll('.color-btn');
for (let i = 0; i < colorChangeButtons.length; i++) {
    colorChangeButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentColorSetter = this.id.split('-')[0];
        let currentCheckArea = document.getElementById(`check_area-${currentID}`);

        switch (currentColorSetter) {
            case 'color_btn_red':
                currentCheckArea.classList.value = "check-area check-area--red";
                break;
            case 'color_btn_green':
                currentCheckArea.classList.value = "check-area check-area--green";
                break;
            case 'color_btn_yellow':
                currentCheckArea.classList.value = "check-area check-area--yellow";
                break;
            case 'color_btn_none':
                currentCheckArea.classList.value = "check-area";
                break;
        }
    };
}

//************ event handlers on all check boxes ************
let checkBoxes = document.querySelectorAll('.check-box');
for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].onclick = function(){
       this.classList.toggle('check-box--checked');

       let currentID = this.id.split('-')[1];
       let currentTextArea = document.getElementById(`text_area-${currentID}`);

       currentTextArea.toggleAttribute('readonly');
    };   
}

//************ event handlers on main ADD button ************
let mainBtn = document.getElementById('main-btn');
mainBtn.onclick = function(){

    // localStorage.counter++;

    let list = document.getElementById('list');
    let elem = createListItem(listArr[3]);

    // addEventListenersOnItem(listArr[3]);

    list.appendChild(elem);
};




//******************** localStorage setup ********************
//************************************************************

// if(!localStorage.counter){
//  localStorage.counter = 0;
// }

// if (!localStorage.toDo){
//     localStorage.toDo = [0,1,2];
// }

//array example
let listArr = [
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
        color: 'red',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia',
        checked: true
    },
    {
        id: 4,
        order: 4,
        color: 'none',
        content: 'Всего три слова',
        checked: false
    }
];


// console.log(createListItem(listArr[0]));
