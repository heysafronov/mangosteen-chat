export {Network};

class Network {
    constructor() {
        this.url = 'https://mangosteen-chat.firebaseio.com/chat.json';
    }

    getMessages() {
        return fetch(this.url)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                    return;
                }
                return response.json();
            })
            .then(body => {
                return body;
            })
    }
}