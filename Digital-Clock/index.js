const degree = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// defining our functionalities
setInterval(() => {
 let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * degree;
 let ss = day.getSeconds() * degree;

 hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
 mn.style.transform = `rotateZ(${mm}deg)`;
 sc.style.transform = `rotateZ(${ss}deg)`;
})