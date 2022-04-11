import './sass/main.scss';
import { fetchMovies } from './js/fecthMovies';
import cardHBS from '../src/template/card.hbs'

const ids = [27, 9, 14, 15, 100, 28, 24, 5, 13, 64, 55, 76, 87, 98, 11, 19, 20]

localStorage.setItem("movie-id", JSON.stringify(ids))

const listRef = document.querySelector('.film-card__list')

// fetchMovies(574).then(movie => console.log(movie))

function getLocalIdWatched() {
    const parseId = JSON.parse(localStorage.getItem("movie-id"))
    return parseId
}

function markupWatchedMovies() {
    // e.preventDefault();
    listRef.innerHTML = '';
    
    const localId = getLocalIdWatched()

    localId.map(id => {
        fetchMovies(id)
        .then(movie => {
            const markup = cardHBS(movie)
            listRef.insertAdjacentHTML('beforeend', markup)
        })
    })
}

markupWatchedMovies()