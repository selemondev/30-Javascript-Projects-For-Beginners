const degree = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// setting up our functionalities

// The setInterval function takes a callback function as its argument, which gets executed every specified interval of time.
// Within the callback function:
// he current date and time is obtained using the Date object.
// The current hour, minute, and second are obtained using the getHours(), getMinutes(), and getSeconds() methods of the Date object, respectively.
// The hour, minute, and second are converted to angles in degrees, which will be used to rotate the clock hands.
// The clock hands are updated by setting the "transform" property of the corresponding HTML elements to the calculated rotation in degrees.
setInterval(() => {
 let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * degree;
 let ss = day.getSeconds() * degree;

 hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
 mn.style.transform = `rotateZ(${mm}deg)`;
 sc.style.transform = `rotateZ(${ss}deg)`;
})