// Jika kondisi = true, eksekusi kode, jika tidak, lakukan hal lain.

// Versi Number.
let umur = 20;

if(umur >= 20){
    // Jika kondisi terpenuhi, bagian ini akan di eksekusi.
    console.log(`Kamu udah dewasa, cari kerja sana!`);
}
else{
    // Jika kondisi tidak terpenuhi, bagian ini akan di eksekusi.
    console.log(`Kamu masih anak-anak, tau apa kamu!?`);
}


// Versi Boolean.
let hidup = true;

if(hidup){
    console.log(`Halo!`);
}
else{
    console.log(`Lah?`);
    
}


// Versi String.
let nama = `Rea`;

if(nama == `Reja`){
    console.log(`Halo Reja!`);
}
else{
    console.log(`Lu siape?`);
}


// Contoh singkat semuanya:
let namaKu = `Fikri`;
let umurKu = 10;
let statusSekolah = true;

if(namaKu == `Fikri`){
    if(umurKu == 10){
        if(statusSekolah){
            console.log(`Halo Fikri!`);
        }
        else{
            console.log(`Sayang sekali, Fikri yang aku kenal masih sekolah!`);
        }
    }
    else{
        console.log(`Namamu sama, tapi kau bukan Fikri yang aku kenal.`);
    }
}
else{
    console.log(`Lu siapa?`);
}


// Contoh Else If
let myUmur = 90;

if(myUmur >= 90){
    console.log(`Apakah kau fosil?`);
}
else if(myUmur >= 10){
    console.log(`Halo kids.`);
}
else if(myUmur <= 0){
    console.log(`Lu apaan jir umur 0 kebawah?`);
}   
else{
    console.log(`Kau terlalu muda bung, minimal umurmu 10 tahun.`);
}