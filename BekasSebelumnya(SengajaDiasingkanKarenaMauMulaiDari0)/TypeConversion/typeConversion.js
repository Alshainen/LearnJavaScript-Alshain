/*
    Type Conversion = mengubah tipe data suatu nilai
                      menjadi tipe data lain.
                      (strings, numbers, booleans)
*/

let myUmur = 0;

document.getElementsByTagName("button")[0].onclick = function(){
    myUmur = document.getElementsByTagName("input")[0].value;
    myUmur = Number(myUmur); // Ini wajib dibuat agar hasilnya benar-benar menjadi Number, bukan string.
    // Kalau ga pakai, maka pas lu ketik 12, di teks malah jadi 121, bukan 13.
    // Penyebabnya karena input itu masih string.
    // Btw kalau lu ngetik selain murni angka, maka hasilnya error ya.
    myUmur += 1;
    document.getElementsByTagName("p")[1].textContent = `umurmu ${myUmur} tahun ya?`;
}