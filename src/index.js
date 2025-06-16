import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => homeContent());
menuBtn.addEventListener("click", () => menuContent());
contactBtn.addEventListener("click", () => contactContent());

homePage();

function homeContent() {
  content.textContent = "";
  homePage();
}

function menuContent() {
  content.textContent = "";
  menuPage();
}

function contactContent() {
  content.textContent = "";
  contactPage();
}
