let hourEle = document.getElementsByClassName('hour')
let minEle = document.getElementsByClassName('minutes')
let secEle = document.getElementsByClassName('sec')
let ampmEle = document.getElementsByClassName('ampm')

function currentTime (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h>12){
        ampm = 'PM'
    }

    h =  h < 10 ? '0' + h : h;
    m =  m < 10 ? '0' + m : m;
    s =  s < 10 ? '0' + s : s;

  document.querySelector('.hour').innerText = h
  document.querySelector('.minutes').innerText = m
  document.querySelector('.sec').innerText = s
  document.querySelector('.ampm').innerText = ampm

  setTimeout(() => {
    currentTime()
  }, 1000);
   
}


currentTime()
