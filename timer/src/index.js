class Timer {
  constructor(timerInput) {
    this.timerInput = timerInput;

    this.timerInput.addEventListener("keydown", this.handleKeydown);
    document.body.addEventListener("keydown", this.handlePause);
  }

  intervalID;

  startTimer = () => {
    document.querySelector(".container").focus();

    const intervalID = setInterval(() => {
      this.timerInput.value -= 1;

      if (this.timerInput.value <= 0) {
        clearInterval(intervalID);
        this.timerInput.value = 0;
      }
    }, 1000);

    this.intervalID = intervalID;
  };

  pauseTimer = () => {
    this.timerInput.focus();
    clearInterval(this.intervalID);
  };

  clearTimer = () => {
    this.timerInput.focus();
    clearInterval(this.intervalID);
    this.timerInput.value = 0;
  };

  editTimer = () => {
    this.timerInput.focus();
    clearInterval(this.intervalID);
  };

  handleKeydown = (e) => {
    const keyCode = e.keyCode;

    switch (keyCode) {
      case 13: // enter
        this.startTimer();
        break;
      default:
        break;
    }
  };

  handlePause = (e) => {
    const keyCode = e.keyCode;

    switch (keyCode) {
      case 32: // space
        this.pauseTimer();
        break;
      case 8: // delete
        if (e.ctrlKey) {
          this.clearTimer();
        } else {
          this.editTimer();
        }
        break;
    }
  };
}

const timerInput = document.querySelector(".timer");

const timer = new Timer(timerInput);
