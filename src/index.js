import {App} from './components/app/app.js';
import {Network} from './modules/network.js';

const element = document.querySelector('#chat');
const network = new Network();

const store = {
    el: element,
    data: {
        stack: []
    }
};

network.getMessages().then((body) => {
    store.data.stack = body;
    return store;
}).then((store) => {
    const application = new App(store);
    application.run();
});