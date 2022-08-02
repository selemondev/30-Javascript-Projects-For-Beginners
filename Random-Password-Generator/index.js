const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const inputEl = document.querySelector(".input");

// password functionality
const generatePassword = () => {
    const chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    const passwordLength = 20;
    let password = "";

    for( let i = 0; i < passwordLength; i++ ) {
        password += chars[Math.floor(Math.random() * chars.length )];
    };

    inputEl.value = password;
};

// clear input after copying password;
const clearInput = () => {
    inputEl.value = "";
}

generateBtn.addEventListener("click", () => {
    generatePassword();
});


// copy password
copyBtn.addEventListener("click", () => {
    if ( inputEl.value !== "") {
        navigator.clipboard.writeText(inputEl.value);
        alert(`Copied ${inputEl.value} to clipboard`);
    };

    clearInput()
})