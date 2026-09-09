// function = bagian kode yang bisa dipakai ulang.
//            Deklarasikan kodenya sekali, pakai kapan pun kamu mau.
//            Panggil function itu untuk menjalankan kode tersebut.

function halo(nama, umur) { // Dek nama variabel bisa di situ.
    console.log(`Halo!`);
    console.log(`Halo Bung!`);
    console.log(`Halo ${nama}`);
    console.log(`Halo ${umur} tahun!`);
}

halo(`Ariel`, 20); // Lalu isi variabelnya bisa di sini.
halo(`Alshain`, 21);

// Pastikan urutan deklarasi variabel di funciton,
// sesuai dengan urutan isi di pemanggilannya.

function angka(a, b) {
    return a - b;
}
console.log(angka(2, 1));

// Pokoknya gitu lah ya.
// Emang kepakai di beberapa moment aja.
// Tapi sangat kepakai kalau beneran butuh.