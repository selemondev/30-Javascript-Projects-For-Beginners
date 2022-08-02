const zero = document.querySelector('.zero')
const twentyFive = document.querySelector(".twenty-five");
const fifty = document.querySelector(".fifty");
const seventyFive = document.querySelector(".seventy-five");
const hundred = document.querySelector(".hundred"); 
const percentText = document.querySelector(".percent");
const progressBar = document.querySelector(".bar");
zero.addEventListener("click", () => {
    progressBar.style.width = "0%";
    percentText.textContent = "0%";
});
twentyFive.addEventListener("click", () => {
    progressBar.style.width = "25%";
    percentText.textContent = "25%"
});
fifty.addEventListener("click", () => {
    progressBar.style.width = "50%";
    percentText.textContent = "50%"
});
seventyFive.addEventListener("click", () => {
    progressBar.style.width = "75%";
    percentText.textContent = "75%";
});
hundred.addEventListener("click", () => {
    progressBar.style.width = "100%";
    percentText.textContent = "100%"
});