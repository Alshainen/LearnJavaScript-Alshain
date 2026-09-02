let a = Math.random(); // Ini akan generate angka random, 
                       // antara 0 atau 1 (alias nol desimal)
console.log(a);

// Kalau mau random antara 0 sampai 5:
let b = Math.random() * 6;
console.log(b);

// Kalau pengen hasilnya ga desimal:
let c = Math.floor(Math.random() * 2);
console.log(c);
// Kenapa floor? Agar lebih jelas,
// karena kalau round itu mencari yang terdekat,
// sedangkan ceil pembulatan ke atas.
// Karena kita mau 2.999 sekian itu masih kategori angka 2,
// maka kita pakai floor agar hasilnya 2 dan bukan 3.

// Kalau pengen ubah angka awal:
let d = Math.floor(Math.random() * 4) + 1; // 1 sampai 4
console.log(d);

// Cara diatas, tapi angka 4 nya tidak akan pernah keluar:
let e = Math.floor(Math.random() * (4 - 1)) + 1; // 1 sampai 3
console.log(e);
// Rumusnya : (max - min) + min