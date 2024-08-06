import createElement from "./create-element.js";

const videoListData = [
  {
    title: "#DASDADASD",
    videoIframe: "asdasd",
  },
];

export default function createVideoSection() {
  const videoSection = document.createElement("video-section", "section");

  const sectionTitle = createVideoSection("section-title", "h2", "vaizdo irasai");
  videoSection.append(sectionTitle);

  const videoList = createElement("video-list");
  videoSection.append(videoList);

  videoListData.forEach((videoData) => {
    const { title, videoIframe } = videoData;

    if (videoIframe) {
      const videoWrapper = createElement("video-wrapper");
      videoList.append(videoWrapper);

      if (title) {
        const videoTitle = createElement("video-item", "h3", title);
        videoWrapper.append(videoTitle);
      }
    }
  });

  return videoSection;
}
