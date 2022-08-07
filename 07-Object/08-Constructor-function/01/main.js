function Calculator() {
    this.num1 = 0;
    this.num2 = 0;
    this.read = function () {
        let value1 = +prompt("Enter value1")
        let value2 = +prompt("Enter value2")

        this.num1=value1;
        this.num2=value2;
    }

    this.sum = function () {
        return this.num1+this.num2;
    }

    this.mul = function () {
        return this.num1*this.num2;
    }

}

const calculator = new Calculator();
calculator.read()
console.log(calculator.sum())
console.log(calculator)

