// Mengubah tipe variabel.

/*
let siswa = prompt(`Ada berapa siswa?`);
siswa += 4;

document.getElementsByTagName(`p`)[0].textContent = siswa;
*/
// Hasilnya akan (contoh aku bilang ada 4 siswa), maka output hasil = 44, bukan 8.
// Itu karena nilai Prompt = String, bukan Number defaultnya.

let siswa = prompt(`Ada berapa siswa?`);
siswa = Number(siswa); // Ini yang set hasil input prompt kita jadi Number
siswa += 5;

document.getElementsByTagName(`p`)[0].textContent = siswa;