// app.test.js
// import supertest and the express app
const request = require('supertest');
const app = require('./app');
describe('Calculator Routes', () => {

    
// generate some random numbers to test the calculator
let number1 = Math.floor(Math.random() * 1_000_000);
let number2 = Math.floor(Math.random() * 1_000_000);
test('GET /calculator/add => sum of numbers', () => {
return request(app)


.get(`/calculator/add?num1=${number1}&num2=${number2}`)
.expect('Content-Type', /json/)
.expect(200)
.then((response) => {
expect(response.body).toEqual({
result: (number1 + number2)
});
});
});
});

let number1 = Math.floor(Math.random() * 1_000_000);
let number2 = Math.floor(Math.random() * 1_000_000);
test('GET /calculator/subtract => difference of numbers', () => {
return request(app)
.get(`/calculator/sub?num1=${number1}&num2=${number2}`)
.expect('Content-Type', /json/)
.expect(200)
.then((response) => {
expect(response.body).toEqual({
result: (number1 - number2)
});
});
});


let number3 = Math.floor(Math.random() * 1_000_000);
let number4 = Math.floor(Math.random() * 1_000_000);
test('GET /calculator/multiply => product of numbers', () => {
return request(app)
.get(`/calculator/mult?num1=${number3}&num2=${number4}`)
.expect('Content-Type', /json/)
.expect(200)
.then((response) => {
expect(response.body).toEqual({
result: (number3 * number4)
});
});
});

test('GET /calculator/divide => quotient of numbers', () => {
let number5 = Math.floor(Math.random() * 1_000_000);
let number6 = Math.floor(Math.random() * 1_000_000);
return request(app)
.get(`/calculator/div?num1=${number5}&num2=${number6}`)
.expect('Content-Type', /json/)
.expect(200)
.then((response) => {
expect(response.body).toEqual({
result: (number5 / number6)
});
});
});

