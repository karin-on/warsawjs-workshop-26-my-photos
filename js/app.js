import image1 from '/images/confront.png';
import image2 from '/images/warsawjs.png';
import {Image} from "./image";



let imagesPaths = [image1, image2];
const imagesGallery = document.getElementById('images');
const btnShowFavs = document.querySelector('#show-favourites');
const fileInput = document.querySelector('#file-input');


const imgItems = imagesPaths.map((el, gallery) => new Image(el, imagesGallery));
imgItems.forEach(el => el.show());

btnShowFavs.addEventListener('click', function () {
    imgItems
        .filter(el => !el.isFav())
        .forEach(el => el.hide());
});


fileInput.addEventListener('change', function () {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // dodajemy e.target.result
            imagesPaths.push(e.target.result);
            let newImage = new Image(e.target.result, imagesGallery);
            newImage.show();
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});




//------------------------- FETCH ----------------------

fetch('http://localhost:3000/photos')
    .then(response => response.json())
    .then(images => {
        let imagesPaths2 = [];
        images.forEach(el => imagesPaths2.push(el.url));

        let imgItems2 = imagesPaths2.map((el, gallery) => new Image(el, imagesGallery));
        imgItems2.forEach(el => el.show());

        btnShowFavs.addEventListener('click', function () {
            imgItems2
                .filter(el => !el.isFav())
                .forEach(el => el.hide());
        });

    });






