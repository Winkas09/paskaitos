const contentElement = document.querySelector("#content");

const mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
contentElement.append(mainWrapper);

const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");
mainWrapper.append(leftContainer);

const sectionNaujienos = document.createElement("section");
sectionNaujienos.classList.add("naujienos");
leftContainer.append(sectionNaujienos);

const h1Naujienos = document.createElement("h1");
h1Naujienos.textContent = "Naujienos";
sectionNaujienos.append(h1Naujienos);

const newsItems = document.createElement("div");
newsItems.classList.add("news-items");
sectionNaujienos.append(newsItems);

const newsItem1Big = document.createElement("div");
newsItem1Big.classList.add("news-item-1", "big");
newsItems.append(newsItem1Big);

const nuoroda1 = document.createElement("a");
nuoroda1.href = "https://codeacademy.lt/kaip-juniorui-isnaudoti-linkedin-savo-naudai/";
nuoroda1.target = "_blank";

const img1 = document.createElement("img");
img1.src = "https://codeacademy.lt/wp-content/uploads/2024/05/315d4ed0-6067-11ed-8c07-f1146d90fed4-1-1024x607.jpg";
img1.alt = "Image description";
img1.classList.add("news-image");

const newsTitleDiv1 = document.createElement("div");
newsTitleDiv1.classList.add("news-title");
newsTitleDiv1.textContent = "Karjera";

const text1 = document.createElement("div");
text1.classList.add("text-1");
text1.textContent = "Kaip juniorui išnaudoti LinkedIn savo naudai?";

const newsDate1 = document.createElement("div");
newsDate1.classList.add("news-date");
newsDate1.textContent = "2024-05-28";

newsItem1Big.append(nuoroda1);
newsItem1Big.append(img1);
newsItem1Big.append(newsTitleDiv1);
newsItem1Big.append(text1);
newsItem1Big.append(newsDate1);

const newsItem2Big = document.createElement("div");
newsItem2Big.classList.add("news-item-2", "big");
newsItems.append(newsItem2Big);

const nuoroda2 = document.createElement("a");
nuoroda2.href = "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-asteri/";
const img2 = document.createElement("img");
img2.src = "https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png";
img2.alt = "Image description";
img2.classList.add("news-image");

const newsTitleDiv2 = document.createElement("div");
newsTitleDiv2.classList.add("news-title");
newsTitleDiv2.textContent = "Sekmės istorijos";

const text2 = document.createElement("div");
text2.classList.add("text-2");
text2.textContent = "Sėkmės istorija - įsidarbinimas į Asteri";

const newsDate2 = document.createElement("div");
newsDate2.classList.add("news-date");
newsDate2.textContent = "2024-05-23";

newsItem2Big.append(nuoroda2);
newsItem2Big.append(img2);
newsItem2Big.append(newsTitleDiv2);
newsItem2Big.append(text2);
newsItem2Big.append(newsDate2);

const newsItem3 = document.createElement("div");
newsItem3.classList.add("news-item-3");
newsItems.append(newsItem3);

const newsContent = document.createElement("div");
newsContent.classList.add("news-content");
newsItem3.append(newsContent);

const nuoroda = document.createElement("a");
nuoroda.href = "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-bentley-systems/";
const img = document.createElement("img");
img.src = "https://codeacademy.lt/wp-content/uploads/2024/04/Ovidijus-Zaborskis--e1714129215786-1024x870.jpeg";
img.alt = "Image description";
img.classList.add("news-image");

const newsDetails = document.createElement("div");
newsDetails.classList.add("news-details");
const newsTitle = document.createElement("div");
newsTitle.classList.add("news-title");
newsTitle.textContent = "Sekmės istorijos";
const newsText = document.createElement("div");
newsText.classList.add("news-text");
newsText.textContent = "Sėkmės istorija - įsidarbinimas į Bentley Systems";
const newsDate = document.createElement("div");
newsDate.classList.add("news-date");
newsDate.textContent = "2024-04-25";

