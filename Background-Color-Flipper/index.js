const colors = ["#FF0000","#fff","#000","	#00FF00","	#2E8B57","	#00FFFF","	#008080","	#EE82EE","	#8B008B","#DC143C","#FF7F50"];
let btnEl = document.querySelector("#btn-el");
let colorEl = document.querySelector("#color-el");
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
console.log(getRandomNumber());
btnEl.addEventListener("click",function(){
    const theme = getRandomNumber();
    console.log(theme)
    document.body.style.backgroundColor = colors[theme];
    colorEl.textContent = colors[theme]
})