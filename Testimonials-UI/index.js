const leftEl = document.querySelector("#left");
const rightEl = document.querySelector("#right");
const imgEl = document.querySelector("#img");
const workEl = document.querySelector("#work");
const feedBackEl = document.querySelector("#feedback");
const themeEl = document.querySelector("#theme");
let isDark = true;
const currentTheme = localStorage.getItem("theme");
const pageTheme = document.querySelector("body")
if(currentTheme === "dark") {
    pageTheme.classList.add("dark-theme")
    themeEl.innerHtml =  "<i class='bx bx-sun'></i>"
} else {
    themeEl.innerHtml =  "<i class='bx bx-moon'></i>"
};

function themeMode() {
    isDark = !isDark;
    isDark ? themeEl.innerHtml = "<i class='bx bx-moon'></i>" :  themeEl.innerHtml = "<i class='bx bx-sun'></i>";
    pageTheme.classList.toggle("dark-theme");

    let theme = "light";

    if(pageTheme.classList.contains("dark-theme")) {
        theme = "dark"
    };
    localStorage.setItem("theme",theme)
}
themeEl.addEventListener("click",themeMode)
const testimonials = [
    {
        id:1,
        work:"Tech Consultant",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!",
        img:"https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    },
    {
        id:2,
        work:"Software Developer",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!",
        img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    },
    {
        id:3,
        work:"Open Source",
        testimonial:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias accusantium cumque ullam vero labore id error harum aperiam expedita. Temporibus dolorem, asperiores eos rem ipsum vitae hic perferendis dignissimos quis cupiditate!",
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=2&fit=crop&h=50&w=50"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    show()
})
let itemCount = 0;
function show() {
    let feedback = testimonials[itemCount];
    imgEl.src = feedback.img;
    workEl.textContent = feedback.work;
    feedBackEl.textContent = feedback.testimonial; 
}
show();

leftEl.addEventListener("click", () => {
    itemCount--;
    if(itemCount < 0) {
        itemCount = testimonials.length - 1;
    };
    show()
});
rightEl.addEventListener("click", () => {
    itemCount++;
    if(itemCount > testimonials.length - 1) {
        itemCount = 0;
    };
    show()
})
