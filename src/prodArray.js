import { countsArray } from '../app.js';
import { findById } from './utils.js';

const myRadios = document.querySelectorAll('input');
const imageSlots = document.querySelectorAll('img');

export default class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * 20)];
        return randomProduct;
    }

    randomPicGenerator() {
        const randomProduct1 = this.getRandomProduct();
        let randomProduct2 = this.getRandomProduct();

        while (randomProduct2 === randomProduct1) {
            randomProduct2 = this.getRandomProduct();
        }

        let randomProduct3 = this.getRandomProduct();

        while ((randomProduct3 === randomProduct1) || (randomProduct3 === randomProduct2)) {
            randomProduct3 = this.getRandomProduct();
        }
        imageSlots.forEach((image, i) => {
            if (i === 0) {
                image.src = randomProduct1.image;
                myRadios[0].value = randomProduct1.id;
                const found = findById(countsArray, randomProduct1.id);
                if (found) {
                    found.showCount++;
                    return;
                }
                countsArray.push({
                    id: randomProduct1.id,
                    showCount: 1,
                    clickCount: 0
                });
            } else if (i === 1) {
                image.src = randomProduct2.image;
                myRadios[1].value = randomProduct2.id;
                const found = findById(countsArray, randomProduct2.id);
                console.log(found);
                if (found === null) {
                    countsArray.push({
                        id: randomProduct2.id,
                        showCount: 1,
                        clickCount: 0
                    });
                } else {
                    found.showCount++;
                    return;
                }
            } else if (i === 2) {
                image.src = randomProduct3.image;
                myRadios[2].value = randomProduct3.id;
                const found = findById(countsArray, randomProduct3.id);
                if (found) {
                    found.showCount++;
                    return;
                }
                countsArray.push({
                    id: randomProduct3.id,
                    showCount: 1,
                    clickCount: 0
                });
            }
        });
    }
}