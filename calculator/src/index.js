class Calculator {
  constructor(display, buttons) {
    this.display = display;
    this.buttons = buttons;

    this.display.addEventListener("input", this.handleDisplay);
    this.buttons.addEventListener("click", this.handleButtonClick);
    this.sum = "";
  }

  handleDisplay = (e) => {
    const value = e.target.value;
  };

  setDisplay = (textContent) => {
    this.display.textContent += textContent;
    this.sum += textContent;
  };

  handleOperator = (operator) => {
    const operators = {
      ["+"]: "+",
      ["−"]: "-",
      ["÷"]: "/",
      ["×"]: "*",
    };
    this.sum += operators[operator];
  };

  calculate = (value) => {
    return Function(`"use strict";return ${value}`)();
  };

  handleButtonClick = (e) => {
    for (let item of e.target.classList) {
      if (item === "number") {
        this.setDisplay(e.target.textContent);
      } else if (item === "operator") {
        this.handleOperator(e.target.textContent);
      } else if (item === "equals") {
        console.log(this.calculate(this.sum));
      }
    }
  };
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

const calculator = new Calculator(display, buttons);
