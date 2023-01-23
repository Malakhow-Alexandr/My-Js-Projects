import axios from 'axios';

export default class SearchImgService {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
    this.per_page = 40;
  }

  async fetchImg() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '32942514-6053626dad09aaaa042cf88b1';
    const params = {
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      page: this.page,
      per_page: this.per_page,
      orientation: 'horizontal',
      safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });

    this.incrementPage();

    const {
      data,
      config: {
        params: { page, per_page },
      },
    } = response;
    
    return { data, page, per_page};
  }

  incrementPage() {
    this.page += 1;
  }
  incrementHits(hitsLength) {
    this.totalHits += hitsLength;
  }

  resetHits() {
    this.hits = 0;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
