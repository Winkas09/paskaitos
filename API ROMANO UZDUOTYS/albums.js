import { getUrlParams } from "./utils.js";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function init() {
  const albumList = document.getElementById("albumList");

  try {
    // Gauti albumus ir vartotojus
    const [albums, users] = await Promise.all([fetchData("https://jsonplaceholder.typicode.com/albums"), fetchData("https://jsonplaceholder.typicode.com/users")]);

    albums.forEach((album) => {
      const user = users.find((user) => user.id === album.userId);

      const albumItem = document.createElement("div");
      albumItem.className = "album-item";

      const albumTitle = document.createElement("h2");
      const albumLink = document.createElement("a");
      albumLink.href = `album.html?id=${album.id}`;
      albumTitle.textContent = album.title;
      albumLink.append(albumTitle);
      albumItem.appendChild(albumLink);

      const authorElement = document.createElement("p");
      const authorLink = document.createElement("a");
      authorLink.href = `./user.html?user_id=${user.id}`;
      authorLink.textContent = `Autorius: ${user.name}`;
      authorElement.appendChild(authorLink);
      albumItem.appendChild(authorElement);

      albumList.appendChild(albumItem);
    });
  } catch (error) {
    console.error("Klaida gaunant duomenis iš API", error);
    albumList.innerHTML = "<p>Klaida gaunant duomenis.</p>";
  }
}

init();

// import navigation from "./navigation.js";
// import { getUrlParams } from "./utils.js";

// async function init() {
//   const albumId = getUrlParams("album_id");

//   const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);
//   const album = await res.json();

//   const contentElement = document.querySelector("#content");
//   const albumWrapper = createAlbumElement(album);
//   const albumPhotos = createPhotosList(album.photos);

//   contentElement.append(navigation(), albumWrapper, albumPhotos);

//   // Initialize LightGallery
//   lightGallery(document.querySelector(".photos-list"));
// }

// init();

// function createAlbumElement(data) {
//   const { title, user } = data;
//   const { name, id } = user;

//   const albumWrapper = document.createElement("div");
//   albumWrapper.classList.add("album-wrapper");

//   const albumTitle = document.createElement("h1");
//   albumTitle.classList.add("album-title");
//   albumTitle.textContent = title;
//   albumWrapper.append(albumTitle);

//   const authorElement = document.createElement("span");
//   const authorLink = document.createElement("a");
//   authorLink.href = `./user.html?user_id=${id}`;
//   authorLink.textContent = name;
//   authorElement.append("Author: ", authorLink);
//   albumWrapper.append(authorElement);

//   return albumWrapper;
// }

// function createPhotosList(data) {
//   const photosWrapper = document.createElement("div");
//   photosWrapper.classList.add("photos-wrapper");

//   const photosTitle = document.createElement("h2");
//   photosTitle.classList.add("photos-title");
//   photosTitle.textContent = "Photos:";
//   photosWrapper.append(photosTitle);

//   const photosList = document.createElement("div");
//   photosList.classList.add("photos-list");
//   photosWrapper.append(photosList);

//   data.forEach((photo) => {
//     const { title, thumbnailUrl, url } = photo;

//     const photoItem = document.createElement("div");
//     photoItem.classList.add("photo-item");

//     const photoTitle = document.createElement("h3");
//     photoTitle.classList.add("photo-title");
//     photoTitle.textContent = title;
//     photoItem.append(photoTitle);

//     const photoThumbnail = document.createElement("a");
//     photoThumbnail.href = url;
//     photoThumbnail.dataset.src = url;
//     photoThumbnail.dataset.subHtml = `<h4>${title}</h4>`;
//     const img = document.createElement("img");
//     img.src = thumbnailUrl;
//     img.alt = title;
//     photoThumbnail.append(img);
//     photoItem.append(photoThumbnail);

//     photosList.append(photoItem);
//   });

//   return photosWrapper;
// }
