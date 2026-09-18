// Callbacks =  fungsi yang dilewatkan/digunakan sebagai argumen ke fungsi lain.
// digunakan untuk menangani operasi asinkron:
// 1. Membaca file
// 2. Permintaan jaringan
// 3. Berinteraksi dengan database
// 
// "Hei, kalau sudah selesai, panggil ini selanjutnya."

function halo(sambungan) {
    console.log(`halo`);
    sambungan(); // Untuk mengluarkan output sambungannya.
}

function bye() {
    console.log(`bye`);   
}

halo(bye);


// Contoh lain:
function angka(sambungan, x, y, sambunganDua) {
    let hasil = x * y + x;
    sambungan(hasil);
    // Jika ada nilai yg harus diberikan,
    // maka sertakan hasil nilai itu didalam sambungannya!

    sambunganDua(x * y + x);
    // Atau simpelnya begini!
}

function tampilan(nilai) {
    console.log(nilai);
}

angka(tampilan, 10, 7, tampilan);