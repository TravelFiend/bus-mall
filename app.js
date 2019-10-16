import { ProductArray } from './src/functions.js';
import productData from './data/products.js';

const productArray = new ProductArray(productData);
const imageSlots = document.querySelectorAll('img');
const myRadios = document.querySelectorAll('input');
let countsArray = [];

// get 3 differing image sources

const randomPicGenerator = () => {
    const randomProduct1 = productArray.getRandomProduct();
    let randomProduct2 = productArray.getRandomProduct();

    while (randomProduct2.id === randomProduct1.id) {
        randomProduct2 = productArray.getRandomProduct();
    }

    let randomProduct3 = productArray.getRandomProduct();

    while ((randomProduct3.id === randomProduct1.id) || (randomProduct3.id === randomProduct2.id)) {
        randomProduct3 = productArray.getRandomProduct();
    }
    imageSlots.forEach((image, i) => {
        if (i === 0) {
            image.src = randomProduct1.image;
            myRadios[0].value = randomProduct1.id;
        } else if (i === 1) {
            image.src = randomProduct2.image;
            myRadios[1].value = randomProduct2.id;
        } else if (i === 2) {
            image.src = randomProduct3.image;
            myRadios[2].value = randomProduct3.id;
        }
    });
};

randomPicGenerator();

console.log(imageSlots[0], imageSlots[1], imageSlots[2]);

// check if items are already present in array

// if so, then increment display count and selected count (if selected)

// if not, add the object to the array
