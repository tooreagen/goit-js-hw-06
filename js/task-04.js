let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

const increment = event => {
    counterValue = counterValue += 1;
    span.textContent = counterValue;
    console.log("Current value = ", counterValue);
}

const decrement = event => {
    counterValue = counterValue -= 1;
    span.textContent = counterValue;
    console.log("Current value = ", counterValue);
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);