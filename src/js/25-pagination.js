import BSN from 'bootstrap.native';
import NewsApiService from './25-Fetch-Api-class';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  newsApiService.query = event.currentTarget.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}
function onLoadMore() {
  newsApiService.fetchArticles(appendArticlesMarkup);
}

function renderArticleMarkup(arr) {
  return arr
    .map(
      ({ author, title, description, url, urlToImage }) => `<li>
  <a href="${url}" target="_blank" rel="noopener noreferrer">
    <article>
      <img src="${urlToImage}" alt="${description}" width="480" />
      <h2>${title}</h2>
      <p>Posted by: ${author}</p>
      <p>${description}</p>
    </article>
  </a>
  </li>
  `
    )
    .join('');
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    renderArticleMarkup(articles)
  );
}

function clearArticlesContainer(){
  refs.articlesContainer.innerHTML = '';
}
