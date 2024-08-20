// Fetch users and display them with post count
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const contentDiv = document.getElementById("content");
    const ul = document.createElement("ul");
    users.forEach((user) => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((posts) => {
          const listItem = document.createElement("li");
          const userLink = document.createElement("a");
          userLink.href = "#";
          userLink.textContent = `${user.name} - Posts: ${posts.length}`;
          userLink.addEventListener("click", (event) => {
            event.preventDefault();
            fetchUserDetails(user.id);
          });
          listItem.appendChild(userLink);
          ul.appendChild(listItem);
        });
    });
    contentDiv.appendChild(ul);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

function fetchUserDetails(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const contentDiv = document.getElementById("content");
      contentDiv.innerHTML = `
        <h1>${user.name}</h1>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });
}
