/*
    =  Operator penugasan, isi atau simpan value ke variable.
    == Perbandingan longgar, cek apakah valuenya sama.
    === Perbandingan ketat (strict equality), cek value sekaligus tipe datanya.
    != Cek apakah tidak sama (longgar)
    !== Cek apakah tidak sama (ketat, cek value + tipe data)
*/

const umur = 12.2;

if(umur == `12.2`){ // Cuman peduli isi tanpa peduli tipe data,
                    // padahal ini string, bukan int kayak di const.
    console.log(`Umurlu ini.`);
}
else{
    console.log(`Bukan umurlu.`);
    
}

if(umur != `12.2`){ // Cuman peduli isi tanpa peduli tipe data,
                    // padahal ini string, bukan int kayak di const.
    console.log(`Umurlu ini boi.`);
    // Ingat, != artinya tidak sama, bukan sama dengan.
}
else{
    console.log(`Bukan umurlu boi.`);
    
}


if(umur === `12.2`){ // Value sama, tapi tipe data beda.
                     // Berbeda dengan == yang ga peduli tipe data yang penting value sama.
                     // Kalau mau true, maka tipe data juga harus sama.
    console.log(`Ini umurlu.`);
}
else{
    console.log(`Ini bukan umurlu.`);
    
}

if(umur !== `12.2`){ // Value sama, tapi tipe data beda.
                     // Berbeda dengan == yang ga peduli tipe data yang penting value sama.
                     // Kalau mau true, maka tipe data juga harus sama.
    console.log(`Ini umurlu boi.`);
    // Ingat, !== artinya tidak sama, bukan sama dengan.
}
else{
    console.log(`Ini bukan umurlu boi.`);
}