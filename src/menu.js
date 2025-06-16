import carbonaraImg from "./carbonara.png";
import pepeImg from "./pepe.png";
import tralaImg from "./tralarelo.png";

export default function menuPage() {
  const carbonara = createMenuElement(
    carbonaraImg,
    "Carbonara",
    "Fatty cured pork, hard cheese, eggs, salt, and black pepper"
  );
  const brainrot = createMenuElement(tralaImg, "Tralarelo", "Italian Brainrot");
  const pepe = createMenuElement(
    pepeImg,
    "Cacio e pepe",
    "The dish contains grated pecorino romano and black pepper with tonnarelli or spaghetti"
  );

  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(carbonara);
  menuContainer.appendChild(brainrot);
  menuContainer.appendChild(pepe);
  content.appendChild(menuContainer);
}

function createMenuElement(imgSrc, header, text) {
  const menuItem = document.createElement("div");
  const itemImg = document.createElement("img");
  const itemHeader = document.createElement("h2");
  const itemText = document.createElement("p");

  itemImg.src = imgSrc;
  itemHeader.textContent = header;
  itemText.textContent = text;

  menuItem.classList.add("menu-item");
  itemText.classList.add("menu-text");
  itemImg.classList.add("item-img");

  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemHeader);
  menuItem.appendChild(itemText);

  return menuItem;
}
