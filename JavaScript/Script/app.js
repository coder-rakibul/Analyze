// Sub: Object
"use strict";
let oneAtriv = document.querySelector('.one');
let twoAtriv = document.querySelector('.two');

oneAtriv.addEventListener('click', function(){
    twoAtriv.style.display = "none"
});
twoAtriv.addEventListener('click', function(){
    oneAtriv.style.display = "none"
});