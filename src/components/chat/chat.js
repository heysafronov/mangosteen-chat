import "./chat.css";

export class Chat {
  constructor({ el }) {
    this.el = el;
  }

  render() {
    this.el.classList.add("chat");
    this.el.innerHTML = `
      <div class="chat-header">
        <h1 class="chat-header__name">Mangosteen Chat</h1>
      </div>
    `;
  }
}
