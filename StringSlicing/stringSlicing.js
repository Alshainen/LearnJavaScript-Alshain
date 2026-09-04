// Memotong atau mengambil bagian dari string.
// string.slice(start, end);

let nama = `Airi Aquila`;

console.log(nama.slice(0, 4));
console.log(nama.slice(5, 12));
// Space juga dihitung.
// Kalau bagian terakhir memang udah nama belakang,
// maka endingnya ga perlu diisi.
console.log(nama.slice(5));
// Seperti itu.

console.log(nama.slice(-6));
// Mulai dari akhir (tapi tenang, huruf yang disusun ga kebalik kok)

// Kalau mau lebih dinamis/lebih teratur:
console.log(nama.slice(0, nama.indexOf(` `)));
// Batasnya adalah space.
console.log(nama.slice(nama.indexOf(` `) + 1));
// +1 agar space ga include di last name.

console.log();

// Contoh skenario:
let namaEmail = `airiku@gmail.com`;
let userName = namaEmail.slice(0, namaEmail.indexOf(`@`));
let extention = namaEmail.slice(namaEmail.indexOf(`@`) + 1);
console.log(`User: ${userName}`);
console.log(`Extention: ${extention}`);
console.log(`Email full: ${namaEmail}`);


// Catatan: Lesson sampai sini bakalan sulit atau mungkin mustahil?
// jika secara dinamis mengambil lebih dari 2 kata.
// itu harus pakai split, atau function jika benar-benar ingin.