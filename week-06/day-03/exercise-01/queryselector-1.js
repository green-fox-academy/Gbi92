'use strict';

//1.
const king = document.getElementById('b325');
console.log(king);

//2.
const businessLamp = document.getElementsByClassName('big');
for (let i = 0; i < businessLamp.length; i++) {    
    console.log(businessLamp[i]);
}

//3.
const conceitedKing = document.querySelectorAll('.container .asteroid');
conceitedKing.forEach(el => alert(el.innerHTML));

//4.
const noBusiness = document.querySelectorAll('div.asteroid');
noBusiness.forEach(el => console.log(el));