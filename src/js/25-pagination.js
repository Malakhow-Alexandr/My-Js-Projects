import BSN from 'bootstrap.native';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchImgService from './25-Fetch-Api-class';
import LoadMoreBtn from './25-load-more-btn';
import renderImgMarkup from './25-Render-img-markup';
import smothScroll from './25-smothScroll';
import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// bug fix
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  guard: document.querySelector('.js-guard'),
};

const lightBox = new SimpleLightBox('.gallery div a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const searchImgService = new SearchImgService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.showBtn.addEventListener('click', fetchImages);

function onSearch(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.query.value;

  searchImgService.query = inputValue;

  if (!inputValue.trim()) {
    Notify.failure('Please enter somthing to search!');
    clearImgContainer();
    loadMoreBtn.hide();
    return;
  }

  clearImgContainer();

  loadMoreBtn.show();

  searchImgService.resetPage();

  fetchImages();
}

async function fetchImages() {
  loadMoreBtn.disable();
  try {
    const response = await searchImgService.fetchImg();

    const { data, page } = response;

    if (data.hits.length === 0) {
      Notify.failure('Nothing found for your request!');
      loadMoreBtn.hide();
      return;
    }

    appendImgMarkup(data.hits);

    if (page === 1) {
      if (data.totalHits === 500) {
        Notify.success(`Hooray! We found ${data.totalHits - 20} images.`);
      } else {
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
    }

    if (page > 1) {
      smothScroll();
    }

    const hitsLength = refs.gallery.children.length;

    if (hitsLength + 20 >= data.totalHits) {
      Notify.failure(
        `We're sorry, but you've reached the end of search results.`
      );
      loadMoreBtn.hide();
      return;
    }

    loadMoreBtn.enable();
  } catch (err) {
    onError(err);
  }
}

function onError(err) {
  loadMoreBtn.hide();
  console.log(err);
  Notify.failure(`${err.message}`);
}

function appendImgMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', renderImgMarkup(images));
  lightBox.refresh();
}

function clearImgContainer() {
  refs.gallery.innerHTML = '';
}


