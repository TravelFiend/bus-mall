// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('should return 3 images with no duplicates', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const a = 1;
    const b = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = a + b;
    //Assert
    // Make assertions about what is expected valid result

    assert.equal(result, 4);
});
