// Switch adalah alternatif `if` untuk banyak pilihan.
// Intinya mirip `if` tapi lebih simpel.

let umur = 21;

switch(umur){
    case 18:
        console.log(`Hebat.`);
        break;
    case 20:
        console.log(`Lu dewasa.`);
        break
    default:
        console.log(`Umur tidak teridentifikasi`);
}