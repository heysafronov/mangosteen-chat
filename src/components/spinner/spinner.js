import "./spinner.css";

export class Spinner {
  constructor({ el, parent }) {
    this.el = el;
    this.parent = parent;
  }

  render() {
    this.el.classList.add("spinner-loader__wrapper");
    const spinner = this.parent.querySelector(".spinner");
    spinner.append(this.el);
  }

  init() {
    const textArea = this.parent.querySelector(".chat-controls__textarea");
    const spinnerWrapper = this.parent.querySelector(
      ".spinner-loader__wrapper"
    );
    textArea.addEventListener("keypress", keyPress);

    function keyPress() {
      spinnerWrapper.classList.add("spinner-loader");
      setTimeout(keyUp, 3000);
    }

    function keyUp() {
      spinnerWrapper.classList.remove("spinner-loader");
    }
  }
}
