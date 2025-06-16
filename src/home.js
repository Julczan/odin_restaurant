import cookImage from "./images/cook.jpg";

export default function homePage() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  const headerText = createText("Best Italian Place in Crakow");
  const belowText = createText("Order Online!");

  image.src = cookImage;
  image.alt = "cook image";

  content.appendChild(headerText);
  content.appendChild(image);
  content.appendChild(belowText);
}

function createText(paragraph) {
  const text = document.createElement("div");
  text.textContent = paragraph;
  return text;
}
