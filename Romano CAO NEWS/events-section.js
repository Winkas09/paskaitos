import createElement from "./create-element.js";
import createEventItem from "./event-item.js";

const eventsData = [
  {
    title: "Event 1",
    day: "10",
    month: "Oct",
    imageSrc: "path/to/image1.jpg",
    url: "https://example.com/event1",
    location: "Location 1",
  },
  {
    title: "Event 2",
    day: "15",
    month: "Nov",
    imageSrc: "path/to/image2.jpg",
    url: "https://example.com/event2",
    location: "Location 2",
  },
];

export default function createEventSection() {
  const eventSectionElement = createElement("events-section", "section");

  const sectionTitle = createElement("section-title", "h2", "Renginiai");
  eventSectionElement.append(sectionTitle);

  const eventsList = createElement("events-lists");
  eventSectionElement.append(eventsLists);

  eventsData.forEach((eventData) => {
    const eventItem = createElement(eventData);
    eventsList.append(eventItem);
  });

  return eventSectionElement;
}
