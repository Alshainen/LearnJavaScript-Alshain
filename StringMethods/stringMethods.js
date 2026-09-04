// Ya intinya string, wkwk.

let nama = ` Alshainn a`;
console.log(nama.charAt(0));
// Mengambil huruf pertama pada string.
// 0 = huruf pertama, 1 = huruf kedua, dst.

console.log(nama.indexOf(`a`));
// Mencari huruf tersebut terlihat pada urutan keberapa.
// Note: Cuman huruf yang pertama terlihat aja.

console.log(nama.lastIndexOf(`a`));
// Sama kayak indexOf, tapi ini carinya dari belakang, bukan depan.

console.log(nama.length);
// Mencari total ada berapa huruf pada string.
// Spasi juga dihitung ya.

console.log(nama.trim());
// Menghilangkan space/area kosong di awal/akhir teks.
// Untuk ditengah tidak ya.

console.log(nama.toUpperCase());
// Kapital semua.

console.log(nama.toLowerCase());
// Kecil semua

console.log(nama.repeat(10));
// Mengulangi teks di output sebanyak 10 teks yang sama.
// Note: mengulanginya bukan dari baris baru.

let hasilNama = nama.startsWith(` `);
let hasilNama2 = nama.startsWith(`c`);
console.log(hasilNama, hasilNama2);
// Dipakai untuk mengecek apakah sebuah string diawali 
// dengan karakter/substring tertentu. 
// Hasilnya berupa true atau false.
let contohHasilNama = hasilNama ? `Nama tidak diperbolehkan diawali dengan area kosong atau spasi!` : `Nama lu ${nama}.`;
console.log(contohHasilNama);

let hasilNama3 = nama.endsWith(`a`);
console.log(hasilNama3);
let contohHasilNama3 = hasilNama3 ? `Nama kamu aman.` : `Nama tidak boleh diakhiri area kosong.`;
console.log(contohHasilNama3);
// Sama aja kayak startWith, cuman ini diakhiri, bukan diawali.

let hasilNama4 = nama.includes(`a`);
console.log(hasilNama4);
let contohHasilNama4 = hasilNama4 ? `Nama tidak boleh ada huruf a!` : `Nama kamu aman, tidak ada huruf a.`;
console.log(contohHasilNama4);
// Kalau startWith itu diawal, dan endWith diakhir,
// Maka inCludes itu dimana aja,
// jika terdeteksi ada terdapat karakter/substring tertentu,
// maka akan ke trigger.

console.log(nama.replaceAll(`a`, `b`));
// Mengganti semua `a` dengan `b`(a jadi b)

console.log(nama.padStart(17, `AYo`));
// Menambahkan karakter diawal string sampai mencapai batas tertentu.
// Logikanya: Jika panjang string awal = 11,
// maka perlu ketik 12 untuk menampilkan 1 karakter,
// 13 untuk 2 karakter, dan seterusnya.
// Karena nama ku length nya 11, dan padStart karakterku 3 karakter,
// maka aku perlu buat angkanya minimal 15 untuk menampilkan
// full karakter, dan 17 untuk pengulangan karakternya (jadi 2 AYo)

console.log(nama.padEnd(19, `YOyO`));
// Logikanya sama kayak padStart,
// ini menambahkan diakhir aja.
/*
    AYo itu 3 karakter, dan YOyO itu 4, 
    lalu kenapa dari 17 ke 19, bukan 18??
    kan cuman beda 1?

    Karena "beda 1 karakter" itu berlaku per satu kali pengulangan, 
    bukan berlaku sekali doang buat total.

    AYo = 3 karakter, 2 kali pengulangan = 2*3=6, 11(length)+6 = 17.
    YOyO = 4, 2 pengulangan = 2*4=8, 11+8 = 19.

    Itulah mengapa YOyO 19, dan AYo 17.
*/