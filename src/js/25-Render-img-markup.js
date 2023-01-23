export default function renderImgMarkup(arr) {
    return arr
      .map(
        ({
          largeImageURL: imgLarge,
          webformatURL: imgSmall,
          likes,
          views,
          comments,
          downloads,
          tags,
        }) => `<div class="photo-card">
        <a class="gallery__item" href="${imgLarge}">
        <img class="gallery__image" data-source="${imgLarge}" src="${imgSmall}" alt="${tags}" loading="lazy" width="285" height="190"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span class="info-item__value">${likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span class="info-item__value">${views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span class="info-item__value">${comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span class="info-item__value">${downloads}</span>
          </p>
        </div>
      </div>
    `
      )
      .join('');
  }