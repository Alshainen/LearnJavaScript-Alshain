const judul = document.getElementsByTagName(`h1`)[0];
const input = document.getElementsByTagName(`input`)[0];
const button = document.getElementsByTagName(`button`)[0];
const output = document.getElementsByTagName(`p`)[0];
const outputPercobaan = document.getElementsByTagName(`p`)[1];

const min = 1;
const max = 5;
let jawaban = Math.floor(Math.random() * (max - min + 1)) + min;

let percobaan = 0;

judul.textContent = `Tebak Angka Dari ${min} - ${max}!`;
outputPercobaan.textContent = `Percobaan: ${percobaan}`;

button.onclick = function(){
    let menjawab = Number(input.value);

    if (Number.isNaN(menjawab)) {
        output.textContent = `Tidak boleh selain angka!`;
        return;
    }
    if (menjawab < min || menjawab > max) {
        output.textContent = `Tidak dapat memproses angka yang tidak terdaftar.`;
        return;
    }

    percobaan++;

    if (menjawab < jawaban) {
        output.textContent = `Terlalu rendah.`;
    } else if (menjawab > jawaban) {
        output.textContent = `Terlalu tinggi.`;
    } else {
        output.textContent = `Selamat! Tebakan kamu benar ${jawaban}, dalam ${percobaan} percobaan.`;
        jawaban = Math.floor(Math.random() * (max - min + 1)) + min;
        percobaan = 0;
    }

    outputPercobaan.textContent = `Percobaan: ${percobaan}`;
    input.value = ``;
};