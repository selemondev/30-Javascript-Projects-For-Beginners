const dateEl = document.querySelector("#date");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const textEl = document.querySelector(".text");
const ageBtnEl = document.querySelector(".age-btn")
// age functionality
const getAge = () => {
    const fullDate = new Date();
    let date = fullDate.getDate();
    let month = 1 + fullDate.getMonth();
    let year = fullDate.getFullYear();
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if( dateEl.value > date ) {
        date = date + monthDays[ month - 1 ];
        month = month - 1;
    };

    if ( monthEl.value > month ) {
        month = month + 12;
        year = year - 1;
    };

    const d = date - dateEl.value;
    const m = month - monthEl.value;
    const y = year - yearEl.value;

    textEl.textContent = `You are ${y} Years ${m} Month(s) ${d} Days old.`
};

ageBtnEl.addEventListener("click", () => {
    getAge();
})