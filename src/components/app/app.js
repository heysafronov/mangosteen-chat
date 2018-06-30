import { Chat } from "components/chat/chat";
import { Field } from "components/field/field";
import { Spinner } from "components/spinner/spinner";
import { Emoji } from "components/emoji/emoji";
import { Files } from "components/files/files";
import { Message } from "components/message/message";
import { Messages } from "components/messages/messages";
import "assets/reset/reset.min.css";
import "assets/fonts/fonts.css";
import "./app.css";

export class App {
  constructor({ el, data }) {
    this.el = el;
    this.chat = new Chat({
      el: document.createElement("div")
    });
    this.field = new Field({
      el: document.createElement("div")
    });
    this.field.subscribe(Field.MSG_SEND_EVENT, () => {
      this.message.render();
      this.messages.el.append(this.message.el);
      this.message.scroll();
    });
    this.spinner = new Spinner({
      el: document.createElement("div"),
      parent: this.field.el
    });
    this.emoji = new Emoji({
      el: document.createElement("div"),
      parent: this.field.el
    });
    this.files = new Files({
      el: document.createElement("div"),
      parent: this.field.el
    });
    this.message = new Message({
      el: document.createElement("div"),
      msg: this.field
    });
    this.messages = new Messages({
      el: document.createElement("div"),
      data: {
        stack: data.stack
      }
    });
  }

  render() {
    this.chat.render();
    this.messages.render();
    this.field.render();
    this.spinner.render();
    this.emoji.render();
    this.files.render();
    this.el.append(this.chat.el);
    this.chat.el.append(this.messages.el, this.field.el);
  }

  init() {
    this.spinner.init();
    this.emoji.init();
    this.files.init();
  }

  run() {
    this.render();
    this.init();
  }
}
