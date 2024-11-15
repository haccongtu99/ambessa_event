export class Api {
  // Expired in 24 hours --> Need get new key for testing
  API_KEY = 'RGAPI-f66b6cab-807b-4818-b22c-15c39889dedd';
  async get(url) {
    const newUrl = url + `?api_key=${this.API_KEY}`;
    try {
      return fetch(newUrl, {
        mode: 'cors',
        header: {},
      })
        .then(res => res.json())
        .then(data => {
          return data;
        });
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  async post(url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers: {
        'X-Riot-Token': this.API_KEY,
      },
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
}