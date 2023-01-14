export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const BASE_URL = 'https://newsapi.org/v2/everything/';
    const options = {
      headers: {
        Authorization: 'b55255e13e7549a6a39768fc375a1a1a',
      },
    };
    return fetch(
      `${BASE_URL}?q=${this.searchQuery}&language=en&page=${this.page}&pageSize=5`,
      options
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.incrementPage()
        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
