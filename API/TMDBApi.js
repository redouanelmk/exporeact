// API/TMDBApi.js

const API_TOKEN = "1b050d52aa59e243971333b98929be8f";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

export function getImageFromApi (image) {

    return 'https://image.tmdb.org/t/p/w300' + image
}