newsContent.append(nuoroda);
newsContent.append(img);
newsContent.append(newsDetails);
newsContent.append(newsTitle);
newsContent.append(newsText);
newsContent.append(newsDate);

const newsItem4 = document.createElement("div");
newsItem4.classList.add("news-item-4");
newsItems.append(newsItem4);

const newsContent4 = document.createElement("div");
newsContent4.classList.add("news-content");
newsItem4.append(newsContent4);

const nuoroda4 = document.createElement("a");
nuoroda4.href = "https://codeacademy.lt/sekmes-istorija-isidarbinimas-i-fresh-media/";
const img4 = document.createElement("img");
img4.src = "https://codeacademy.lt/wp-content/uploads/2024/04/DSC_0903-Milda-N-1-scaled-e1714131896738-1024x899.jpg";
img4.alt = "Image description";
img4.classList.add("news-image");

const newsDetails4 = document.createElement("div");
newsDetails4.classList.add("news-details");
const newsTitle4 = document.createElement("div");
newsTitle4.classList.add("news-title");
newsTitle4.textContent = "Sekmės istorijos";
const newsText4 = document.createElement("div");
newsText4.classList.add("news-text");
newsText4.textContent = "Sėkmės istorija - įsidarbinimas į Fresh Media";
const newsDate4 = document.createElement("div");
newsDate4.classList.add("news-date");
newsDate4.textContent = "2024-04-25";

newsContent4.append(nuoroda4);
newsContent4.append(img4);
newsContent4.append(newsDetails4);
newsContent4.append(newsTitle4);
newsContent4.append(newsText4);
newsContent4.append(newsDate4);

const newsItem5 = document.createElement("div");
newsItem5.classList.add("news-item-5");
newsItems.append(newsItem5);

const newsContent5 = document.createElement("div");
newsContent5.classList.add("news-content");
newsItem5.append(newsContent5);

const nuoroda5 = document.createElement("a");
nuoroda5.href = "ttps://codeacademy.lt/sekmes-istorija-giedrius-tumosa/";
const img5 = document.createElement("img");
img5.src = "https://codeacademy.lt/wp-content/uploads/2024/04/portrait-Giedrius-Tumosa.jpg";
img5.alt = "Image description";
img5.classList.add("news-image");

const newsDetails5 = document.createElement("div");
newsDetails5.classList.add("news-details");
const newsTitle5 = document.createElement("div");
newsTitle5.classList.add("news-title");
newsTitle5.textContent = "Sekmės istorijos";
const newsText5 = document.createElement("div");
newsText5.classList.add("news-text");
newsText5.textContent = "Sėkmės istorija - įsidarbinimas į Visma Tech";
const newsDate5 = document.createElement("div");
newsDate5.classList.add("news-date");
newsDate5.textContent = "2024-04-25";

newsContent5.append(nuoroda5);
newsContent5.append(img5);
newsContent5.append(newsDetails5);
newsContent5.append(newsTitle5);
newsContent5.append(newsText5);
newsContent5.append(newsDate5);

const newsItem6 = document.createElement("div");
newsItem6.classList.add("news-item-6");
newsItems.append(newsItem6);

const newsContent6 = document.createElement("div");
newsContent6.classList.add("news-content");
newsItem6.append(newsContent6);

const nuoroda6 = document.createElement("a");
nuoroda6.href = "https://codeacademy.lt/uz-verslo-partnerystes-codeacademy-programavimo-akademijoje-bus-atsakingas-it-ekspertas-marius-parescius";
const img6 = document.createElement("img");
img6.src = "https://codeacademy.lt/wp-content/uploads/2024/04/mp_nuotrauka.jpeg";
img6.alt = "Image description";
img6.classList.add("news-image");

