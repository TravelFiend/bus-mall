import ProductArray from './src/prodArray.js';
import productData from './data/products.js';

const productArray = new ProductArray(productData);
const myRadios = document.querySelectorAll('input');

export let countsArray = [];


// get 3 differing image sources

productArray.randomPicGenerator();

myRadios.forEach(radio => {
    radio.addEventListener('click', (event) => {
        countsArray.forEach(productObj => {
            if (event.target.value === productObj.id) {
                productObj.clickCount++;
            }
        });
        productArray.randomPicGenerator();
    });
});

console.log(countsArray);