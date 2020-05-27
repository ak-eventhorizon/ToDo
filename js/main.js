'use strict';

//************ event handlers on all menu buttons ************

let menuButtons = document.querySelectorAll('.menu-btn');

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].onclick = function(event){

        this.classList.toggle('menu-btn--clicked');

        let currentID = this.id.split('-')[1]; //tag id num

        let currentContextMenu = document.getElementById(`context_menu-${currentID}`);
        currentContextMenu.classList.toggle('context-menu--hidden');

        //отключение меню выбора цвета, если оно включено
        let currentColorMenu = document.getElementById(`color_menu-${currentID}`);
        if(!currentColorMenu.classList.contains('color-menu--hidden')){
            currentColorMenu.classList.toggle('color-menu--hidden');
        }

        console.log(event);
        console.log(this);
        console.log(this.id.split('-')[1]);
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


// order change - document.getElementById("myRedDIV").style.order = "4";