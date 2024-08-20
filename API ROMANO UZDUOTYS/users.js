const contentDiv = document.getElementById("content");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=20");
    const users = await response.json();
    const ul = document.createElement("ul");

    for (const user of users) {
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = await postsResponse.json();

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
    }

    contentDiv.appendChild(ul);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function fetchUserDetails(userId) {
  try {
    const [userResponse, postsResponse] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)]);

    if (!userResponse.ok) throw new Error("Failed to fetch user details");
    if (!postsResponse.ok) throw new Error("Failed to fetch user posts");

    const user = await userResponse.json();
    const posts = await postsResponse.json();

    contentDiv.innerHTML = `
      <h1>${user.name}</h1>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      <h2>Posts</h2>
      <ul>
        ${posts.map((post) => `<li><strong>${post.title}</strong><p>${post.body}</p></li>`).join("")}
      </ul>
      <a href="users.html">Back to users</a>
    `;
  } catch (error) {
    console.error("Error fetching user details:", error);
    contentDiv.innerHTML = "<p>Error loading user details. Please try again later.</p>";
  }
}

// Call the function to fetch users
fetchUsers();
