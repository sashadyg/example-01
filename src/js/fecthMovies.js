const API_KEY = '70c5c640dcd47438a9460ce1b8e1a5b1'

export function fetchMovies(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .catch(error => console.log(error))
}