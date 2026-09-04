// Digunakan untuk mengkombinasikan atau memanipulasi boolean values
// (true atau false)
/*
    AND = &&
    OR = ||
    NOT = !
*/

// AND
let siswa = 40;
if(siswa >= 10 && siswa <= 40){ // Keduanya kondisi harus true.
    console.log(`Siswanya banyak ya`);
}
else if(siswa > 40){
    console.log(`Siswanya kebanyakan!`);
    
}
else{
    console.log(`Siswanya sedikit banget.`);
    
}


// OR
let uang = 300;
if(uang < 0 || uang > 100){ // Salah satu harus true.
    console.log(`Banyak uang.`);   
}
else{
    console.log(`Uang lu dikit banget.`);
}


// NOT
let lapar = true;
if(!lapar){ // Ngubah kondisi true jadi false, dan false jadi true.
    console.log(`Udah kenyang.`);
}
else{
    console.log(`Aku nak makan.`);
}