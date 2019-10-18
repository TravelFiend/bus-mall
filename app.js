import ProductArray from './src/prodArray.js';
import productData from './data/products.js';
import { renderLines } from './src/utils.js';
import { makeChart } from './results/results.js';

const productArray = new ProductArray(productData);
const myRadios = document.querySelectorAll('input');
const images = document.getElementById('images');
const main = document.querySelector('main');
const canvas = document.querySelector('canvas');

export let countsArray = [];
let triesLeft = 25;

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
            canvas.classList.remove('hidden');
            main.classList.add('hidden');
            renderLines();
            makeChart(countsArray);
        }
    });
});
