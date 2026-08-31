const kurang = document.getElementsByTagName("button")[0];
const reset = document.getElementsByTagName("button")[1];
const tambah = document.getElementsByTagName("button")[2];
const angkaTotal = document.getElementsByTagName("p")[0];

let angka = 0;

kurang.onclick = function(){
    angka--;
    angkaTotal.textContent = angka;
}

reset.onclick = function(){
    angka = 0;
    angkaTotal.textContent = angka;
}

tambah.onclick = function(){
    angka++;
    angkaTotal.textContent = angka;
}

/*
    Intinya gampang banget, kita cuman perlu deklarasi
    variabelnya (biar lebih mudah kedepannya),
    setelah itu tinggal mainin function onlick aja.
*/