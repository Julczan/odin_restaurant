export default function contactPage() {
  const content = document.querySelector("#content");
  const contactDiv = createContactDiv("Contact us:", "+123123123");

  content.appendChild(contactDiv);
}

function createContactDiv(paragraph, number) {
  const text = document.createElement("div");
  const phoneNum = document.createElement("div");
  text.textContent = paragraph;
  phoneNum.textContent = number;

  text.appendChild(phoneNum);

  return text;
}
