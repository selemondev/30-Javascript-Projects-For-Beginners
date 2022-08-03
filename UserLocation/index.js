// Get your API_KEY from "https://opencagedata.com/api"

const button = document.querySelector("button");
const YOUR_API_KEY = "";
button.addEventListener("click", ()=>{
    if(navigator.geolocation){
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${YOUR_API_KEY}`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        button.innerText = `${county} ${postcode}, ${country}`;
    }).catch(()=>{
        button.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
};

// coded by 'codingnepal' and modified and updated by 'selemondev'