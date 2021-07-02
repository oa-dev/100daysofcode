class Calculator {
  constructor(display, buttons) {
    this.display = display;
    this.buttons = buttons;

    this.buttons.addEventListener("click", this.handleButtonClick);
    this.sum = "";
    this.operator = "";
    this.currentNumber = "";
    this.previousNumber = "";
  }

  calculate = () => {
    this.sum = this.previousNumber
      .concat(this.operator)
      .concat(this.currentNumber);
    console.log(this.sum);
    return new Function(`return ${this.sum};`)();
  };

  handleNumber = (value) => {
    if (this.previousNumber) {
      this.display.textContent = "".concat(this.currentNumber);
    }
    this.display.textContent += value;
    this.currentNumber += value;
  };

  displayCalculation = () => {
    this.currentNumber = this.calculate().toString();
    this.display.textContent = this.currentNumber;
  };

  handleOperator = (operator) => {
    const operators = {
      ["+"]: "+",
      ["−"]: "-",
      ["÷"]: "/",
      ["×"]: "*",
    };

    if (this.previousNumber) {
      this.displayCalculation();
    }

    this.operator = operators[operator];
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
    if (this.previousNumber) {
      this.display.textContent = this.previousNumber;
    }
  };

  handleButtonClick = (e) => {
    for (let item of e.target.classList) {
      if (item === "number") {
        this.handleNumber(e.target.textContent);
      } else if (item === "operator") {
        this.handleOperator(e.target.textContent);
      } else if (item === "equals") {
        this.display.textContent = this.calculate();
      }
    }
  };
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

const calculator = new Calculator(display, buttons);
