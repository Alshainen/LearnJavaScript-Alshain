// Versi ringkas dari if/else 
// buat kasus yang cuma nentuin SATU value, 
// ditulis 1 baris ekspresi 
// (bukan block statement kayak if/else biasa).

// KondisiTrue : KondisiFalse;

let umur = 1;
let pesan = umur >= 18 ? `Kamu udah dewasa.` : `Lu masih bocah.`;

console.log(pesan);

let murid = true;
let pesan2 = murid ? `Lu murid.` : `Lu bukan murid.`;

console.log(pesan2);

let harga = 1000;
let diskon = harga >= 100 ? 15 : 0;
// Kalau diatas 100 lu dapat diskon 15%
// Kalau ga, maka lu ga dapat diskon.

console.log(harga - harga * (diskon / 100));
