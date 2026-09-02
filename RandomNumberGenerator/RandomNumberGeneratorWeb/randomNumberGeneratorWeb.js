let a = document.getElementsByTagName(`button`)[0];
let b = document.getElementsByTagName(`p`)[0];
let min = 1;
let max = 10;

let r;

a.onclick = function(){
    r = Math.floor(Math.random() * max) + min;
    b.textContent = r;
}