import navigation from "./navigation.js";
import { getUrlParams } from "./utils.js";

async function init() {
  const albumId = getUrlParams("album_id");

  if (!albumId) {
    console.error("Album ID not found in URL parameters.");
    return;
  }

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);

    if (!res.ok) {
      throw new Error(`Failed to fetch album data: ${res.status} ${res.statusText}`);
    }

    const album = await res.json();
    console.log("Album data:", album); // Log the album data

    if (!album.user) {
      throw new Error("User data is missing in the album response");
    }

    // Process the album data...
  } catch (error) {
    console.error("Error fetching album data:", error);
  }
}

init();

function createAlbumElement(data) {
  const { title, user } = data;
  const { name, id } = user;

  const albumWrapper = document.createElement("div");
  albumWrapper.classList.add("album-wrapper");

  const albumTitle = document.createElement("h1");
  albumTitle.classList.add("album-title");
  albumTitle.textContent = title;
  albumWrapper.append(albumTitle);

  const authorElement = document.createElement("span");
  const authorLink = document.createElement("a");
  authorLink.href = `./user.html?user_id=${id}`;
  authorLink.textContent = name;
  authorElement.append("Author: ", authorLink);
  albumWrapper.append(authorElement);

  return albumWrapper;
}

function createPhotosList(data) {
  const photosWrapper = document.createElement("div");
  photosWrapper.classList.add("photos-wrapper");

  const photosTitle = document.createElement("h2");
  photosTitle.classList.add("photos-title");
  photosTitle.textContent = "Photos:";
  photosWrapper.append(photosTitle);

  const photosList = document.createElement("div");
  photosList.classList.add("photos-list");
  photosWrapper.append(photosList);

  data.forEach((photo) => {
    const { title, thumbnailUrl, url } = photo;

    const photoItem = document.createElement("div");
    photoItem.classList.add("photo-item");

    const photoTitle = document.createElement("h3");
    photoTitle.classList.add("photo-title");
    photoTitle.textContent = title;
    photoItem.append(photoTitle);

    const photoThumbnail = document.createElement("a");
    photoThumbnail.href = url;
    photoThumbnail.dataset.src = url;
    photoThumbnail.dataset.subHtml = `<h4>${title}</h4>`;
    const img = document.createElement("img");
    img.src = thumbnailUrl;
    img.alt = title;
    photoThumbnail.append(img);
    photoItem.append(photoThumbnail);

    photosList.append(photoItem);
  });

  return photosWrapper;
}