const newsDetails6 = document.createElement("div");
newsDetails6.classList.add("news-details");
const newsTitle6 = document.createElement("div");
newsTitle6.classList.add("news-title");
newsTitle6.textContent = "Naujienos";
const newsText6 = document.createElement("div");
newsText6.classList.add("news-text");
newsText6.textContent = "Už verslo partnerystės CodeAcademy programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius";
const newsDate6 = document.createElement("div");
newsDate6.classList.add("news-date");
newsDate6.textContent = "2024-04-16";

newsContent6.append(nuoroda6);
newsContent6.append(img6);
newsContent6.append(newsDetails6);
newsContent6.append(newsTitle6);
newsContent6.append(newsText6);
newsContent6.append(newsDate6);

const sectionVideo = document.createElement("section");
sectionVideo.classList.add("video");
leftContainer.append(sectionVideo);

const allVideosButton = document.createElement("div");
allVideosButton.classList.add("all-videos-button");

const nuoroda10 = document.createElement("a");
nuoroda10.href = "https://codeacademy.lt/type/video/";
nuoroda10.textContent = "Visi video";

allVideosButton.append(nuoroda10);
sectionVideo.append(allVideosButton);

const H2VaizdoIrasai = document.createElement("h2");
H2VaizdoIrasai.textContent = "Vaizdo įrašai";
sectionVideo.append(H2VaizdoIrasai);

const videoItems = document.createElement("div");
videoItems.classList.add("video-items");
sectionVideo.append(videoItems);

const videoItem1 = document.createElement("div");
videoItem1.classList.add("video-1");
const iframe = document.createElement("iframe");
iframe.width = "560";
iframe.height = "315";
iframe.src = "https://www.youtube.com/embed/Rz6bswWbPqw?si=JO7T63DfL1Vp6vgc";
iframe.title = "YouTube video player";
iframe.frameBorder = "0";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.referrerPolicy = "strict-origin-when-cross-origin";
iframe.allowFullscreen = true;
videoItem1.append(iframe);
const videoTitle = document.createElement("div");
videoTitle.classList.add("video-1-title");
videoTitle.textContent = "#6 Studentės istorija: Sėkmė slypi disciplinoje";

videoItem1.append(videoTitle);
videoItems.append(videoItem1);

const videoItem2 = document.createElement("div");
videoItem2.classList.add("video-2");
const iframe2 = document.createElement("iframe");
iframe2.width = "560";
iframe2.height = "315";
iframe2.src = "https://www.youtube.com/embed/yovsPjuDElw?si=g-b3fhYCiBu7Ok64";
iframe2.title = "YouTube video player";
iframe2.frameBorder = "0";
iframe2.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe2.referrerPolicy = "strict-origin-when-cross-origin";
iframe2.allowFullscreen = true;
videoItem2.append(iframe2);

videoItems.append(videoItem2);

const videoItem3 = document.createElement("div");
videoItem3.classList.add("video-3");
const iframe3 = document.createElement("iframe");
iframe3.width = "560";
iframe3.height = "315";
iframe3.src = "https://www.youtube.com/embed/7X4iX-D6ymQ?si=PPDI5GmSGyV9ZgmI";
iframe3.title = "YouTube video player";
iframe3.frameBorder = "0";
iframe3.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe3.referrerPolicy = "strict-origin-when-cross-origin";
iframe3.allowFullscreen = true;
videoItem3.append(iframe3);

videoItems.append(videoItem3);

const rightContainer = document.createElement("div");
rightContainer.classList.add("right-container");
mainWrapper.append(rightContainer);

const sectionPodcastRadio = document.createElement("section");
sectionPodcastRadio.classList.add("podcast-radio");
rightContainer.append(sectionPodcastRadio);

const h2PodcastRadio = document.createElement("h2");
h2PodcastRadio.textContent = "Podcastai ir radijo laidos";
sectionPodcastRadio.append(h2PodcastRadio);

const radio1 = document.createElement("div");
radio1.classList.add("radio-1");
sectionPodcastRadio.append(radio1);

const topSection = document.createElement("div");
topSection.classList.add("top-section");
radio1.append(topSection);

