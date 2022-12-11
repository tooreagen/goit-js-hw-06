const body = document.body;
const buttonChangeColor = document.querySelector(".change-color");
const spanDisplayColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanDisplayColor.textContent = color;
}

buttonChangeColor.addEventListener("click", setColor);