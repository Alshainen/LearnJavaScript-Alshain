// Ya singkatnya objek bawaan yang punya properti dan methods.

// Contoh nilai PI
console.log(Math.PI);
// Ataupun nilai lainnya, namun untuk sekarang bukan itu yang mau dibahas.


// Round (Pembulatan angka desimal terdekat)
// misal 2.17 = 2, dan 2.51 = 3
let a = 5.7;
a = Math.round(a);
console.log(a); // Hasilnya 6 karena 5.7 itu lebih dekat ke 6.

let b = 5.4;
console.log(Math.round(b)); // Hasilnya 5 karena 5.4 itu lebih dekat ke 5.


// Floor (Hasil pembulatan ke bawah)
// misalnya 2.99 = 2, karena 2.99 itu masih dalam lingkungan 2.
let c = 2.99;
console.log(Math.floor(c));

let d = -2.99;
console.log(Math.floor(d)); // Nah, kalau ini akan jadi -3, karena ya dibawah -2 ya -3,
                            // lebih rendah, jadi bukan berarti karena dia -2.99 kalian pikir
                            // logikanya sama dengan 2.99 ya, nilai positif dan negatif beda.

let e = -2.1;
console.log(Math.floor(e)); // Ini juga hasilnya akan -3, karena memang -3 itu dibawahnya -2.


// Ceil atau juga bisa disebut Ceiling (Pembulatan ke atas, kebalikan Floor)
let f = 3.1;
console.log(Math.ceil(f));

let g = -3.1;
console.log(Math.ceil(g)); // Logikanya tinggal dibalik aja dari Floor.
                           // hasilnya -3, karena -3 lebih tinggi dari -4 pada nilai negatif.


// Trunc (Mengambil nilai bilangan bulat, dan menghilangkan desimalnya)
let h = 3.7;
console.log(Math.trunc(h)); // Mau negatif/positif, ya cuman hapus desimal aja,
                            // tanpa menjadikan nilai besar/kecil sebagai patokan.
                            // intinya cuman hapus desimal.


// Pow (Pemangkatan, sama aja kayak 2 ** 3 atau sejenisnya)
let i = 2;
let j = 3;
console.log(Math.pow(i, j));
console.log(i ** j);
console.log(2 ** 3); // Lihat, outputnya sama


// Sqrt (Akar kuadrat)
let k = 49;
console.log(Math.sqrt(k));
// Note, nilai negatif ga bisa ya, 
// karena dasarnya akar kuadarat ya ga mendefenisikan nilai negatif


// Log atau Logaritma (Berapa pangkat berapa agar hasilnya seperti nilai variabel)
let l = 30;
console.log(Math.log(l)); // Jujur ga paham kenapa hasilnya begitu, wkwk.
// Senangkepku, karena ga ada nilai pembandingnya, makanya otomatis seperti ini:
// e^3,4 yang dimana e adalah euler number (Konstanta matematika yang bernilai sekitar 2,71828 
// dan merupakan basis dari logaritma alami)

// atau kalian juga bisa dengan seperti ini:
console.log(Math.log10(l)); // 10 Pangkat berapa agar hasilnya 30 atau mendekati 30.
// Angka lain juga bisa kok, seperti log2(4) atau sejenisnya, menyesuaikan aja.


// Sin, Cos, Tan
let m = 45;
console.log(Math.sin(m));
console.log(Math.cos(m));
console.log(Math.tan(m));
// Gw ga ngerti persudutan ini, jadi ku skip aja penjelasannya, wkwk, bukan anak SMA dawg.


// Abs (Nilai Absolute, mengubah negatif ke positif)
let n = -100.40;
console.log(Math.abs(n)); // Udah itu aja fungsinya, tapi memang berguna sih.


// Sign (Menentukan tanda positif/negatif/nol dari sebuah angka)
let o = -3000.9; // Hasilnya -1 (Jika angka negatif)
let p = 3002.2; // Hasilnya 1 (Jika angka positif)
let q = 0; // Hasilnya 0 (Jika angkanya 0)
let r = -0 // Hasilnya -0 (Jika angkanya -0)
console.log(Math.sign(o));
console.log(Math.sign(p));
console.log(Math.sign(q));
console.log(Math.sign(r));


// Max / Min (Menentukan nilai maksimal(terbesar) / minimal(terkecil))
let s = 30;
let t = 90;
console.log(Math.max(s, t)); // Terbesar 90
console.log(Math.min(s, t)); // Terkecil 30


// Itu aja dulu semuanya,
// kalau ada yang kurang, silahkan dicari sendiri, wkwk.