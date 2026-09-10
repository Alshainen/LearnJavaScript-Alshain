// Spread operator = ... memungkinkan sebuah iterable 
//                   (seperti array atau string) untuk dijabarkan menjadi 
//                   elemen-elemen terpisah (membongkar elemen-elemennya)
// "Iterable" itu istilah buat "apapun yang bisa di-loop elemen-demi-elemen"

let angka = [1, 2, 3, 4];
let maks = Math.max(...angka);
let min = Math.min(...angka);
let maksDua = Math.max(angka) // Ga ke detect karena NaN, bukan Number.

console.log(maks, min, maksDua);

let nama = `Als`;
let huruf = [...nama].join(`-`);

console.log(nama, huruf);

let buah = [`apel`, `jeruk`, `mangga`];
let sayur = [`wortel`, `bayam`, `brokoli`];
let makanan = [...buah, ...sayur, `telur`, `durian`];

console.log(buah, sayur); // Output gabungan akan dipisah oleh []
console.log(makanan); // Output benar-benar digabung tanpa dipisah []


//CONTOH LAIN
let asli = [1,2,3];
let bukanSalinan = asli;      // Tanpa spread, ini cuma nunjuk ke array yang sama
bukanSalinan.push(4);
console.log(asli);            // [1,2,3,4] | Ikut berubah, padahal cuma ngepush 
                              // ke variable lain.

let salinan = [...asli];
salinan.push(4);
console.log(asli);    // [1,2,3] ga kesenggol
console.log(salinan); // [1,2,3,4] independen


// Jujur aja ga tau apakah nanti kepakai samaku atau ga sih.