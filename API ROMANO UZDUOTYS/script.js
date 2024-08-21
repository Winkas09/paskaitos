import navigation from "./navigation.js";

function init() {
  const contentElement = document.querySelector("#content");

  const navigationElement = navigation();
  contentElement.append(navigationElement);
}

init();
