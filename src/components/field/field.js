import { EventEmitter } from "modules/emitter";
import "./field.css";

export class Field extends EventEmitter {
  constructor({ el }) {
    super();
    this.el = el;
    this.init();
  }

  render() {
    this.el.classList.add("chat-controls");
    this.el.innerHTML = `
      <form>
        <div contenteditable="true" class="chat-controls__textarea" placeholder="Type a message"></div>
        <div class="chat-controls-buttons">
          <input type="submit" value="Send" class="chat-controls-buttons__send">
          <div class="spinner"></div>
          <div class="chat-controls-buttons-wrapper">
            <div class="emoji"></div>
            <div class="files"></div>
          </div>
        </div>
      </form>
    `;
  }

  init() {
    this.el.addEventListener("submit", this.onSubmit.bind(this));
  }

  onSubmit(evt) {
    evt.preventDefault();
    const getMsg = evt.target.querySelector(".chat-controls__textarea");
    this.msg = getMsg.innerHTML;
    if (this.msg.indexOf("message__newImg") === -1) {
      this.msg = getMsg.textContent.trim().replace(/<\/?[^>]+>/g, "");
    }
    if (this.msg !== "") {
      const event = new Event(Field.MSG_SEND_EVENT, {
        bubbles: true
      });
      this.emit(event);
    }
    getMsg.innerHTML = "";
  }
}

Field.MSG_SEND_EVENT = "message:send";
