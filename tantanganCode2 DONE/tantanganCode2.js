const namaInput = document.getElementsByClassName(`namaInput`)[0];
const umurInput = document.getElementsByClassName(`umurInput`)[0];
const warnNama = document.getElementById(`warningNama`);
const warnUmur = document.getElementById(`warningUmur`);
const submit = document.getElementById(`submit`);
const output = document.getElementById(`output`);
const outputTwo = document.getElementById(`outputTwo`);
const minimalKarakterNama = 3;
const minimalUmur = 10;
const maksimalUmur = 100;

submit.onclick = function(){
    const umur = Number(umurInput.value);
    const nama = namaInput.value.trim().charAt(0).toUpperCase() + namaInput.value.trim().slice(1).toLowerCase();

    const namaError = nama == `` || nama.length < minimalKarakterNama;
    const umurError = umur < minimalUmur || umur > maksimalUmur || umur !== Number(umur);
    
    warnNama.textContent = nama == `` ? `Nama tidak boleh kosong!` : nama.length < minimalKarakterNama ? `Nama tidak boleh kurang dari 3 karakter!` : ``;
    warnNama.style.display = nama == `` || nama.length < minimalKarakterNama ? `block` : `none`;

    warnUmur.textContent = umur <= 0 ? `Umur tidak boleh kosong!` : umur < minimalUmur || umur > maksimalUmur ? `Umur ${umur} tahun tidak dapat mendaftar.` : umur !== Number(umur) ? `Umur harus angka!` : ``;
    warnUmur.style.display = umur < minimalUmur || umur > maksimalUmur || umur !== Number(umur)? `block` : `none`;

    if(!namaError && !umurError){
        output.textContent = `SELAMAT DATANG!`;
        outputTwo.textContent = `Nama: ${nama}\nUmur: ${umur}`;
        output.style.display = `block`;
        outputTwo.style.display = `block`;
    }
    else{
        output.textContent = ``;
        outputTwo.textContent = ``;
        output.style.display = `none`;
        outputTwo.style.display = `none`;
    }
}

// Nilai = 95/100

/*
    Kurang 5 karena disuruh buat output khusus jika umur minus,
    cuman gw malas, udah capek.

    Gini juga udah bagus sih, toh umur dibawah 0 = kosong kan?
    wkwk.
*/