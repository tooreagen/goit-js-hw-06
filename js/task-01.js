const ul = document.getElementById("categories");
const li = ul.getElementsByClassName("item");
const numberOfCategories = ul.childElementCount;

console.log("Number of categories:", numberOfCategories);

for (const itemLi of li) {
    console.log("Category:", itemLi.firstElementChild.textContent);
    console.log("Elements:", itemLi.firstElementChild.nextElementSibling.childElementCount);
}