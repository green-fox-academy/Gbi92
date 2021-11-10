'use strict';

const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

kids.forEach(kid => {
    let kidArticle = document.createElement('article');

    let heading = document.createElement('h3');
    heading.textContent = kid.owner;
    kidArticle.appendChild(heading);

    let paragraph = document.createElement('p');
    paragraph.textContent = kid.petName;
    kidArticle.appendChild(paragraph);
    
    document.querySelector('main').appendChild(kidArticle);
})