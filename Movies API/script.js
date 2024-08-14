const movieResults = document.querySelector("#movie-results");
const movieForm = document.querySelector("#movie-form");

movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = document.querySelector("#query-input").value.trim();
  const genre = document.querySelector("#genre").value.toLowerCase();

  if (!query && !genre) {
    movieResults.innerHTML = `<h2>Please enter a search query or select a genre.</h2>`;
    return;
  }

  const searchQuery = query || "movie";

  let allMovies = [];
  let page = 1;
  let totalResults = 0;

  do {
    const searchURL = `http://www.omdbapi.com/?apikey=683ee54d&s=${encodeURIComponent(searchQuery)}&page=${page}`;
    try {
      const response = await fetch(searchURL);
      const data = await response.json();
      if (data.Response === "True") {
        totalResults = parseInt(data.totalResults);
        allMovies = allMovies.concat(data.Search);
        page++;
      } else {
        break;
      }
    } catch (error) {
      console.error("Error fetching movies", error);
      movieResults.innerHTML = `<h2>An error occurred. Please try again later.</h2>`;
      return;
    }
  } while (allMovies.length < totalResults && allMovies.length < 50); // Limit to 50 results for performance

  const detailedMovies = await Promise.all(
    allMovies.map(async (movie) => {
      const detailedResponse = await fetch(`http://www.omdbapi.com/?apikey=683ee54d&i=${movie.imdbID}`);
      return detailedResponse.json();
    })
  );

  // Filter movies by genre if a genre is selected
  const filteredMovies = genre ? detailedMovies.filter((movie) => movie.Genre.toLowerCase().includes(genre)) : detailedMovies;

  if (filteredMovies.length > 0) {
    displayMovies(filteredMovies);
  } else {
    movieResults.innerHTML = `<h2>No movies found</h2>`;
  }
});

function displayMovies(movies) {
  if (movies.length === 0) {
    movieResults.innerHTML = `<h2>No movies found for the selected genre.</h2>`;
    return;
  }

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
