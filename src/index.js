import { App } from "components/app/app";
import { Network } from "modules/network";

const element = document.querySelector("#chat");
const network = new Network("https://mangosteen-chat.firebaseio.com/chat.json");

const store = {
  el: element,
  data: {
    stack: []
  }
};

network
  .getMessages()
  .then(body => {
    store.data.stack = body;
    return store;
  })
  .then(store => {
    const application = new App(store);
    application.run();
  });
