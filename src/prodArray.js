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
        // let pastPics = JSON.parse(localStorage.getItem('pastPics'));
        
        // pastPics.forEach(oldPic => {
        //     this.products.push(oldPic);
        // });

        let randomProduct1 = this.getRandomProduct();
        
        let randomProduct2 = this.getRandomProduct();
        while (randomProduct2 === randomProduct1) {
            randomProduct2 = this.getRandomProduct();
        }

        let randomProduct3 = this.getRandomProduct();
        while ((randomProduct3 === randomProduct1) || (randomProduct3 === randomProduct2)){
            randomProduct3 = this.getRandomProduct();
        }

        let currentArr = [randomProduct1, randomProduct2, randomProduct3];

        // for (let i = 0; i < this.products.length; i++){
        //     if ((this.products[i] === randomProduct1) || (this.products[i] === randomProduct2) || (this.products[i] === randomProduct3)) {
        //         this.products.splice(i, 1);
        //         // console.log(this.products[i]);
        //     }
        // }

        let jsonLast = JSON.stringify(currentArr);
        localStorage.setItem('pastPics', jsonLast);

        // if (pastPics && pastPics.length) {
        //     let newArr = currentArr.map(c => {
        //         let foundProduct = pastProduct.find(p => p === c);
        //         if (foundProduct && foundProduct.id) {
        //             return self.getRandomProduct();
        //         } else {
        //             return c;
        //         }
        //     });
        //     currentArr = newArr;
        //     console.log({NEW: currentArr});
        // }
        
        // if (pastPics) {
        //     currentArr = currentArr.map(currentPic => {
                // pastPics.map(oldPic => {
                //     // if found (copy), call getRandomProduct()
                //     if (currentPic === oldPic){
                //         currentPic = self.getRandomProduct();
                //         console.log(`New pic: ${currentPic.id}`);    not logging, going wrong here
                //     }
                //     // console.log(currentPic.id);
                //     return currentPic;
                // });
        //     });
        // }
        // console.log(currentArr);
        
        // let accum = [];
        // if (pastPics) {
        //     pastPics.forEach(oldPic => {
        //         currentArr.forEach(newPic => {
        //             while (oldPic === newPic) {
        //                 newPic = self.getRandomProduct();        not logging, going wrong here
        //             }
        //             console.log('no match')
        //         });
        //     });
        // }
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
                    clickCount: 0,
                    name: randomProduct1.name
                });
            } else if (i === 1) {
                image.src = randomProduct2.image;
                myRadios[1].value = randomProduct2.id;
                const found = findById(countsArray, randomProduct2.id);
                if (found) {
                    found.showCount++;
                    return;
                }
                countsArray.push({
                    id: randomProduct2.id,
                    showCount: 1,
                    clickCount: 0,
                    name: randomProduct2.name
                });
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
                    clickCount: 0,
                    name: randomProduct3.name
                });
            }
        });
    }
}
