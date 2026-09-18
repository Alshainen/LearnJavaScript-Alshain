// forEach() = metode yang digunakan untuk melakukan iterasi pada elemen-elemen
//             sebuah array dan menerapkan fungsi tertentu (callback) ke setiap elemen
// 
// array.forEach(callback)

let angka = [1, 10, 100];
function tampilan(angka) {
    console.log(angka);
}

angka.forEach(tampilan);

// Atau cepatnya:
angka.forEach(element => {
    console.log(element);
});


// Intinya forEach itu: "untuk setiap isi array, jalanin fungsi ini.
// Versi pendek dari for loop yang udah kalian kenal:
// pakai for
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// pakai forEach, hasilnya sama
angka.forEach(element => {
    console.log(element);
});


// hm, intinya ga beda jauh dari for loop, but for each cuman untuk fungsi array,
// for loop kan masih berguna untuk number dan ga harus array, kayak angka = 100;

// forLoops bisa berhenti di tengah, sedangkan forEach tidak.
// (Cuman code pelengkap aja sih menurutku.)