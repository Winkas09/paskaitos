const contentDiv = document.getElementById("content");

async function fetchAlbums() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    const ul = document.createElement("ul");

    for (const album of albums) {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`);
      const user = await userResponse.json();

      const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
      const photos = await photosResponse.json();

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <a href="#" class="album-link" data-album-id="${album.id}">${album.title}</a> by 
        <a href="#" class="user-link" data-user-id="${user.id}">${user.name}</a> - 
        Photos: ${photos.length}<br>
        <a href="${photos[0].url}" target="_blank"><img src="${photos[0].thumbnailUrl}" alt="${album.title}" /></a>
      `;
      ul.appendChild(listItem);
    }

    contentDiv.appendChild(ul);

    // Add event listeners to album and user links
    document.querySelectorAll(".album-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const albumId = event.target.getAttribute("data-album-id");
        fetchAlbumDetails(albumId);
      });
    });

    document.querySelectorAll(".user-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const userId = event.target.getAttribute("data-user-id");
        window.location.href = `users.html?id=${userId}`;
      });
    });
  } catch (error) {
    console.error("Error fetching albums:", error);
  }
}

async function fetchAlbumDetails(albumId) {
  try {
    const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
    const album = await albumResponse.json();

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`);
    const user = await userResponse.json();

    const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
    const photos = await photosResponse.json();

    contentDiv.innerHTML = `
      <h1>${album.title}</h1>
      <p>By: <a href="#" class="user-link" data-user-id="${user.id}">${user.name}</a></p>
      <h2>Photos (${photos.length})</h2>
      <ul>
        ${photos
          .map(
            (photo) => `
          <li>
            <a href="${photo.url}" target="_blank">
              <img src="${photo.thumbnailUrl}" alt="${photo.title}" />
            </a>
            <p>${photo.title}</p>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    // Re-add event listener to user link in album details
    document.querySelectorAll(".user-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const userId = event.target.getAttribute("data-user-id");
        window.location.href = `users.html?id=${userId}`;
      });
    });
  } catch (error) {
    console.error("Error fetching album details:", error);
    contentDiv.innerText = "Error fetching album details";
  }
}

// Initialize the fetching of albums
fetchAlbums();
