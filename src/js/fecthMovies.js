export function fetchMovies(id) {
    return fetch(`https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>`)
        .then(response => response.json())
        .catch(error => console.log(error))
}