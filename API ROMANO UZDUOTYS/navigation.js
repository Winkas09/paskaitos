export default function navigation() {
  const header = document.createElement("header");

  const logoWrapper = document.createElement("div");
  logoWrapper.classList.add("logo-wrapper");

  const logoLink = document.createElement("a");
  logoLink.href = "./";
  const logoImage = document.createElement("img");
  logoImage.src = "./home.png";
  logoImage.alt = "Logo";
  logoLink.classList.add("logo-link");
  logoLink.append(logoImage);
  // logoLink.textContent = "LOGO";
  logoWrapper.append(logoLink);

  const navigationWrapper = document.createElement("nav");
  navigationWrapper.classList.add("navigation-wrapper");

  const navigationList = document.createElement("ul");
  navigationList.classList.add("navigation-list");
  navigationWrapper.append(navigationList);

  const navListData = [
    // {
    //   title: "Home",
    //   url: "./",
    // },
    {
      title: "Posts",
      url: "./posts.html",
    },
    {
      title: "Users",
      url: "./users.html",
    },
    {
      title: "Albums",
      url: "./albums.html",
    },
  ];

  navListData.forEach((item) => {
    const { title, url } = item;
    const navigationItem = document.createElement("li");
    navigationItem.classList.add("navigation-item");

    const navigationLink = document.createElement("a");
    navigationLink.classList.add("navigation-link");
    navigationLink.href = url;
    navigationLink.textContent = title;
    navigationItem.append(navigationLink);

    navigationList.append(navigationItem);
  });

  header.append(logoWrapper, navigationWrapper);

  return header;
}
