const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");
const masEl = [];

ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  masEl.push(li);
})

ul.append(...masEl);