const listCategories = document.querySelector("#categories");
const listItem = listCategories.querySelectorAll(".item");
const numberOfCategories = listCategories.childElementCount;

console.log("Number of categories:", numberOfCategories);

listItem.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.firstElementChild.nextElementSibling.childElementCount);  
})