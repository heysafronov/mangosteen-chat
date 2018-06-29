import './messages.css';

export class Messages {
    constructor({el, data}) {
        this.el = el;
        this.data = data;
        this.arr = [];
    }

    template(data) {
        for (let a = 0; a < data.stack.length; a++) {
            if (data.stack[a].type === 'me') {
                this.arr.push(`<div class="chat-item chat-item-me">
                    <img class="chat-item__img" src="${this.data.stack[a].avatar}" alt="avatar">
                        <div class="message">
                            <span class="message__user-name">${this.data.stack[a].author}</span>
                            <i class="fa fa-clock-o"></i>
                            <time class="message__time">${this.data.stack[a].time}</time>
                            <p class="message__text">${this.data.stack[a].msg}</p>
                        </div>
                     </div>`)
            }
            if (data.stack[a].type === 'other') {
                this.arr.push(`<div class="chat-item chat-item-other">
                        <div class="message">
                            <span class="message__user-name">${this.data.stack[a].author}</span>
                            <i class="fa fa-clock-o"></i>
                            <time class="message__time">${this.data.stack[a].time}</time>
                            <p class="message__text">${this.data.stack[a].msg}</p>
                        </div>
                        <img class="chat-item__img" src="${this.data.stack[a].avatar}" alt="avatar">
                     </div>`)
            }
        }
        return this.arr.join('');
    };

    render() {
        this.el.classList.add('chat-history');
        this.el.innerHTML = this.template(this.data);
    }
}