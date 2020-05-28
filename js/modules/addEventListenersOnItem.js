'use strict';

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
    };


    //************ event handler on context-menu-delete button ************
    let deleteButton = document.getElementById(`context_btn_del-${id}`);
    deleteButton.onclick = function(){

        let currentItem = document.getElementById(`item-${id}`);
        currentItem.parentNode.removeChild(currentItem);
    };
    

    //************ event handler on context-menu-down button ************
    let downButton = document.getElementById(`context_btn_down-${id}`);
    downButton.onclick = function(){

        let currentItem = document.getElementById(`item-${id}`);

        let items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            if (items[i].style.order === String(+currentItem.style.order + 1)) {
                [currentItem.style.order, items[i].style.order] = 
                [items[i].style.order, currentItem.style.order]; // swap values <-->
                break;
            } 
        }
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



export {addEventListenersOnItem};