// DOM - Document Object Model

// Paselektinti HTML elementą
let paragraph = document.querySelector("p");
// paragraph.textContent = 'Labas <span style="color: red;">vakaras</span>'
paragraph.innerHTML = 'Labas <span style="color: red;">vakaras</span>';

// Sukurti HTML elementą
let spanElement = document.createElement("span");
spanElement.textContent = "!";

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą
spanElement.remove();

let newParagraph = document.createElement("p");
newParagraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam temporibus illum architecto aperiam sint excepturi fuga ipsum sit tempora dolor, sunt enim! Obcaecati nisi inventore dolorem quos nulla natus accusantium.";

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = "pirma-klase";

// newParagraph.className = 'antra-klase'
// newParagraph.className = newParagraph.className + ' antra-klase'
newParagraph.className += " antra-klase";

// Prideda klasę prie HTML elemento
newParagraph.classList.add("trecia-klase");
newParagraph.classList.add("ketvirta-klase", "penkta-klase");

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove("pirma-klase");
newParagraph.classList.remove("sesta-klase");
newParagraph.classList.remove("antra-klase", "trecia-klase");

// Pakeičia klasę HTML elemente
newParagraph.classList.replace("ketvirta-klase", "sesta-klase");

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle("toggle-klase"); // prideda
newParagraph.classList.toggle("toggle-klase"); // nuima
newParagraph.classList.toggle("toggle-klase"); // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains("pirma-klase"));
console.log(newParagraph.classList.contains("penkta-klase"));

console.log(newParagraph.className);

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = "paragrafo-id";

let link = document.createElement("a");
link.textContent = "nuoroda";
newParagraph.after(link);
link.classList.add("link");
// link.href = 'https://www.google.com'
// link.target = '_blank'
// link.title = 'cia yra nuoroda'

// link['href'] = 'https://www.google.com'
// link['target'] = '_blank'
// link['title'] = 'cia yra nuoroda'

link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");
link.setAttribute("title", "cia yra nuoroda");
link.setAttribute("id", "nuorodos-id");

link.removeAttribute("title");
