import navigation from "./navigation.js";

async function init() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_embed=posts");
  const users = await res.json();

  const contentElement = document.querySelector("#content");
  const navigationElement = navigation();
  const usersList = createUsersList(users);

  contentElement.append(navigationElement, usersList);
}

init();

function createUsersList(data) {
  const usersWrapper = document.createElement("div");
  usersWrapper.classList.add("users-wrapper");

  const usersTitle = document.createElement("h1");
  usersTitle.textContent = "Users:";
  usersWrapper.append(usersTitle);

  const usersList = document.createElement("ul");
  usersWrapper.append(usersList);

  data.forEach((user) => {
    const { id, name, posts } = user;

    const userItem = document.createElement("li");
    const userLink = document.createElement("a");
    userLink.href = `./user.html?user_id=${id}`;
    userLink.textContent = `${name} (${posts.length})`;
    userItem.append(userLink);

    usersList.append(userItem);
  });

  return usersWrapper;
}
