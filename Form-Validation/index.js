const formEl = document.querySelector("#form");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmPassword");
const errorEl = document.querySelector("#error");
const successEl = document.querySelector("#success");

// validate the form
formEl.addEventListener("submit",(e) => {
    e.preventDefault();
    // check if the passwords match
    if(passwordEl.value !== confirmPasswordEl.value) {
        errorEl.textContent = "Passwords do not match!";
        setTimeout(() => {
            errorEl.textContent = ""
        },2000)
    }
    else {
        successEl.textContent = "Password match!";
        setTimeout(() => {
            successEl.textContent = ""
        },2000)
    }
})