const radioImage = document.createElement("img");
radioImage.src = "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png";
radioImage.alt = "Image description";
const spanTrukme = document.createElement("span");
spanTrukme.textContent = "Trukmė: 1:00:00";
const button = document.createElement("button");
button.classList.add("play-button");
const playIcon = document.createElement("i");
playIcon.classList.add("fas", "fa-play", "fa-2x");
button.append(playIcon);
topSection.append(button);
spanTrukme.classList.add("trukme");
radioImage.classList.add("radio-image");
topSection.append(radioImage);
topSection.append(spanTrukme);

const buttomRadio = document.createElement("div");
buttomRadio.classList.add("buttom-radio");
const h3 = document.createElement("h3");
h3.textContent = "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas";
const small = document.createElement("small");
small.textContent = "2024-06-06";
radio1.append(buttomRadio);

buttomRadio.append(h3);
buttomRadio.append(small);

const radio2 = document.createElement("div");
radio2.classList.add("radio-2");
sectionPodcastRadio.append(radio2);

const topSection2 = document.createElement("div");
topSection2.classList.add("top-section");
radio2.append(topSection2);

const radioImage2 = document.createElement("img");
radioImage2.src = "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png";
radioImage2.alt = "Image description";
const spanTrukme2 = document.createElement("span");
spanTrukme2.textContent = "Trukmė: 1:00:00";
const button2 = document.createElement("button");
button2.classList.add("play-button");
const playIcon2 = document.createElement("i");
playIcon2.classList.add("fas", "fa-play", "fa-2x");
button2.append(playIcon2);
topSection2.append(button2);
spanTrukme2.classList.add("trukme");
radioImage2.classList.add("radio-image");
topSection2.append(radioImage2);
topSection2.append(spanTrukme2);

const buttomRadio2 = document.createElement("div");
buttomRadio2.classList.add("buttom-radio");
const h32 = document.createElement("h3");
h32.textContent = "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas";
const small2 = document.createElement("small");
small2.textContent = "2024-06-06";
radio2.append(buttomRadio2);

buttomRadio2.append(h32);
buttomRadio2.append(small2);

const radio3 = document.createElement("div");
radio3.classList.add("radio-3");
sectionPodcastRadio.append(radio3);

const topSection3 = document.createElement("div");
topSection3.classList.add("top-section");
radio3.append(topSection3);

const radioImage3 = document.createElement("img");
radioImage3.src = "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png";
radioImage3.alt = "Image description";
const spanTrukme3 = document.createElement("span");
spanTrukme3.textContent = "Trukmė: 1:00:00";
const button3 = document.createElement("button");
button3.classList.add("play-button");
const playIcon3 = document.createElement("i");
playIcon3.classList.add("fas", "fa-play", "fa-2x");
button3.append(playIcon3);
topSection3.append(button3);
spanTrukme3.classList.add("trukme");
radioImage3.classList.add("radio-image");
topSection3.append(radioImage3);
topSection3.append(spanTrukme3);

const buttomRadio3 = document.createElement("div");
buttomRadio3.classList.add("buttom-radio");
const h33 = document.createElement("h3");
h33.textContent = "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas";
const small3 = document.createElement("small");
small3.textContent = "2024-06-06";
radio3.append(buttomRadio3);

buttomRadio3.append(h33);
buttomRadio3.append(small3);

const radio4 = document.createElement("div");
radio4.classList.add("radio-4");
sectionPodcastRadio.append(radio4);

const topSection4 = document.createElement("div");
topSection4.classList.add("top-section");
radio4.append(topSection4);

const radioImage4 = document.createElement("img");
radioImage4.src = "https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png";
radioImage4.alt = "Image description";
const spanTrukme4 = document.createElement("span");
spanTrukme4.textContent = "Trukmė: 1:00:00";
const button4 = document.createElement("button");
button4.classList.add("play-button");
const playIcon4 = document.createElement("i");
playIcon4.classList.add("fas", "fa-play", "fa-2x");
button4.append(playIcon4);
topSection4.append(button4);
spanTrukme4.classList.add("trukme");
radioImage4.classList.add("radio-image");
topSection4.append(radioImage4);
topSection4.append(spanTrukme4);

