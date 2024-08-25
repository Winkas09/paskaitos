import { getUrlParams } from "./utils.js";
import navigation from "./navigation.js";

async function init() {
  const contentElement = document.querySelector("#content");
  const navigationElement = navigation();
  contentElement.append(navigationElement);

  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchPhrase = document.querySelector("#search-input").value;
    await performSearch(searchPhrase);
  });

  const initialSearchPhrase = getUrlParams("search-phrase");
  if (initialSearchPhrase) {
    document.querySelector("#search-input").value = initialSearchPhrase;
    await performSearch(initialSearchPhrase);
  }
}

async function performSearch(searchPhrase) {
  if (!searchPhrase.trim()) {
    alert("Search phrase is empty, please enter a valid search phrase.");
    return;
  }

  const contentContainer = document.querySelector("#content");
  if (!contentContainer) {
    console.error("Content container not found");
    return;
  }
  contentContainer.textContent = ""; // Clear previous results

  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchPhrase}&_limit=20`);
  const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users?q=${searchPhrase}&_limit=20`);
  const posts = await postsRes.json();
  const users = await usersRes.json();
  const navigationElement = navigation();

  const searchResultsTitle = createSearchResultsTitle(searchPhrase);
  const searchResults = createSearchResults(posts, users);

  const searchForm = document.querySelector("#search-form");

  contentContainer.append(searchResultsTitle, searchResults, navigationElement);
}

function createSearchResultItem(data) {
  const searchResultItem = document.createElement("li");
  searchResultItem.classList.add("search-result-item");

  const { id, title, name, username } = data;

  const searchResultLink = document.createElement("a");
  searchResultLink.classList.add("search-result-link");
  searchResultLink.href = title ? `./post.html?post_id=${id}` : `./user.html?user_id=${id}`;
  searchResultLink.textContent = title || name || username;

  searchResultItem.append(searchResultLink);

  return searchResultItem;
}

function createSearchResults(posts, users) {
  const searchResults = document.createElement("ul");
  searchResults.classList.add("search-results");

  if (posts.length === 0 && users.length === 0) {
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No results found for your query.";
    return noResultsMessage;
  }

  posts.forEach((post) => {
    searchResults.append(createSearchResultItem(post));
  });

  users.forEach((user) => {
    searchResults.append(createSearchResultItem(user));
  });

  return searchResults;
}

function createSearchResultsTitle(searchPhrase) {
  const element = document.createElement("h1");
  element.textContent = `Search Results for: "${searchPhrase}"`;
  element.classList.add("search-results-title");

  return element;
}

document.addEventListener("DOMContentLoaded", init);
