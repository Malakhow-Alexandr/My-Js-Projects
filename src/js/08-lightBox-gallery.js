import galleryItems from '../data/gallery.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imgMarkup);

function createMarkup(items) {
  return items
    .map(item => {
      return `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" data-source="${item.original}"  src="${item.preview}" alt="${item.description}" />
        </a>
      `;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
