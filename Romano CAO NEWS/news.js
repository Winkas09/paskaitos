import createElement from "./create-element.js";
import createEventItem from "./event-item.js";
import createEventSection from "./events-section.js";
import createNewsSection from "./news-section.js";
import createPodcastSection from "./podcasts-section.js";
import createVideoSection from "./video-section.js";

const contentElement = document.querySelector("#content");

const containerElement = document.createElement("div");
containerElement.classList.add("container");
contentElement.append(containerElement);

const pageContentElement = document.createElement("div");
pageContentElement.classList.add("page-content");
containerElement.append(pageContentElement);

const mainElement = document.createElement("main");
pageContentElement.append(mainElement);

const pageTitle = createElement("page-title", "h1", "Naujienos");
const newsSectionElement = createNewsSection();
const videoSectionElement = createVideoSection();
mainElement.append(pageTitle, newsSectionElement, videoSectionElement);

const asideElement = document.createElement("aside");
pageContentElement.append(asideElement);

const podcastsSectionElement = createPodcastSection();
asideElement.append(podcastsSectionElement);

const eventsSectionElement = createEventSection();
asideElement.append(eventsSectionElement);
