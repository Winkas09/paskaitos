import navigation from "./navigation.js";
import { getUrlParams } from "./utils.js";

async function init() {
  const userId = getUrlParams("user_id");

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`);
  const user = await res.json();
  console.log(user.albums);

  const contentElement = document.querySelector("#content");
  const navigationElement = navigation();
  const userContent = createUserContent(user);
  const postsList = createUserPostsList(user.posts, user.name);

  contentElement.append(navigationElement, userContent, postsList);
}

init();

function createUserContent(data) {
  const userContent = document.createElement("div");
  userContent.classList.add("user-content");

  const { name, email, phone, website, username, address, company } = data;

  const userName = document.createElement("h2");
  userName.classList.add("user-name");
  userName.textContent = `${name} (${username})`;
  userContent.append(userName);

  const contactsList = document.createElement("ul");
  userContent.append(contactsList);

  if (email) {
    const emailElement = document.createElement("li");
    emailElement.textContent = `Email: ${email}`;
    contactsList.append(emailElement);
  }

  return userContent;
}

function createUserPostsList(posts, author) {
  const postsListWrapper = document.createElement("div");
  postsListWrapper.classList.add("posts-wrapper");

  const postsListTitle = document.createElement("h3");
  postsListTitle.classList.add("posts-list-title");

  // if (author) {
  //     postsListTitle.textContent = `Posts of ${author}:`
  // } else {
  //     postsListTitle.textContent = 'Posts:'
  // }

  postsListTitle.textContent = author ? `Posts of ${author}:` : "Posts:";

  postsListWrapper.append(postsListTitle);

  const postsList = document.createElement("ul");
  postsList.classList.add("posts-list");
  postsListWrapper.append(postsList);

  posts.forEach((post) => {
    const { id, title } = post;

    const postItem = document.createElement("li");
    postItem.classList.add("post-item");

    const postLink = document.createElement("a");
    postLink.classList.add("post-link");
    postLink.href = `./post.html?post_id=${id}`;
    postLink.textContent = title;
    postItem.append(postLink);

    postsList.append(postItem);
  });

  return postsListWrapper;
}
