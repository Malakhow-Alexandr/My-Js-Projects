!function(){function o(o){return o&&o.__esModule?o.default:o}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},p={},i=a.parcelRequired7c6;null==i&&((i=function(o){if(o in e)return e[o].exports;if(o in p){var a=p[o];delete p[o];var i={id:o,exports:{}};return e[o]=i,a.call(i.exports,i,i.exports),i.exports}var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(o,a){p[o]=a},a.parcelRequired7c6=i);var t;t=JSON.parse('[{"preview":"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg","description":"Hokkaido Flower"},{"preview":"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg","description":"Container Haulage Freight"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg","description":"Aerial Beach View"},{"preview":"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg","original":"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg","description":"Flower Blooms"},{"preview":"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg","original":"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg","description":"Alpine Mountains"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg","description":"Mountain Lake Sailing"},{"preview":"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg","description":"Alpine Spring Meadows"},{"preview":"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg","description":"Nature Landscape"},{"preview":"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg","original":"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg","description":"Lighthouse Coast Sea"}]');var n=i("5IjG7");console.log(o(t));var c=document.querySelector(".gallery"),r=o(t).map((function(o){return'\n        <a class="gallery__item" href="'.concat(o.original,'">\n          <img class="gallery__image" data-source="').concat(o.original,'"  src="').concat(o.preview,'" alt="').concat(o.description,'" />\n        </a>\n      ')})).join("");c.insertAdjacentHTML("beforeend",r);new(o(n))(".gallery a",{captionsData:"alt",captionDelay:250})}();
//# sourceMappingURL=08-lightBox-gallery.60504e31.js.map
