let siswa = 300;
let siswaBaru = 40;
let siswaTotal = siswa + siswaBaru;

console.log(`Total siswa baru ${siswaTotal} siswa`);
// Ini variable ditambah variabel, menggunakan variabel baru.

let murid = 600;
let muridBaru = 1000;
murid = murid + muridBaru;

console.log(`Total murid baru adalah ${murid} murid`);
// Ini variable ditambah variabel.
// Ini ga direkomendasi semisal lu masih butuh data asli murid sebelum ditambah.

let guru = 100;
guru = guru + 1000;

console.log(`Jumlah dari guru saat ini: ${guru}`);
// Ini cara basic.

let jajan = 30;
jajan += 20;

console.log(`Aku makan ${jajan} jajanan hari ini.`);
// Ini cara langsung.

let parkir = 30000;
parkir ++;

console.log(`Harga parkir sangat mahal, yaitu Rp.${parkir}`);
// Ini artinya ditambah 1, kepakai banget untuk loop event seperti healing nanti.
// Cara ini cuman bisa ++ dan -- aja ya.

let totalTidur = 30 + 100 ** 20;

console.log(`Hari ini aku tidur selama ${totalTidur} jam`);
/* Ini cara langsung 2, but not recommended,
   cuman kepakai kalau hanya sebatas ingin tau hasil dari nilai saja.

   Cara lainnya diatas jauh lebih bagus karena jelas keterangannya,
   bukan cuman cari nilai aja.
*/

/*
    Keterangan:

    + = ditambah
    - = dikurang
    * = dikali
    / = dibagi
    ** = dipangkat
    % = nilai sisa hasil pembagian 
        (seperti 30/2=15, hasilnya pas, tidak ada sisa,
         31/2=15 sisa 1, nah 1 itu yang ditampilkan di persen ini.
         Ingat ya, % ga menghasilkan koma, jadi ya dibulatkan,
         meskipun 31/2=15.5 tetap aja itu 15 sisa 1.
         
         Kalau mau menghasilkan koma,
         maka bilangannya juga harus desimal, bukan bulat kayak di contoh.)
*/
