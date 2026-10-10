const { square } = require('./square');
const { squareRoot } = require('./square');


test('square 5 to get 25', () => {
expect(square(5)).toBe(25);
});

test('squareRoot of 25 to get 5', () => {
expect(squareRoot(25)).toBe(5);
});