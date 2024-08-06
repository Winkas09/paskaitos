import createElement from "./create-element.js";
import createPodcastItem from "./podcast-item.js";

const podcastsData = [
  {
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
    date: "2021-09-10",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
    length: "7:55",
  },
  {
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas!",
    date: "2021-09-02",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
    length: "7:55",
  },
  {
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
    length: "7:55",
  },
  {
    title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
    date: "2021-09-02",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png",
    length: "7:55",
  },
];

export default function createPodcastSection() {
  if (podcastsData.length === 0) {
    return "";
  }

  const sectionElement = createElement("podcasts-section", "section");

  const sectionTitle = createElement("section-title", "h2", "Podcastai ir radijo laidos");
  sectionElement.append(sectionTitle);

  const podcastsListElement = createElement("podcasts-list");
  sectionElement.append(podcastsListElement);

  // podcastsData.forEach(podcastData => {
  //     const podcastItemElement = createPodcastItem(podcastData)
  //     podcastsListElement.append(podcastItemElement)
  // })

  podcastsData.forEach((podcastData) => podcastsListElement.append(createPodcastItem(podcastData)));

  return sectionElement;
}
