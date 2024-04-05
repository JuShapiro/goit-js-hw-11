function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li><a class="modal" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}">
      <div>
        <h2>Likes <p>${likes}</p></h2>
        <h2>Views <p></p>${views}</h2>
        <h2>Comments <p>${comments}</p></h2>
        <h2>Downloads <p>${downloads}</p></h2>
      </div>
      </a>
      </li>`).join('');
    
}

export { createMarkup };