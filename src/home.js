import cookImage from "./cook.jpg";

export default function homePage() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  const text = document.createElement("div");

  text.textContent = "Best Italian Food in Crakow";
  image.src = cookImage;
  image.alt = "cook image";

  content.appendChild(text);
  content.appendChild(image);
}
