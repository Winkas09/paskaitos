import createNewsItem from "./news-item.js";

const mainNewsData = [
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png",
    date: "2024-05-23",
    url: "#",
    category: "Sėkmės istorija",
  },
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    url: "#",
  },
];

const secondaryNewsData = [
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png",
    date: "2024-05-23",
    url: "#",
    category: "Sėkmės istorija",
  },
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    url: "#",
  },
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png",
    date: "2024-05-23",
    url: "#",
    category: "Sėkmės istorija",
  },
  {
    title: "Sėkmės istorija – įsidarbinimas į Asteri",
    imageSrc: "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png",
    date: "2024-05-23",
    url: "#",
    category: "Sėkmės istorija",
  },
];

export default function createNewsSection() {
  const newsSection = document.createElement("section");
  newsSection.classList.add("news-section");

  const mainNews = document.createElement("div");
  mainNews.classList.add("main-news");
  newsSection.append(mainNews);

  mainNewsData.forEach((item) => {
    const newsItemElement = createNewsItem(item);
    mainNews.append(newsItemElement);
  });

  const secondaryNews = document.createElement("div");
  secondaryNews.classList.add("secondary-news");
  newsSection.append(secondaryNews);

  for (let i = 0; i < secondaryNewsData.length; i++) {
    const newsItemData = secondaryNewsData[i];
    const newsItemElement = createNewsItem(newsItemData);
    secondaryNews.append(newsItemElement);
  }

  return newsSection;
}
