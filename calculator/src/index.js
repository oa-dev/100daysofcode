class Calculator {
  constructor(display, buttons) {
    this.display = display;
    this.buttons = buttons;

    this.display.addEventListener("input", this.handleDisplay);
  }

  handleDisplay = (e) => {
    const value = e.target.value;
  };
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

const calculator = new Calculator(display, buttons);
