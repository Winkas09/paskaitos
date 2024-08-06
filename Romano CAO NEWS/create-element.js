export default function createElement(className, type = "div", text = "") {
  const element = document.createElement(type);

  if (className) {
    element.classList.add(className);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}
