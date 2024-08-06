import createElement from "./create-element.js";

export default function createNewsItem(data) {
  // const title = data.title
  // const date = data.date
  // const category = data.category
  // const url = data.url
  // const imageSrc = data.imageSrc

  const { title, date, category, url, imageSrc } = data;

  if (!title || !url) {
    return "";
  }

  const newsItem = createElement("news-item");

  const newsLink = document.createElement("a");
  newsLink.href = url;
  newsItem.append(newsLink);

  const newsItemImageWrapper = createElement("news-item-image-wrapper");
  newsLink.append(newsItemImageWrapper);

  if (imageSrc) {
    const newsItemImage = createElement("news-item-image", "img");
    newsItemImage.src = imageSrc;
    newsItemImageWrapper.append(newsItemImage);
  }

  const newsItemContent = createElement("news-item-content");
  newsLink.append(newsItemContent);

  if (category) {
    const newsItemCategory = createElement("news-item-category", "span", category);
    newsItemContent.append(newsItemCategory);
  }

  const newsItemTitle = createElement("news-item-title", "h2", title);
  newsItemContent.append(newsItemTitle);

  if (date) {
    const newsItemDate = createElement("news-item-date", "span", date);
    newsItemContent.append(newsItemDate);
  }

  return newsItem;
}
