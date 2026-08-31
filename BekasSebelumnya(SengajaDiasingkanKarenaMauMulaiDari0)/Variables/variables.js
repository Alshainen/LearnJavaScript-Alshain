/*
    Variable = Variabel itu wadah untuk menyimpan nilai.
               Variabel dipakai seolah-olah dia sendiri adalah nilainya.

    1. Declaration = let x;
       Ini deklarasi variabel: membuat nama variabel x.

    2. Assignment x = 100;
       Ini assignment: memberi nilai 100 ke x.

    Jadi let x; x = 100; artinya:
    buat variabel x, lalu isi dengan 100.

    let → kalau nilainya bisa berubah
    const → kalau nilainya tidak boleh berubah
    var → versi lama, sekarang biasanya dihindari
*/

// Cara cepat.
let umur = 10;

// Cara jika pengen buat variabel dulu tapi belum kepikiran isinya.
let nama;
nama = `Budi`;
/*
    Yup, let saja sudah mencakup seluruh tipe,
    ga kayak di C# yang harus seperti:

    string nama = "";
    double angkaDesimal = "1.1";

    dan lainnya.
    JS lebih efisien dalam hal ini.
*/

let harga = 10000;

// Cara menampilkan variabelnya (mirip C-Sharp lah ya).
// Kalau penasaran detailnya bisa cek bagian C-Sharp, soalnya aku udah ngerti yang gini, wkwk.
console.log(umur);
console.log(nama);

// Cara ngetik teks digabung variabel.
console.log();
console.log(`Halo ${nama}, umurmu sekarang ${umur} tahun ya?`);
console.log(`Harga barang yang kau pesan itu Rp.${harga} ya!`)
/*
    Perlu diingat bahwa menyisipkan variabel ke teks
    itu harus pakai backstick atau ``
    soalnya pakai "" aja ga bisa.

    jadi mulai sekarang biasakan diri pakai `` kalau
    mau ngetik sesuatu di JS.
    Ini bukan C-Sharp yang lebih unggul masalah ginian soalnya.
*/

// Ini mungkin udah ku letak diawal, tapi mari bahas lagi.
let namaKu = `Rido`; // Ini namanya String, untuk teks, WAJIB ADA ``, "", atau ''.
let umurKu = 100;
let uangKu = 10.12;/* 
                        Ini Number, kalau di C-Sharp dipisah 
                        antara Integer (untuk nilai bulat), 
                        dan Double (untuk nilai desimal).
                  */
let statusOnline = true; // Ini Boolean, cmn ada true/false.
// Ini masuknya ke If/Else yang nanti dipelajari ya.