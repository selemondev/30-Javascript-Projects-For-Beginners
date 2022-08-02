// Value input variable
const inputEl = document.getElementById('input');
// Insert number on input fied
const insertNum = num => inputEl.textContent += num;
// Do operation using eval()
const equalTo = () => (inputEl.textContent) ? inputEl.textContent = eval(inputEl.textContent) : false;
// Remove 1 val at time
const eraseNum = () => inputEl.textContent = inputEl.textContent.substring(0, inputEl.textContent.length - 1);
// Clear all the input
const clearInput = () => inputEl.textContent = '';