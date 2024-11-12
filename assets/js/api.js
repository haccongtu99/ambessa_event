export class Api {
  API_KEY = 'RGAPI-6c3d4de8-299f-4096-b33f-299de933b995';
  async get(url) {
    const newUrl = url + `?api_key=${this.API_KEY}`;
    try {
      return fetch(newUrl, {
        mode: 'cors',
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          // 'X-Riot-Token': this.API_KEY,
        },
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