const buttomRadio4 = document.createElement("div");
buttomRadio4.classList.add("buttom-radio");
const h34 = document.createElement("h3");
h34.textContent = "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas";
const small4 = document.createElement("small");
small4.textContent = "2024-06-06";
radio4.append(buttomRadio4);

buttomRadio4.append(h34);
buttomRadio4.append(small4);

const sectionRenginiai = document.createElement("section");
sectionRenginiai.classList.add("renginiai");
rightContainer.append(sectionRenginiai);

const h2Renginiai = document.createElement("h2");
h2Renginiai.textContent = "Renginiai";
sectionRenginiai.append(h2Renginiai);

const event1 = document.createElement("div");
event1.classList.add("event-1");
sectionRenginiai.append(event1);

const event1img = document.createElement("img");
event1img.src = "https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-1024x576.png";
event1img.alt = "Image description";
event1img.classList.add("event-image");
event1.append(event1img);

const positionRelative = document.createElement("div");
positionRelative.style.position = "relative";
event1.append(positionRelative);

const event1date = document.createElement("div");
event1date.classList.add("date-1");
positionRelative.append(event1date);

const divEventDay = document.createElement("div");
divEventDay.classList.add("event-day");
divEventDay.textContent = "06";
event1date.append(divEventDay);

const divEventMonth = document.createElement("div");
divEventMonth.classList.add("event-month");
divEventMonth.textContent = "Birželis";
event1date.append(divEventMonth);

const eventInfo = document.createElement("div");
eventInfo.classList.add("event-info");

const h3EventAddress = document.createElement("h3");
h3EventAddress.textContent = "Upės g. 21, Greenhall 1, 10 Aukštas Ir online";
eventInfo.append(h3EventAddress);

const h2EventInfo = document.createElement("h2");
h2EventInfo.textContent = "JAVA: Kodėl ji vis dar svarbi IT rinkoje ?";
eventInfo.append(h2EventInfo);

event1.append(eventInfo);

const event2 = document.createElement("div");
event2.classList.add("event-2");

const date2 = document.createElement("div");
date2.classList.add("date-2");

const event2Day = document.createElement("div");
event2Day.classList.add("event-day");
event2Day.textContent = "30";
date2.append(event2Day);

const event2Month = document.createElement("div");
event2Month.classList.add("event-month");
event2Month.textContent = "Gegužės";
date2.append(event2Month);

event2.append(date2);

const event2Info = document.createElement("div");
event2Info.classList.add("event-info");

const h3Event2Address = document.createElement("h3");
h3Event2Address.textContent = "Upės g. 21, Greenhall 1, 10 Aukštas Ir online";
event2Info.append(h3Event2Address);

const h2Event2Info = document.createElement("h2");
h2Event2Info.textContent = "CodeAcademy Galimybės verslui";
event2Info.append(h2Event2Info);

event2.append(event2Info);

sectionRenginiai.append(event2);

const event3 = document.createElement("div");
event3.classList.add("event-3");

const date3 = document.createElement("div");
date3.classList.add("date-3");

const event3Day = document.createElement("div");
event3Day.classList.add("event-day");
event3Day.textContent = "24";
date3.append(event3Day);

const event3Month = document.createElement("div");
event3Month.classList.add("event-month");
event3Month.textContent = "Gegužės";
date3.append(event3Month);

event3.append(date3);

const event3Info = document.createElement("div");
event3Info.classList.add("event-info");

const h3Event3Address = document.createElement("h3");
h3Event3Address.textContent = "Upės g. 21, Greenhall 1, 10 Aukštas Ir online";
event3Info.append(h3Event3Address);

const h2Event3Info = document.createElement("h2");
h2Event3Info.textContent = "COMIC CON BALTICS 2024";
event3Info.append(h2Event3Info);

event3.append(event3Info);

sectionRenginiai.append(event3);
