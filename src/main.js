import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serviceGetImage } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.js-form');
const list = document.querySelector('.js-list');

form.addEventListener('submit', handlerSearch);
// list.addEventListener('click', handlerOpenModal)

function handlerSearch(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.query.value
    .trim()
    .toLowerCase();

    serviceGetImage(inputValue).then(data => {
        if (!data.hits.length) {
            list.innerHTML = ''
            alert('no image')
            return
      }
    list.innerHTML = createMarkup(data.hits);
    new SimpleLightbox('.gallery a');
    });
    event.currentTarget.reset();
}

// function handlerOpenModal(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }
//     const currentCard = event.target.closest('li');
//     const largeImageURL = currentCard.dataset.source;

// }
