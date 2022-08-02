// Storing our music,artists and their photos in an array//
const music = [{
    song : '../Music/Ed Sheeran -  I see fire.mp3',
    image : "../Artists/Ed Sheeran -1.jpg",
    artist : "Ed Sheeran ~ I See Fire",
},{
    song : '../Music/Ed Sheeran - Beautiful People (feat. Khalid) [Official].mp3',
    image : "../Artists/Ed Sheeran  - 2.jpg",
    artist : "Ed Sheeran Ft Khalid ~ Beautiful People",
}, {
    song : '../Music/Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber.mp3',
    image : "../Artists/Luis Fonsi.jpg",
    artist : "Luis Fonsi Ft Justin Bieber ~ Despacito",
}, {
    song : '../Music/Migos-Bad and Boujee.mp3',
    image : "../Artists/Migos.jpg",
    artist : "Migos Bad and Boujee",
}, {
    song : '../Music/Sam Fischer - This City feat. Anne-Marie.mp3',
    image : "../Artists/Sam Fischer.jpg",
    artist : "Sam Fischer Ft Anne-Marie ~ This City",
}, {
    song : '../Music/Shawn Mendes - Wonder.mp3',
    image : "../Artists/Shawn Mendes.jpg",
    artist : "Shawn Mendes ~ Wonder",
}, {
    song : '../Music/Shawn Mendes, Justin Bieber - Monster.mp3',
    image : "../Artists/Monster.jpg",
    artist : "Shawn Mendes Ft Justin Bieber ~ Monster",
}];
const containerEl = document.querySelector(".btn-container")
const btn = document.querySelector("#play");
const prevEl = document.querySelector("#prev");
const forwEl = document.querySelector("#forw");
const volumeEl = document.querySelector("#volume");
const countEl = document.querySelector("#count");
const audio = document.querySelector("#audio");
const btnEl = document.querySelector("#btn");
const icon = document.querySelector(".icon")
const shuffleEl = document.querySelector("#shuffle");
const repeatEl = document.querySelector(".repeat")
const imageEl = document.querySelector("#image");
const singer = document.querySelector("#singer");
let count = 0;
//When the window loads all the functionalities or items will be displayed//
window.addEventListener("DOMContentLoaded",()=> {
    Song()
});
function Song() {
    let item = music[count];
    imageEl.src = item.image;
    singer.textContent = item.artist;
    audio.src = item.song;
}
Song();
//Next button//
forwEl.addEventListener("click",()=> {
    count++;
    if(count > music.length - 1) {
        count = 0;
    };
    audio.play();
    Song();
})
//Previous button//
prevEl.addEventListener("click",()=> {
    count--;
    if(count < 0){
        count = music.length - 1
    };
    audio.play()
    Song();
});


function playSong() {
    containerEl.classList.add("play");
    btn.innerHTML = `<i class="fas fa-pause"></i>`
    audio.play()
};
function pauseSong() {
    containerEl.classList.remove("play");
    btn.innerHTML = `<i class="fas fa-play"></i>`;
    audio.pause()
};
btn.addEventListener("click",() => {
    const isPlaying = containerEl.classList.contains("play");
    if(isPlaying){
        pauseSong();
    } else {
        playSong()
    }
});
// Setting up the functionality for our volume//
function volume_change() {
    countEl.innerHTML = `${volumeEl.value}%`;
    audio.volume = volumeEl.value / 100;
    if(countEl.innerHTML > 90) {
        alert("Lengthy Listening Of Loud Music May Damage Your Ears")
    }
};
//To shuffle the songs//
shuffleEl.addEventListener("click",()=> {
    count = Math.floor(Math.random() * music.length);
    Song()
});
//To repeat the previous song//
repeatEl.addEventListener("click",()=> {
    count--;
    Song();
});
//listening for click on the button//
btnEl.addEventListener("click",() => {
    if(!btnEl.classList.contains("slide")) {
        btnEl.classList.add("slide");
        function enableMute() {
            audio.muted = true;
        }
        enableMute();
    } else {
        btnEl.classList.remove("slide");
        function disableMute() {
            audio.muted = false;
        }
        disableMute();
    }
});
