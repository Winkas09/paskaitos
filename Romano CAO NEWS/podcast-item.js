import createElement from "./create-element.js";

export default function createPodcastItem(data) {
  const { title, date, length, imageSrc } = data;

  if (!title || !length || !imageSrc) {
    return "";
  }

  const podcastItemElement = createElement("podcasts-item");

  const podcastControls = createElement("podcast-controls");
  const podcastContent = createElement("podcast-content");
  podcastItemElement.append(podcastControls, podcastContent);

  const imageElement = createElement("podcast-image", "img");
  imageElement.src = imageSrc;

  const podcastLength = createElement("podcast-length", "span", `Trukmė: ${length}`);
  const podcastPlay = createElement("podcast-play", "button", "Play");
  podcastControls.append(imageElement, podcastLength, podcastPlay);

  const podcastTitleElement = createElement("podcast-title", "h3", title);
  podcastContent.append(podcastTitleElement);

  if (date) {
    const podcastDateElement = createElement("podcast-date", "span", date);
    podcastContent.append(podcastDateElement);
  }

  return podcastItemElement;
}
