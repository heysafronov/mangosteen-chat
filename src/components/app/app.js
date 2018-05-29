import {Chat} from "../chat/chat.js";
import {Field} from "../field/field.js";
import {Message} from "../message/message.js";
import {Messages} from "../messages/messages.js";
import '../../../assets/reset/reset.min.css';
import '../../../assets/fonts/fonts.css';
import './app.css';
export {App};

class App {
    constructor({el, data}) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div')
        });
        this.field = new Field({
            el: document.createElement('div')
        });
        this.message = new Message({
            el: document.createElement('div'),
            msg: this.field
        });
        this.messages = new Messages({
            el: document.createElement('div'),
            data: {
                stack: data.stack
            }
        });
        this.field.subscribe(Field.MSG_SEND_EVENT, () => {
            this.message.render();
            this.messages.el.append(
                this.message.el
            );
            this.message.scroll();
        });
    }

    render() {
        this.chat.render();
        this.messages.render();
        this.field.render();
        this.el.append(
            this.chat.el
        );
        this.chat.el.append(
            this.messages.el,
            this.field.el
        );
    }

    init() {
        this.field.initEmoji();
        this.field.initFiles();
    }

    run() {
        this.render();
        this.init();
    }
}