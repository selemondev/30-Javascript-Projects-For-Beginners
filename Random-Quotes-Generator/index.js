//quotes//
const quotes = [{
    id : 1,
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author : "~Nelson Mandela"
}, {
    id : 2,
    quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author : "~Steve Jobs"
}, {
    id : 3,
    quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author : "~James Cameron"
}, {
    id : 4,
    quote : "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author : "~ Hellen Keller"
}, {
    id : 5,
    quote : "Do not go where the path may lead, go instead where there is no path and leave a trail",
    author : "~ Ralph Waldo Emerson"
}];
const authors = document.querySelector("#author");
const quoteEl = document.querySelector("#quote")
const startEl = document.querySelector("#btn");
const closeEl = document.querySelector(".close");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const modal = document.querySelector(".modal-container");
//targeting the button that will open the modal//
startEl.addEventListener("click",()=> {
    modal.classList.add("hide");
});
//target the button arrow that will close the modal //
closeEl.addEventListener("click",()=> {
    modal.classList.remove("hide");
});
//targeting the next and previous arrows//
let currentQuote = 0;
window.addEventListener("DOMContentLoaded",() => {
    showQuote();
});
function showQuote() {
    let items = quotes[currentQuote];
    quoteEl.textContent = items.quote;
    authors.textContent = items.author;
};
right.addEventListener("click",() => {
    currentQuote++;
    if(currentQuote > quotes.length - 1) {
        currentQuote = 0;
    }
    showQuote()
});
left.addEventListener("click",() => {
    currentQuote--;
    if(currentQuote < 0) {
        currentQuote = quotes.length - 1;
    }
    showQuote()
});