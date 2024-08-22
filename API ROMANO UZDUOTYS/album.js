import { getUrlParams } from "./utils.js";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function init() {
  const albumId = getUrlParams("id");
  const albumTitle = document.getElementById("albumTitle");
  const albumAuthor = document.getElementById("albumAuthor");
  const gallery = document.getElementById("lightgallery");

  try {
    // nuotraukos ir vartotojai
    const [album, photos, users] = await Promise.all([fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}`), fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`), fetchData("https://jsonplaceholder.typicode.com/users")]);

    const user = users.find((user) => user.id === album.userId);

    albumTitle.textContent = album.title;
    const albumAuthorLink = document.createElement("a");
    albumAuthorLink.href = `./user.html?user_id=${user.id}`;
    albumAuthorLink.textContent = user.name;
    albumAuthor.innerHTML = "Autorius: ";
    albumAuthor.appendChild(albumAuthorLink);

    photos.forEach((photo) => {
      const photoItem = document.createElement("a");
      photoItem.href = photo.url;
      photoItem.dataset.subHtml = `<h4>${photo.title}</h4>`;
      photoItem.innerHTML = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
      gallery.appendChild(photoItem);
    });

    // init galerija
    lightGallery(gallery, {
      speed: 500,
      download: false,
    });
  } catch (error) {
    console.error("Klaida gaunant duomenis iš API", error);
    const errorMessage = document.createElement("h1");
    errorMessage.textContent = "Albumas nerastas";
    document.body.appendChild(errorMessage);
  }
}

init();
