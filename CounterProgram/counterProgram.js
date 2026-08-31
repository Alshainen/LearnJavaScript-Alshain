let kurang = document.getElementsByTagName(`button`)[0];
let reset = document.getElementsByTagName(`button`)[1];
let tambah = document.getElementsByTagName(`button`)[2];
let isi = document.getElementsByTagName(`label`)[0];
let nilai = 0;

kurang.onclick = function(){
    nilai--;
    isi.textContent = nilai;
}

reset.onclick = function(){
    nilai = 0;
    isi.textContent = nilai;
}

tambah.onclick = function(){
    nilai++;
    isi.textContent = nilai
}