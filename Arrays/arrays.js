// Array = struktur seperti variabel yang dapat menampung
//         lebih dari 1 nilai

let buah = [`apel`, `jeruk`, `anggur`];
// Ini array

console.log(buah);
// Jika log variabel langsung, maka semua array akan masuk ke log.

console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);
// Pakai index untuk select

buah.push(`mangga`);
// Menambahkkan element ke akhir (nambahin isi bagian akhir array.)
console.log(buah[3]);

buah.push(`strawberry`);
buah.pop();
// Menghapus bagian akhir elemen (yaitu strawberry)
console.log(buah[4]);

buah.unshift(`kelapa`);
// Menambahkan ke awal array.
console.log(buah);

buah.unshift(`melon`);
buah.shift();
// Menghapus bagian awal array (yaitu melon)
console.log(buah);

let jumlahBuah = buah.length;
// Jumlah buah yang ada.
console.log(jumlahBuah);
// Di awal memang cuman 3 buah.
// Tapi ingat, kita ada menambahkan 2 lagi di contoh.
// Mangga dan Kelapa, total = 5 buah.

// Bisa pakai for loops untuk menampilkan semuanya sekaligus:
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}
console.log();

// Atau reverse:
for (let a = buah.length; a >= 0; a--) {
    console.log(buah[a]);
}
console.log();

// Shortcut tampilkan semua:
for (let buahan of buah){
    console.log(buahan);
}


console.log(buah.sort().reverse());
// Urutkan isi array dari belakang.