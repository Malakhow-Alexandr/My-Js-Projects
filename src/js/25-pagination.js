import BSN from 'bootstrap.native';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from './25-Fetch-Api-class';
import LoadMoreBtn from './25-load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  imagesContainer: document.querySelector('.js-images-container'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.showBtn.addEventListener('click', fetchImages);

function onSearch(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.query.value;

  newsApiService.query = inputValue;

  if (!inputValue.trim()) {
    Notify.failure('Please enter somthing to search!');
    return;
  }

  clearImgContainer();

  loadMoreBtn.show();

  newsApiService.resetPage();

  fetchImages();
}

function renderImgMarkup(arr) {
  return arr
    .map(
      ({ largeImageURL: img, tags }) => `<li class="images__item">
      <img class="images__picture" src="${img}" alt="${tags}" width="240" height="140"/>
  </li>
  `
    )
    .join('');
}

function fetchImages() {
  loadMoreBtn.disable();
  newsApiService.fetchImg().then(data => {
    if (data.length === 0) {
      Notify.failure('Nothing found for your request!');
      loadMoreBtn.hide();
      return;
    }
    appendImgMarkup(data);
    loadMoreBtn.enable();
  });
}

function appendImgMarkup(images) {
  refs.imagesContainer.insertAdjacentHTML('beforeend', renderImgMarkup(images));
}

function clearImgContainer() {
  refs.imagesContainer.innerHTML = '';
}
