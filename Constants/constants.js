/*
    Const = variabelnya tidak dapat diubah.
            (lebih tepatnya const ini berguna untuk
             menetapkan nilai asli suatu variabel sebagai patokan.)
*/

let donut = 20;
const donutPay = 100.12;

// Jika tidak const, maka variabel donut diatas
// bisa diubah menjadi angka lain.
donut = 100;

// Nah, beda halnya dengan donutPay,
// nilainya tidak dapat diubah karena dia adalah const.

// donutPay = 200; // hasilnya akan error kalau dijankan.


console.log(donut);
console.log(donutPay);