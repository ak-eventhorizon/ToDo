'use strict';

let btn = document.getElementById('menu_btn-1');

btn.onclick = function(event){
    console.log(event);
    console.log(this);
    console.log(this.id.split('-')[1]); // tag id num
};




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