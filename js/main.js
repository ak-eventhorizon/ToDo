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

//************ event handlers on all context-menu-color buttons ************

let colorButtons = document.querySelectorAll('.context-btn--color');

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].onclick = function(){

        let currentID = this.id.split('-')[1];
        let currentColorMenu = document.getElementById(`color_menu-${currentID}`);
        currentColorMenu.classList.toggle('color-menu--hidden');
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