const input = document.querySelector("#validation-input");

const inputValidation = (event) => {
    if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
        if (input.classList.contains("valid")) {
            input.classList.remove("valid");
        }
        input.classList.add("invalid");
    } else {
        if (input.classList.contains("invalid")) {
            input.classList.remove("invalid")
        }
        input.classList.add("valid");
    }
}

input.addEventListener("blur", inputValidation);