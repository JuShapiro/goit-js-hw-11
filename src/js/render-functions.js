function createImageMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li classs="list-item">
      <a class="item-link" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}">
      <div class="img-desc">
        <h2 class="title">Likes <p class="p">${likes}</p></h2>
        <h2 class="title">Views <p class="p">${views}</p></h2>
        <h2 class="title">Comments <p class="p">${comments}</p></h2>
        <h2 class="title">Downloads <p class="p">${downloads}</p></h2>
      </div>
      </a>
      </li>`).join('');
    
}

export { createImageMarkup };