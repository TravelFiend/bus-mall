export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * 20)];
        return randomProduct;
    }
}