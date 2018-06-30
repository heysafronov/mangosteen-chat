export class Network {
  constructor(url) {
    this.url = url;
  }

  getMessages() {
    return fetch(this.url)
      .then(response => {
        if (response.status !== 200) {
          console.error(
            `Looks like there was a problem. Status Code: ${response.status}`
          );
          return;
        }
        return response.json();
      })
      .then(body => {
        return body;
      });
  }
}
