import createElement from "./create-element.js";

export default function createEventItem(data) {
  const { title, day, month, imageSrc, url, location } = data;

  // Check for required fields
  if (!title || !url) {
    console.warn("Missing required fields: title or url");
    return "";
  }

  // Create main event item element
  const eventItem = createElement("event-item");
  const eventLink = document.createElement("a");
  eventLink.href = url;
  eventItem.append(eventLink);

  // Add image if available
  if (imageSrc) {
    const eventItemImageWrapper = createElement("event-item-image-wrapper");
    eventLink.append(eventItemImageWrapper);

    const eventItemImage = createElement("event-item-image", "img");
    eventItemImage.src = imageSrc;
    eventItemImageWrapper.append(eventItemImage);
  }

  // Create content wrapper
  const eventItemContentWrapper = createElement("event-item-content-wrapper");
  eventLink.append(eventItemContentWrapper);

  // Add date if available
  if (day || month) {
    const eventDate = createElement("event-date");
    eventItemContentWrapper.append(eventDate);
    if (day) {
      const eventDay = createElement("event-day", "span", day);
      eventDate.append(eventDay);
    }

    if (month) {
      const eventMonth = createElement("event-month", "span", month);
      eventDate.append(eventMonth);
    }
  }

  // Create main content element
  const eventItemContent = createElement("event-item-content");
  eventItemContentWrapper.append(eventItemContent);

  // Add location if available
  if (location) {
    const eventLocation = createElement("event-location", "span", location);
    eventItemContent.append(eventLocation);
  }

  // Add title
  const eventTitle = createElement("event-title", "h3", title);
  eventItemContent.append(eventTitle);

  return eventItem;
}
