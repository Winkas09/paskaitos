import navigation from "./navigation.js";
import { getUrlParams } from "./utils.js";

async function init() {
  const postId = getUrlParams("post_id");

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`);
  const post = await res.json();

  const contentElement = document.querySelector("#content");
  const postWrapper = createPostElement(post);
  const postComments = createCommentsList(post.comments);

  contentElement.append(navigation(), postWrapper, postComments);
}

init();

function createPostElement(data) {
  const { title, body, user } = data;
  const { name, id } = user;

  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");

  const postTitle = document.createElement("h1");
  postTitle.classList.add("post-title");
  postTitle.textContent = title;
  postWrapper.append(postTitle);

  const authorElement = document.createElement("span");
  const authorLink = document.createElement("a");
  authorLink.href = `./user.html?user_id=${id}`;
  authorLink.textContent = name;
  authorElement.append("Author: ", authorLink);
  postWrapper.append(authorElement);

  const postBody = document.createElement("p");
  postBody.classList.add("post-body");
  postBody.textContent = body;
  postWrapper.append(postBody);

  return postWrapper;
}

function createCommentsList(data) {
  const commentsWrapper = document.createElement("div");
  commentsWrapper.classList.add("comments-wrapper");

  const commentsTitle = document.createElement("h2");
  commentsTitle.classList.add("comment-title");
  commentsTitle.textContent = "Comments:";
  commentsWrapper.append(commentsTitle);

  const commentsList = document.createElement("div");
  commentsList.classList.add("comments-list");
  commentsWrapper.append(commentsList);

  data.forEach((comment) => {
    const { name, body, email } = comment;

    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    const commentTitle = document.createElement("h3");
    commentTitle.classList.add("comment-title");
    commentTitle.textContent = name;
    commentItem.append(commentTitle);

    const commentAuthor = document.createElement("span");
    commentAuthor.textContent = `Commented by: ${email}`;
    commentItem.append(commentAuthor);

    const commentBody = document.createElement("p");
    commentBody.classList.add("comment-body");
    commentBody.textContent = body;
    commentItem.append(commentBody);

    commentsList.append(commentItem);
  });

  return commentsWrapper;
}
