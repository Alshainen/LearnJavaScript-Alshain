let inputOne = document.getElementById(`angka1`);
let inputTwo = document.getElementById(`angka2`);
let tambah = document.getElementById(`tambah`);
let kurang = document.getElementById(`kurang`);
let kali = document.getElementById(`kali`);
let bagi = document.getElementById(`bagi`);
let output = document.getElementById(`hasilnya`);
let submit = document.getElementById(`submit`);
let memberYes = document.getElementById(`memberCheckYes`);
let angka1;
let angka2;
let angka = 0;

submit.onclick = function(){
    angka1 = Number(inputOne.value);
    angka2 = Number(inputTwo.value);
    if(tambah.selected){
        angka = angka1 + angka2;
    }
    else if(kurang.selected){
        angka = angka1 - angka2;
    }
    else if(kali.selected){
        angka = angka1 * angka2;
    }
    else if(bagi.selected){
        angka = angka1 / angka2;
    }

    if(memberYes.checked){
        angka = angka - (angka * 15/100);
    }
    output.textContent = `Hasilnya adalah: ${angka}`;
}

// Nilai = 90/100

/*
    Rincian:

    Fungsional & inisiatif full marks — semua operasi tested bener, 
    dan lu nambahin scope sendiri (2 input, 4 operasi) 
    tanpa ngorbanin correctness sama sekali.

    DOM & practice −2 — label/for-id proper, 
    referensi efisien (ga bikin variable memberNo yang ga kepake, 
    cukup negasi dari memberYes), 
    tapi type="submit" tanpa <form> itu semantic slip kecil 
    (ga ngefek fungsi, cuma ga akurat labelnya). 
    (Sekalian aja, bukan yang kehitung skor: 0 komentar di file ini, 
    beda dari root index.js lu kemarin yang ada penjelasan — bukan wajib, 
    cuma gaya.)

    Robustness −8, ini yang paling gede motongnya — 
    NaN dari input non-angka sama bagi-0 dari input aneh, 
    itu ga gue tuntut (beyond scope, fair). 
    Tapi "angka2 kosong aman cuma buat 2 dari 4 operasi lu sendiri" 
    (yang kita bongkar bareng barusan) itu FULL ke-cover sama tools yang udah lu punya sekarang 
    (if statement doang) dan itu scope kalkulator yang lu bangun sendiri, 
    bukan sesuatu di luar lesson. 
    Itu yang bikin skornya ga bulat 100.
*/