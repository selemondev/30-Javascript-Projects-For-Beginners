const preLoader = document.querySelector(".preloader");

// set the display to none after the content has loaded

// set the network speed to 'Slow 3G' in your browser to see the preloader
window.addEventListener("load", () => {
    preLoader.style.display = "none"; 
});