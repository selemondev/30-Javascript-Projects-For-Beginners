const KEY = "63ef9c1da41cd3c843dcec9ed2264b73";
const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}&language=en-US`;
const search_api = `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const mainContainerEl = document.querySelector(".main-container");
const searchBtn = document.querySelector("#search-btn");
const searchEl = document.querySelector("#input");

// fetch the movies
const fetchMovies = async (url) => {
    fetch(url)
        .then((response) => response?.json())
        .then((data) => Movies(data?.results))
};
fetchMovies(trending);

const Movies = (movies) => {
    mainContainerEl.innerHTML = "";
    movies.forEach((movie) => {
        const { poster_path, backdrop_path, overview, original_title, release_date, name, first_air_date } = movie;
        const genre = document.createElement("div");
        genre.innerHTML = `
        <div class="movie_container">
        <div class="movie">
            <img src="${IMG_PATH + poster_path || IMG_PATH + backdrop_path}" alt="" class="movie_img">
        <div class="overview">
            <h4 class="overview-description">${overview}</h4>
        </div>
        </div>
        </div>
        <div class="title_container">
        <h4 class="movie_title">${original_title || name}</h4>
        <p class="release_date">${release_date || first_air_date}</p>
        </div>
        `;

        mainContainerEl.appendChild(genre);
    })
};

// search movie functionality

const searchMovie = () => {
    const searchInput = searchEl.value;
    if (searchInput !== "" && searchInput.trim()) {
        fetchMovies(search_api + searchInput);
    } else {
        return fetchMovies(trending)
    }
};

searchBtn.addEventListener("click", () => {
    searchMovie();
    searchEl.value = "";
});
