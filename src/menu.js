import carbonaraImg from "./images/carbonara.png";
import pepeImg from "./images/pepe.png";
import tralaImg from "./images/tralarelo.png";
import olioImg from "./images/olio.png";
import arrabiataImg from "./images/arrabiata.png";
export default function menuPage() {
  const carbonara = createMenuElement(
    carbonaraImg,
    "Carbonara",
    "Fatty cured pork, hard cheese, eggs, salt, and black pepper"
  );
  const trala = createMenuElement(tralaImg, "Tralalero", "Italian Brainrot");
  const pepe = createMenuElement(
    pepeImg,
    "Cacio e pepe",
    "The dish contains grated pecorino romano and black pepper with tonnarelli or spaghetti"
  );

  const tung = createMenuElement(
    arrabiataImg,
    "Arrabiata",
    "made with tomatoes, garlic, peperoncino, parsley, and extra virgin olive oil"
  );

  const olio = createMenuElement(
    olioImg,
    "Aglio e olio",
    "This iconic pasta is a classic example of cucina povera, making the most of simple ingredients."
  );

  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(carbonara);
  menuContainer.appendChild(trala);
  menuContainer.appendChild(pepe);
  menuContainer.appendChild(tung);
  menuContainer.appendChild(olio);
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
