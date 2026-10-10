const Log= require('./log');

class Calculator {
    constructor() {
        this.id = Math.random();
        this.log = new Log(this.id);
    }
    #log = (value) => {
        console.log(`[CalculatorAdd :${this.id}]:${value}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    };

    subtract(num1, num2) {
    const value = num1 - num2
    this.#log(value)
    return value;
};


    multiply(num1, num2) {
    const value = num1 * num2
    this.#log(value)
    return value;

};


    divide(num1, num2) {
    const value = num1 / num2
    this.#log(value)
    return value;
}
};


module.exports = Calculator; 