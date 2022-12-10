const form = document.querySelector(".login-form");

const regFormVerification = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if ((email.value && password.value) === "") {
        alert("Заповніть всі поля!");
        return;
    } else 
    {
        const userData = {
            email: email.value,
            password: password.value,
        }
        console.log(userData);
        event.currentTarget.reset();
    }
}

form.addEventListener("submit", regFormVerification);