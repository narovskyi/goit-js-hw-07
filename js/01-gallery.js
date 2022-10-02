import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery');
const galleryList = document.createElement('ul');

galleryList.classList.add('gallery');

const arrayOfGalleryItems = galleryItems.map(elem => {
    const galleryItem = `<li class="gallery__item"><img class="gallery__image" data-source="${elem.original}" data-url="${elem.original}" src="${elem?.preview}" alt="${elem?.description}" width="320px" height="240px"></li>`;
    return galleryItem;
});

let galleryListItems = arrayOfGalleryItems.join('');

galleryList.insertAdjacentHTML('beforeend', galleryListItems);
gallery.append(galleryList);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    if (getAddrOfImage(evt) !== undefined) {
        const instance = basicLightbox.create(`<img src="${getAddrOfImage(evt)}" width="800" height="600">`);
        instance.show();
        document.addEventListener('keydown', closeModalOnEscape);

        function closeModalOnEscape(evt) {
            console.log(evt.code);
            if (!instance.visible()) {
                document.removeEventListener('keydown', closeModalOnEscape);
            }

            if (evt.code === 'Escape') {
                instance.close();
                document.removeEventListener('keydown', closeModalOnEscape);
            }
        }
    }
}

function getAddrOfImage(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    return evt.target.dataset.url;
}