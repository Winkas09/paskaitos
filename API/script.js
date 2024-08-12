document.addEventListener("DOMContentLoaded", () => {
  const catFactsButton = document.querySelector("#cat-facts");
  const catFactsParagraph = document.querySelector(".catFacts p");

  if (catFactsButton && catFactsParagraph) {
    catFactsButton.addEventListener("click", () => {
      fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => {
          catFactsParagraph.innerText = data.fact;
        })
        .catch((error) => {
          console.error("Error fetching cat fact", error);
          catFactsParagraph.textContent = "An error occurred. Please try again later.";
        });
    });
  }

  const catBreedButton = document.querySelector("#cat-breed");
  const catBreedParagraph = document.querySelector(".catBreed p");

  if (catBreedButton && catBreedParagraph) {
    catBreedButton.addEventListener("click", () => {
      fetch("https://catfact.ninja/breeds")
        .then((response) => response.json())
        .then((data) => {
          const breeds = data.data;
          if (breeds && breeds.length > 0) {
            const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
            catBreedParagraph.innerText = randomBreed.breed;
          } else {
            catBreedParagraph.innerText = "No breeds available.";
          }
        })
        .catch((error) => {
          console.error("Error fetching cat breed", error);
          catBreedParagraph.textContent = "An error occurred. Please try again later.";
        });
    });
  }
});
