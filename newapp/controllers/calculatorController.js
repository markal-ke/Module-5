
const Calculator = require('../libraries/Calculator')
let calc = new Calculator()

const addNumbers = (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = calc.add(number1, number2)
res.status(200)
res.json({result:sum})
}


const subtractNumbers = (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let difference = calc.subtract(number1, number2)

res.status(200)
res.json({result:difference})
}



const multiplyNumbers = (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let product = calc.multiply(number1, number2)

console.log(product)
res.status(200)
res.json({result:product})
}

const divideNumbers = (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let quotient = calc.divide(number1, number2)

console.log(quotient)
res.status(200)
res.json({result:quotient})
}


module.exports = {
addNumbers,
subtractNumbers,
multiplyNumbers,
divideNumbers
}
