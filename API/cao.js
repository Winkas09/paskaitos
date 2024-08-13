// cao 1

const renderUserCard = (user) => {
  const img = document.createElement("img");
  img.src = user.picture.large;
  img.alt = `${user.name.first} profile picture`;

  const intro = document.createElement("h4");
  intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

  const contacts = document.createElement("h5");
  contacts.innerText = user.email;

  const card = document.createElement("div");
  card.append(img, intro, contacts);
  document.body.append(card);
};

const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (response.ok) {
      const data = await response.json();
      renderUserCard(data.results[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchRandomUser();

// cao 2

const checkIfPersonVIP = (guests, guestName) => {
  const guest = guests.find((guest) => guest.name === guestName);
  document.body.innerText = guest ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP` : `${guestName} isn't found in the guest list`;
};

const fetchPartyGuests = async () => {
  try {
    const response = await fetch("https://party-wedding.glitch.me/v1/party");
    if (response.ok) {
      const guests = await response.json();
      checkIfPersonVIP(guests, "Kristupas Lapeika");
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests();
