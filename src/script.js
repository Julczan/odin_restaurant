import "./styles.css";
import cookImage from "./cook.jpg";

const content = document.querySelector("#content");
const image = document.createElement("img");
const text = document.createElement("div");

text.textContent = "Best Italian Food in Crakow";
image.src = cookImage;

content.appendChild(text);
content.appendChild(image);

console.log(content);
