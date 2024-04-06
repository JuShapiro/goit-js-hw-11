import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serviceGetImage } from './js/pixabay-api';
import { createImageMarkup } from './js/render-functions';

const form = document.querySelector('.js-form');
const loader = document.querySelector('.preloader');
const gallery = document.querySelector('.js-list');

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
    event.preventDefault();
    
    const inputValue = event.currentTarget.elements.query.value
      .trim()
      .toLowerCase();
    loader.style.display = 'block';
    serviceGetImage(inputValue)
      .then(data => {
        if (!data.hits.length) {
          gallery.innerHTML = '';
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: '#fff',
          });
          return;
        }
        gallery.innerHTML = createImageMarkup(data.hits);
        const galleryList = new SimpleLightbox('.gallery a', {
          captionDelay: 250,
        });
        galleryList.refresh();
      })
      .catch(err => console.log(err))
      .finally(() => loader.style.display = 'none');

    event.currentTarget.reset();
}
