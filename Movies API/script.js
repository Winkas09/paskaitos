const movieResults = document.querySelector("#movie-results");
const movieForm = document.querySelector("#movie-form");

movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = document.querySelector("#query-input").value.trim();
  const genre = document.querySelector("#genre").value;
  const type = document.querySelector("#type").value;

  let searchURL = `http://www.omdbapi.com/?apikey=683ee54d&type=${type}`;

  if (query) {
    searchURL += `&s=${encodeURIComponent(query)}`;
  } else if (genre) {
    searchURL += `&genre=${encodeURIComponent(genre)}`;
  } else {
    movieResults.innerHTML = `<h2>Please enter a search query or select a genre.</h2>`;
    return;
  }

  try {
    const response = await fetch(searchURL);
    const data = await response.json();
    if (data.Response === "True") {
      const movies = data.Search;
      const detailedMovies = await Promise.all(
        movies.map(async (movie) => {
          const detailedResponse = await fetch(`http://www.omdbapi.com/?apikey=683ee54d&i=${movie.imdbID}`);
          return detailedResponse.json();
        })
      );
      displayMovies(detailedMovies);
    } else {
      movieResults.innerHTML = `<h2>No ${type}s found</h2>`;
    }
  } catch (error) {
    console.error("Error fetching movies", error);
    movieResults.innerHTML = `<h2>An error occurred. Please try again later.</h2>`;
  }
});

function displayMovies(movies) {
  movieResults.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
        <img src="${movie.Poster}" alt="${movie.Title} poster">
        </div> 
        `
    )
    .join("");
}
