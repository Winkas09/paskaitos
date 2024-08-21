// const contentDiv = document.getElementById("content");

// // Function to fetch and display albums
// async function fetchAlbums() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=20");
//     if (!response.ok) throw new Error("Failed to fetch albums");
//     const albums = await response.json();
//     const ul = document.createElement("ul");

//     for (const album of albums) {
//       const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`);
//       if (!userResponse.ok) throw new Error(`Failed to fetch user ${album.userId}`);
//       const user = await userResponse.json();

//       const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
//       const photos = await photosResponse.json();
//       console.log("Photos fetched:", photos); // Debugging line

//       const listItem = document.createElement("li");
//       listItem.innerHTML = `
//         <a href="#" class="album-link" data-album-id="${album.id}">${album.title}</a> by
//         <a href="#" class="user-link" data-user-id="${user.id}">${user.name}</a> -
//         Photos: ${photos.length}<br>
//         <a href="${photos[0].url}" target="_blank"><img src="${photos[0].thumbnailUrl}" alt="${album.title}" /></a>
//       `;
//       ul.appendChild(listItem);
//     }

//     contentDiv.innerHTML = ""; // Clear previous content
//     contentDiv.appendChild(ul);

//     // Add event listeners to album and user links
//     document.querySelectorAll(".album-link").forEach((link) => {
//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         const albumId = event.target.getAttribute("data-album-id");
//         fetchAlbumDetails(albumId);
//       });
//     });

//     document.querySelectorAll(".user-link").forEach((link) => {
//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         const userId = event.target.getAttribute("data-user-id");
//         window.location.href = `users.html?id=${userId}`;
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching albums:", error);
//   }
// }

// // Function to fetch and display album details
// async function fetchAlbumDetails(albumId) {
//   try {
//     const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
//     if (!albumResponse.ok) throw new Error("Failed to fetch album details");
//     const album = await albumResponse.json();

//     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`);
//     if (!userResponse.ok) throw new Error(`Failed to fetch user ${album.userId}`);
//     const user = await userResponse.json();

//     const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
//     if (!photosResponse.ok) throw new Error(`Failed to fetch photos for album ${album.id}`);
//     const photos = await photosResponse.json();

//     contentDiv.innerHTML = `
//       <h1>${album.title}</h1>
//       <p>by <a href="users.html?id=${user.id}">${user.name}</a></p>
//       <h2>Photos</h2>
//       <ul>
//         ${photos.map((photo) => `<li><a href="${photo.url}" target="_blank"><img src="${photo.thumbnailUrl}" alt="${photo.title}" /></a></li>`).join("")}
//       </ul>
//       <a href="albums.html">Back to albums</a>
//     `;
//   } catch (error) {
//     console.error("Error fetching album details:", error);
//   }
// }

// // Call the function to fetch albums
// fetchAlbums();
