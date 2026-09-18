function buatPassword(panjangPassword, pakaiHurufKecil, pakaiHurufBesar, pakaiAngka, pakaiSimbol) {
    const hurufKecil = `abcdefghijklmnopqrstuvwxyz`;
    const hurufBesar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const angka = `0123456789`;
    const simbol = `!@#$%^&*()_+-=/?`;

    let simpanPw = ``;
    let pw = ``;

    simpanPw += pakaiHurufKecil ? hurufKecil : ``;
    simpanPw += pakaiHurufBesar ? hurufBesar : ``;
    simpanPw += pakaiAngka ? angka : ``;
    simpanPw += pakaiSimbol ? simbol : ``;
    
    for (let i = 0; i < panjangPassword; i++) {
        const acak = Math.floor(Math.random() * simpanPw.length);
        pw += simpanPw[acak];
        
    }
    return pw;
}

const panjangPassword = 20;
const pakaiHurufKecil = true;
const pakaiHurufBesar = true;
const pakaiAngka = true;
const pakaiSimbol = true;

const password = buatPassword(panjangPassword, pakaiHurufKecil, pakaiHurufBesar, pakaiAngka, pakaiSimbol);
console.log(password);