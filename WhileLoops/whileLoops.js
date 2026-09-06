// Ulangi kode saat kondisinya true.

let nama = `Andi`;
while(nama === ``){ // Code akan terus berjalan tanpa akhir.
                    // Tanpa akhir (Faktornya memang karena ga ada break, tapi kalau dikasih break, maka jelas kode dibawah akan bekerja dan skip while ini.).
                    // Hati-hati bisa menyebabkan crash kalau device kamu low.
    console.log(`Namamu tidak valid.`);
}

console.log(`Halo ${nama}`);


let namaKu = ``;
while (namaKu === `` || namaKu === null) {
    namaKu = prompt(`Masukkan namamu:`);
    // Popup di web akan terus muncul sampai kamu mengetikkan namamu.
    // Di moment seperti inilah while loops diperlukan, dan di moment lain yang serupa.
    // Karena ada or null, meskipun di cancel, tetap dipaksa untuk mengisi nama.
}

console.log(`Halo ${namaKu}`);


// Variasi While Loops: Do

do{
    let namaMu = prompt(`Ketik namamu`);
}while (namaMu === `` || namaMu === null)

console.log(`Halo ${namaMu}`);



// Lebih guna pakai do dulu atau while?
// Ga tau, pakai aja sesuka hatimu.
/*
    Tapi aku lebih suka while duluan. Kenapa?
    Jika kondisi sesuai dengan yang diinginkan, dan do duluan,
    maka kalian masih tetap harus melewati step yang diberikan.

    Sedangkan While duluan,
    jika kondisi sesuai dengan yang diinginkan,
    maka kalian tidak perlu melewati step yang diberikan.
*/