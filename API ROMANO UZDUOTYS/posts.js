document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Check if we are on the post details page
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId) {
    // Fetch and display post details
    fetchPostDetails(postId);
  } else {
    // Fetch and display list of posts
    fetchPosts();
  }

  async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const posts = await response.json();
      const ul = document.createElement("ul");

      for (const post of posts) {
        try {
          const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
          if (!userResponse.ok) throw new Error(`Failed to fetch user ${post.userId}`);
          const user = await userResponse.json();

          const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
          if (!commentsResponse.ok) throw new Error(`Failed to fetch comments for post ${post.id}`);
          const comments = await commentsResponse.json();

          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <a href="?id=${post.id}">${post.title}</a> 
              by <a href="./user.html?id=${user.id}">${user.name}</a> - 
              Comments: ${comments.length}
            `;
          ul.appendChild(listItem);
        } catch (error) {
          console.error(`Error processing post ${post.id}:`, error);
        }
      }

      contentDiv.appendChild(ul);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  async function fetchPostDetails(postId) {
    try {
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!postResponse.ok) throw new Error("Failed to fetch post");
      const post = await postResponse.json();

      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
      if (!userResponse.ok) throw new Error("Failed to fetch user");
      const user = await userResponse.json();

      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      if (!commentsResponse.ok) throw new Error("Failed to fetch comments");
      const comments = await commentsResponse.json();

      contentDiv.innerHTML = `
          <h1>${post.title}</h1>
          <p>${post.body}</p>
          <p>By: <a href="./user.html?id=${user.id}">${user.name}</a></p>
          <h2>Comments (${comments.length})</h2>
          <ul>
            ${comments.map((comment) => `<li><strong>${comment.name}</strong>: ${comment.body}</li>`).join("")}
          </ul>
        `;
    } catch (error) {
      console.error("Error fetching post details:", error);
      contentDiv.innerText = "Error fetching post details";
    }
  }
});
