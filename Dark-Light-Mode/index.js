const btn = document.querySelector("#btn");

// listening for the click on the button
btn.addEventListener("click", () => {
    if(!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        btn.classList.add("dark");
        // change the background color to black when the button is clicked
        document.body.style.backgroundColor = "#000";

    } else {
        btn.classList.remove("slide");
        document.body.style.backgroundColor = "#fff";
        btn.classList.remove("dark");
    }
})