import ProductArray from './src/prodArray.js';
import productData from './data/products.js';

const productArray = new ProductArray(productData);
const myRadios = document.querySelectorAll('input');
const images = document.getElementById('images');

export let countsArray = [];
let triesLeft = 25;

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
        triesLeft--;
        if (triesLeft === 0) {
            images.classList.add('hidden');
        }
    });
});

