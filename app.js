import { ProductArray } from './src/functions.js';
import productData from './data/products.js';

const productArray = new ProductArray(productData);
const imageSlots = document.querySelectorAll('img');

// get 3 differing image sources
const randomProductSrc1 = productArray.getRandomProduct().image;
let randomProductSrc2 = productArray.getRandomProduct().image;
while (randomProductSrc2 === randomProductSrc1){
    randomProductSrc2 = productArray.getRandomProduct().image;
}
let randomProductSrc3 = productArray.getRandomProduct().image;
while (randomProductSrc3 === randomProductSrc1 || randomProductSrc3 === randomProductSrc2){
    randomProductSrc3 = productArray.getRandomProduct().image;
}

// generate 3 differing random images on page
imageSlots.forEach((slot, i) => {
    if (i === 0){
        slot.src = randomProductSrc1;
    } else if (i === 1) {
        slot.src = randomProductSrc2;
    } else if (i === 2) {
        slot.src = randomProductSrc3;
    }
});