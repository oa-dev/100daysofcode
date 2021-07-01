class Timer {
  constructor(timerInput) {
    this.timerInput = timerInput;

    this.timerInput.addEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // remove event listener for enter
      this.timerInput.removeEventListener("keydown", this.handleKeydown);

      const value = parseFloat(e.target.value);

      const intervalID = setInterval(() => {
        this.timerInput.value -= 1;
        if (this.timerInput.value <= 0) {
          clearInterval(intervalID);
          this.timerInput.value = 0;

          // add event listener for enter
          this.timerInput.addEventListener("keydown", this.handleKeydown);
        }
      }, 1000);
    }
  };
}

const timerInput = document.querySelector(".timer");

const timer = new Timer(timerInput);
