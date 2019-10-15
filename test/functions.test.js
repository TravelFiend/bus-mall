// IMPORT MODULES under test here:
// import example from '../src/example.js';
import productData from '../data/products.js';
 

const test = QUnit.test;

test('should return 3 images with no duplicates', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const products = productData;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = threeImages(products, );
    //Assert
    // Make assertions about what is expected valid result

    assert.equal(true, false);
});
