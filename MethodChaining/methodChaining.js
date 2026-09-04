// Method chaining itu teknik memanggil 
// beberapa method secara berurutan dalam satu statement, 
// langsung di atas hasil (return value) method sebelumnya, 
// jadi nggak perlu simpan hasil sementara ke 
// variabel-variabel terpisah.

// --- TANPA METHOD CHAINING:
let nama = `Alter A`;

nama = nama.trim();
let hurufDepan = nama.charAt(0);
hurufDepan = hurufDepan.toUpperCase();

let hurufLain = nama.slice(1);
hurufLain = hurufLain.toLowerCase();

nama = hurufDepan + hurufLain;
console.log(nama);
// Kepanjangan! Kebanyakan variabel!


// --- DENGAN METHOD CHAINING
let userName = `Alshain Schatten`;
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLocaleLowerCase();
console.log(userName);
// Cukup 1 variabel aja coy.