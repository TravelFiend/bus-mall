import ProductArray from './src/prodArray.js';
import productData from './data/products.js';
import { renderLines, makeTotalsStorage, getResults, addToTotals, setResults } from './src/utils.js';
import { makeChart } from './results/results.js';

const productArray = new ProductArray(productData);
const myRadios = document.querySelectorAll('input');
const images = document.getElementById('images');
const main = document.querySelector('main');
const canvas = document.querySelector('canvas');
const linkButton = document.querySelector('a');

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
            linkButton.classList.remove('hidden');
            renderLines();
            makeChart(countsArray);
            let localTotals = getResults();
            if (!localTotals){
                makeTotalsStorage(countsArray);
                localTotals = getResults();
            }
            addToTotals(localTotals, countsArray);
            setResults(localTotals);
        }
    });
});



// check if local storage info exists '''checked'''

// if not, set local storage to (totals, counts array) '''checked'''

// else add to existing