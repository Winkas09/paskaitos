const contentDiv = document.getElementById("content");

// Function to initialize the page
function initialize() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId) {
    // Fetch and display post details
    fetchPostDetails(postId);
  } else {
    // Fetch and display list of posts
    fetchPosts();
  }
}

// Call initialize on page load
initialize();

// Listen for popstate event to handle back/forward navigation
window.addEventListener("popstate", initialize);

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();
    const ul = document.createElement("ul");

    for (const post of posts) {
      try {
        const [userResponse, commentsResponse] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`), fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)]);

        if (!userResponse.ok) throw new Error(`Failed to fetch user ${post.userId}`);
        if (!commentsResponse.ok) throw new Error(`Failed to fetch comments for post ${post.id}`);

        const user = await userResponse.json();
        const comments = await commentsResponse.json();

        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <a href="?id=${post.id}" class="post-link">${post.title}</a> 
          by <a href="./user.html?id=${user.id}">${user.name}</a> - 
          Comments: ${comments.length}
        `;
        ul.appendChild(listItem);
      } catch (error) {
        console.error(`Error processing post ${post.id}:`, error);
      }
    }

    contentDiv.innerHTML = ""; // Clear previous content
    contentDiv.appendChild(ul);

    // Add event listeners to post links
    document.querySelectorAll(".post-link").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const postId = new URL(this.href).searchParams.get("id");
        history.pushState(null, "", `?id=${postId}`);
        fetchPostDetails(postId);
      });
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function fetchPostDetails(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post details");
    const post = await response.json();

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    if (!userResponse.ok) throw new Error(`Failed to fetch user ${post.userId}`);
    const user = await userResponse.json();

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    if (!commentsResponse.ok) throw new Error(`Failed to fetch comments for post ${post.id}`);
    const comments = await commentsResponse.json();

    contentDiv.innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
      <p>by <a href="./user.html?id=${user.id}">${user.name}</a></p>
      <h2>Comments</h2>
      <ul>
        ${comments.map((comment) => `<li>${comment.body} - ${comment.email}</li>`).join("")}
      </ul>
      <a href="posts.html">Back to posts</a>
    `;
  } catch (error) {
    console.error("Error fetching post details:", error);
  }
}
