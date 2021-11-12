'use strict';

let currentPhoto = 0;

let imagesData = [
    {
        photo: './images/img0.jpg',
        title: 'Lago di Braies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        photo: './images/img1.jpg',
        title: 'Sunset in the Mountains',
        description: 'Diam sollicitudin tempor id eu nisl. Congue quisque egestas diam in.'
    },
    {
        photo: './images/img2.jpg',
        title: 'Sunrise',
        description: 'Nibh venenatis cras sed felis eget. Sit amet purus gravida quis.'    
    },
    {
        photo: './images/img3.jpg',
        title: 'Sunset on the Canal',
        description: 'Dignissim enim sit amet venenatis urna cursus eget nunc. Nibh ipsum consequat nisl vel.'
    },
    {
        photo: './images/img4.jpg',
        title: 'Bridge to Where the Wild Things Are',
        description: 'Nunc id cursus metus aliquam eleifend mi. Pellentesque habitant morbi tristique senectus.'
    },
    {
        photo: './images/img5.jpg',
        title: 'Poppy field',
        description: 'Porta non pulvinar neque laoreet suspendisse. Amet tellus cras adipiscing enim.'
    },
    {
        photo: './images/img6.jpg',
        title: 'Hay field',
        description: 'Placerat duis ultricies lacus sed turpis tincidunt id. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.'
    },
    {
        photo: './images/img7.jpg',
        title: 'A Walk in the Snow',
        description: 'Fringilla phasellus faucibus scelerisque eleifend donec pretium. Non nisi est sit amet facilisis.'
    }
];

const photo = document.querySelector('.chosen-photo');
const photoTitle = document.querySelector('.title');
const photoDescr = document.querySelector('.description');

function loadPhoto(photoNumber) {
  photo.setAttribute('src', imagesData[photoNumber].photo);
  photoTitle.textContent = imagesData[photoNumber].title;
  photoDescr.textContent = imagesData[photoNumber].description;
}

loadPhoto(currentPhoto);

const rightArrow = document.querySelector('.nav-right');
const leftArrow = document.querySelector('.nav-left');

leftArrow.onclick = () => {  
    if(currentPhoto == 0 ){
        currentPhoto = imagesData.length-1;
        loadPhoto(currentPhoto);
    }else{
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
};

rightArrow.onclick = () => {  
    if(currentPhoto < imagesData.length-1) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }else{
        currentPhoto = 0
        loadPhoto(currentPhoto);
    }
};

const thumbContainer = document.querySelector('#thumbnail-container');
const thumbBox = document.querySelector('.thumbnail');

let thumbnailIndex = 0;

for (let i = 0; i < imagesData.length; i++) {
    const thumbBox = document.createElement('div');
    thumbBox.setAttribute('class', 'thumbnail');

    const thumbTitle = document.createElement('p');
    thumbTitle.setAttribute('class', 'thumb-title');
    thumbTitle.innerText = imagesData[i].title;

    const thumbPhoto = document.createElement('img');
    thumbPhoto.setAttribute('class', 'thumbImage');
    thumbPhoto.setAttribute('src', imagesData[i].photo);
    thumbPhoto.setAttribute('data-number', thumbnailIndex);

    thumbContainer.appendChild(thumbBox);
    thumbBox.appendChild(thumbTitle);
    thumbBox.appendChild(thumbPhoto);

    thumbnailIndex++;
}

// thumbBox.onclick = (event) => {
//     let index = parseInt($(event.target).attr('data-number'));
//     loadPhoto(index);
//     currentPhoto = index;
// };