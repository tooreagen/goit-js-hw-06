let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

const btnClick = event => {
    counterValue = counterValue + Number(event.currentTarget.textContent);
    span.textContent = counterValue;
    console.log("Current value = ", counterValue);
}

btnDecrement.addEventListener("click", btnClick);
btnIncrement.addEventListener("click", btnClick);