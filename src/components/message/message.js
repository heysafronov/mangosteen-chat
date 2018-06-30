export class Message {
  constructor({ el, msg }) {
    this.el = el;
    this.msg = msg;
    this.optionsDate = {
      hour: "numeric",
      minute: "numeric",
      hour12: false
    };
    this.obj = {
      type: "me",
      author: "Mark Bennington",
      time: `${new Date().toLocaleString(
        "en-US",
        this.optionsDate
      )}`,
      avatar: "../src/assets/img/mark.png"
    };
  }

  template() {
    return `
      <div class="chat-item chat-item-me">
        <img class="chat-item__img" src="${this.obj.avatar}" alt="avatar">
        <div class="message">
          <span class="message__user-name">${this.obj.author}</span>
          <i class="fa fa-clock-o"></i>
          <time class="message__time">${this.obj.time}</time>
          <p class="message__text">${this.msg.msg}</p>
        </div>
      </div>
    `;
  }

  render() {
    this.el.innerHTML += this.template();
  }

  scroll() {
    this.el.scrollIntoView(false);
  }
}
