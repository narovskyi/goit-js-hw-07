import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery');

const arrayOfGalleryItems = galleryItems.map(elem => {
    const galleryItem = `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${elem.preview}"
                data-source="${elem.original}"
                alt="${elem.description}"
            />
        </a>
    </div>
    `;
    return galleryItem;
});

let galleryIemsMarkup = arrayOfGalleryItems.join('');

gallery.insertAdjacentHTML('beforeend', galleryIemsMarkup);

gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (getAddrOfImage(evt) !== undefined) {
        const instance = basicLightbox.create(`
            <img src="${getAddrOfImage(evt)}" width="800" height="600">`,
            {
                onShow: (instance) => {
                    document.addEventListener('keydown', closeModalOnEscape);
                    console.log('LightBox is open. Event Listener on keydown added.');
                },
                onClose: (instance) => {
                    document.removeEventListener('keydown', closeModalOnEscape);
                    console.log('LightBox is closed. EventListener on keydown removed.')
                },
            }
        );
        instance.show();
        function closeModalOnEscape(evt) {
            console.log(evt.code);
            if (evt.code === 'Escape') {
                instance.close();
            }
        }
    }
}

function getAddrOfImage(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    return evt.target.dataset.source;
}