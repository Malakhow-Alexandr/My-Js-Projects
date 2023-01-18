export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImg() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '32942514-6053626dad09aaaa042cf88b1'
    
    return fetch(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image-type=all&page=${this.page}&per_page=10`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.incrementPage()
        return data.hits;
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

