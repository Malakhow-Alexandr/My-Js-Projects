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
  console.log('wtf?')
  newsApiService.fetchArticles(appendArticlesMarkup);
}

function renderArticleMarkup(arr) {
  return arr
    .map(
      ({ author, title, description, url, urlToImage }) => `<li class="article__item">
  <a class="article__link" href="${url}" target="_blank" rel="noopener noreferrer">
    <article>
      <img class="article__img" src="${urlToImage}" alt="${description}" width="240" height="140"/>
      <h2 class="article__title">${title}</h2>
      <p class="article__author">Posted by: ${author}</p>
      <p class="article__description">${description}</p>
    </article>
  </a>
  </li>
  `)
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
