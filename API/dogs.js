const dogBreedParagraph = document.querySelector(".dogBreed p");
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    if (breeds.length > 0) {
      const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
      dogBreedParagraph.innerText = randomBreed;
    } else {
      dogBreedParagraph.innerText = "No breeds available.";
    }
  })
  .catch((error) => {
    console.error("Error fetching dog breeds", error);
    dogBreedParagraph.textContent = "An error occurred. Please try again later.";
  });

// Function to fetch and display a random dog image
// Function to fetch and display a random dog breed
function fetchRandomDogBreed() {
  const dogBreedParagraph = document.querySelector(".dogBreed p");
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      if (breeds.length > 0) {
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
        dogBreedParagraph.innerText = randomBreed;
      } else {
        dogBreedParagraph.innerText = "No breeds available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching dog breeds", error);
      dogBreedParagraph.textContent = "An error occurred. Please try again later.";
    });
}

// Function to fetch and display a random dog image
function fetchRandomDogImage() {
  const dogImageElement = document.querySelector(".dogImg img");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImageElement.src = data.message;
    })
    .catch((error) => {
      console.error("Error fetching dog image", error);
      dogImageElement.alt = "An error occurred. Please try again later.";
    });
}

// Add event listeners directly
const dogBreedButton = document.querySelector("#dog-breed");
const dogImageButton = document.querySelector("#dog-image");

if (dogBreedButton) {
  dogBreedButton.addEventListener("click", fetchRandomDogBreed);
}

if (dogImageButton) {
  dogImageButton.addEventListener("click", fetchRandomDogImage);
}

const dogForm = document.querySelector("#dog-form");

dogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const dogBreedInput = document.querySelector("#dog");
  const dogBreed = dogBreedInput.value;
  console.log(dogBreed);
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      const dogImageElement = document.querySelector(".dogImg img");
      dogImageElement.src = data.message;
    })
    .catch((error) => {
      console.error("Error fetching dog image", error);
      dogImageElement.alt = "An error occurred. Please try again later.";
    });
});
