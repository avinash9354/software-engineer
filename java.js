let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

setInterval(()=>{
    let  day = new Date();
    let  hh = day.getHours() * 30;
    let  mm = day.getMinutes() * 6;
    let  ss = day.getSeconds() * 6;
    
hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

// Digital Clock Code
let hour = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

var am = h >=12 ? 'PM' : 'AM';

hour.innerHTML = h;
minute.innerHTML  =m;
seconds.innerHTML = s;
})