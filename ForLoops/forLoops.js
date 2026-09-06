// Ulangi kode dengan batasan yang ditentukan.

for(let angka = 1; angka <= 3; angka++){
    console.log(angka);
}

console.log(`Selamat tahun baru!`);

for (let index = 0; index < 10; index++) {
    if (index == 7) {
        continue;
        // Kode akan terus berlanjut dengan skip angka 7.
        // Kalau di break, maka kode akan berhenti di angka 7
    }
    console.log(index);
}