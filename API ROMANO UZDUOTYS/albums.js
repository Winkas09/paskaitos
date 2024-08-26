import { getUrlParams } from "./utils.js";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function init() {
  const albumList = document.getElementById("albumList");

  try {
    // Gauti albumus ir vartotojus
    const [albums, users] = await Promise.all([fetchData("https://jsonplaceholder.typicode.com/albums?_limit=20"), fetchData("https://jsonplaceholder.typicode.com/users")]);

    albums.forEach((album, index) => {
      // prideda indexa kaip antra parametra ?
      const user = users.find((user) => user.id === album.userId);

      const albumItem = document.createElement("div");
      albumItem.className = "album-item";

      const albumTitle = document.createElement("h2");
      const albumLink = document.createElement("a");
      albumLink.href = `album.html?id=${album.id}`;
      albumTitle.textContent = `${index + 1}. ${album.title}`; // numeracija
      albumLink.append(albumTitle);
      albumItem.appendChild(albumLink);

      const authorElement = document.createElement("p");
      const authorLink = document.createElement("a");
      authorLink.href = `./user.html?user_id=${user.id}`;
      authorLink.textContent = `Author of the album: ${user.name}`;
      authorElement.appendChild(authorLink);
      albumItem.appendChild(authorElement);

      albumList.appendChild(albumItem);
    });
  } catch (error) {
    console.error("Klaida gaunant duomenis iš API", error);
    albumList.innerHTML = "<p> Klaida gaunant duomenis. </p>";
  }
}

init();
