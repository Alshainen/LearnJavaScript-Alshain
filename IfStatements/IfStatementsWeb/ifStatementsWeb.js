let isiText = document.getElementsByTagName(`p`)[0];
let umurText = document.getElementsByTagName(`p`)[1];
let umurKu = document.getElementsByTagName(`input`)[0];
let submit = document.getElementsByTagName(`button`)[0];
let umur;

submit.onclick = function(){
    umur = umurKu.value;
    umur = Number(umur);
    umurText.textContent = `(${umur})`;

    if(umur >= 90){
        isiText.textContent = `${umur} tahun itu sudah fosil,\nngapain ada disini?`
    }
    else if(umur >= 18){
        isiText.textContent = `Kamu cukup dewasa.\nBaiklah, silahkan masuk.`;
    }
    else if(umur <= 0){
        isiText.textContent = `Umur apaan segitu??`
    }
    else if(umur < 18){
        isiText.textContent = `Anak dibawah  umur dilarang masuk!`
    }
    else{
        isiText.textContent = `Masukkan umurmu!`
    }
}