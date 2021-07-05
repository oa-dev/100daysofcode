const loadingBar_div = document.querySelector(".loading-bar");
const progress_div = document.createElement("div");
progress_div.classList.add("progress");
loadingBar_div.insertAdjacentElement("afterend", progress_div);

let width = 0;
let percent = (width / 90) * 100;

const load = () => {
  if (width > 90) {
    clearInterval(intervalID);
  } else {
    loadingBar_div.style.width = `${width}vw`;
    percent = (width / 90) * 100;
    progress();
    width++;
  }
};

const progress = () => {
  percent < 100
    ? (progress_div.textContent = `${Math.floor(
        percent
      )}% of nothing is loading!`)
    : (progress_div.textContent = `Loaded`);
};

const intervalID = setInterval(load, 50);
