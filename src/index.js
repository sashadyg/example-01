import './sass/main.scss';
import { fetchMovies } from './js/fecthMovies';

const ids = [27, 9, 14, 15, 100, 28]

localStorage.setItem("movie-id", JSON.stringify(ids))

// const localStorageId = localStorage.getItem("movie-id")

fetchMovies(574).then(movie => console.log(movie))

const getLocalIdWatched = () => parsedId = JSON.parse(localStorage.getItem("movie-id"))

function checkWatchedList() {
    if(getLocalIdWatched().length < 0) {
        return
    }
}

function markupWatchedMovies(movie) {
    const markupMovie = movie.map(({ original_title, poster_path, genres, vote_average }) => {
        const markup = ``

        return markup
    }).join('')

    return markupMovie
}