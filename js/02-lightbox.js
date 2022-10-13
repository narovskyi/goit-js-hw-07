import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('ul.gallery');

const arrayOfGalleryItems = galleryItems.map(elem => {
    const galleryItem = `
    <a class="gallery__item" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
    </a>
    `
    return galleryItem;
})

let galleryItemsMarkup = arrayOfGalleryItems.join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const lightbox = new SimpleLightbox('ul.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});