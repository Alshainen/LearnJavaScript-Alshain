// Rest parameters = (...rest) memungkinkan sebuah fungsi bekerja dengan jumlah 
//                   argumen yang bervariasi dengan cara mengumpulkannya 
//                   ke dalam sebuah array.

// Singkatnya:
// Spread = mengembangkan sebuah array menjadi elemen-elemen terpisah.
// Rest = mengumpulkan elemen-elemen terpisah menjadi sebuah array.

let buah1 = `apel`;
let buah2 = `pisang`;
let jumlahBuah = 4;

function c(...buahan) {
    console.log(buahan);
}

c(buah1, buah2, jumlahBuah);
// Hasilnya semua menjadi Array.


function myBuah(...buahan) {
    return buahan;
}

console.log(myBuah(buah1, buah2, jumlahBuah));
// Begini juga bisa, terserah mau pakai yang mana.



// Contoh lain:
function angka(...angkaKu) {
    let hasil = 0;
    for (let angkaMu of angkaKu) {
        hasil += angkaMu;
    }
    return hasil;
}

console.log(angka(7, 7, 7, 7, 7, 7));
// Jujur ga tau ini gunanya buat apa, kayak mempersulit diri aja sih.


function aangka(...angkaKu) {
    let hasil = 0;
    for (let angkaMu of angkaKu) {
        hasil += angkaMu;
    }
    return hasil / angkaKu.length;
}

console.log(aangka(30, 28, 100, 40));
// Ini mencari rata-rata, but yeah, kayak ga guna menurutku sih.

// Aku masih ga ngerti mungkin karena masih di level dasar sih, karena:
/*
    Tapi begitu lo mulai bikin fungsi yang lebih general atau 
    kerja dengan library/framework, dua hal ini(spread dan rest) jadi kepake banget.
*/