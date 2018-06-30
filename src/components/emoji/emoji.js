import "./emoji.css";

export class Emoji {
  constructor({ el, parent }) {
    this.el = el;
    this.parent = parent;
  }

  render() {
    this.el.classList.add("chat-controls-buttons__smiles");
    this.el.innerHTML = `
      <img src="../src/assets/img/smile.png">
        <div class="chat-controls-buttons__smiles-menu">
          <div class="chat-controls-buttons__smile" data-emoji>😑</div>
          <div class="chat-controls-buttons__smile" data-emoji>😕</div>
          <div class="chat-controls-buttons__smile" data-emoji>😊</div>
          <div class="chat-controls-buttons__smile" data-emoji>😎</div>
          <div class="chat-controls-buttons__smile" data-emoji>💪</div>
        </div>
    `;
    const emoji = this.parent.querySelector(".emoji");
    emoji.append(this.el);
  }

  init() {
    const textArea = this.parent.querySelector(".chat-controls__textarea");
    const dataEmoji = this.el.querySelectorAll("[data-emoji]");
    dataEmoji.forEach(item =>
      item.addEventListener("click", function() {
        textArea.innerHTML += this.innerHTML;
      })
    );
  }
}
