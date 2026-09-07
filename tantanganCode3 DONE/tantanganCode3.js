/*
    Client butuh sistem verifikasi keamanan sebelum reset password — mirip "security questions" 
    di akun beneran. Ada 3 pertanyaan + kunci jawaban (data, bukan hardcode if per pertanyaan). 
    Sistem nanya SATU PER SATU (bukan 3 form sekaligus), 
    jawaban ga case-sensitive & spasi nyasar harus ditoleransi. 
    User LULUS kalau benar minimal 2 dari 3 — bukan harus sempurna. 
    Tampilin ringkasan akhir: total benar, lulus/gagal, 
    DAN pertanyaan mana yang salah (bukan cuma angka doang).
*/

const lingkaranOne = document.getElementById(`one`);
const lingkaranTwo = document.getElementById(`two`);
const lingkaranThree = document.getElementById(`three`);
const lingkaranFour = document.getElementById(`four`);
const judulIsiVerifikasi = document.getElementById(`judulIsiVerifikasi`);
const isiVerifikasi = document.getElementById(`isiVerifikasi`);
const isiInput = document.getElementById(`isiInput`);
const labelIsi = document.getElementsByTagName(`label`)[0];
const buttonConfirm = document.getElementsByTagName(`button`)[0];
const user = `Alshain`;
const password = `12Lil8`;

const ask = [true, false, false, false];
const tampilkanPertanyaan = [false, false, false];

// Verifikasi 3 langkah.
const pertanyaan = [`Nama hewan peliharaan`, `Nama sahabat`, `Nama Sekolah Menengah Atas`];
const namaPertanyaan = [`a`, `b`, `c`];
const jawaban = [`kucing`, `alexander the great`, `teladan`];
const jawabanSalah = [false, false, false];
let salah = 0;

judulIsiVerifikasi.textContent = `Selamat Datang di Proses Verifikasi`;
isiVerifikasi.textContent = `Proses ini digunakan untuk memverifikasi apakah user yang sedang berusaha login adalah pemilik akun ini atau tidak.\nUser wajib menjawab 2 dari 3 pertanyaan dengan benar.`;

buttonConfirm.onclick = function(){
    if (ask[0]) {
        if (!tampilkanPertanyaan[0]) {
            lingkaranOne.style.display = `block`;
            judulIsiVerifikasi.style.fontWeight = `400`;
            judulIsiVerifikasi.textContent = `Langkah 1:\n${pertanyaan[0]}`;
            isiInput.style.display = `block`;
            isiVerifikasi.style.display = `none`;
            buttonConfirm.textContent = `Lanjut`;
            tampilkanPertanyaan[0] = true;
            return;
        }
        isiInput.value === `` ? labelIsi.textContent = `Tidak boleh kosong!` : isiInput.value.trim().toLowerCase() !== jawaban[0] ? `${salah++, jawabanSalah[0] = true, ask[0] = false, ask[1] = true}` : ask[0] = false, ask[1] = true;
        labelIsi.style.display = isiInput.value === `` ? `block` : `none`;
        if(isiInput.value === ``) return;
    }
    if (ask[1]) {
        if (!tampilkanPertanyaan[1]) {
            lingkaranTwo.style.display = `block`;
            judulIsiVerifikasi.textContent = `Langkah 2:\n${pertanyaan[1]}`;
            isiInput.value = ``;
            tampilkanPertanyaan[1] = true;
            return;
        }
        isiInput.value === `` ? labelIsi.textContent = `Tidak boleh kosong!` : isiInput.value.trim().toLowerCase() !== jawaban[1] ? `${salah++, jawabanSalah[1] = true, ask[1] = false, ask[2] = true}` : ask[1] = false, ask[2] = true;
        labelIsi.style.display = isiInput.value === `` ? `block` : `none`;
        if(isiInput.value === ``) return;
    }
    if (ask[2]) {
        if (!tampilkanPertanyaan[2]) {
            lingkaranThree.style.display = `block`;
            judulIsiVerifikasi.textContent = `Langkah 3:\n${pertanyaan[2]}`;
            isiInput.value = ``;
            tampilkanPertanyaan[2] = true;
            return;
        }
        isiInput.value === `` ? labelIsi.textContent = `Tidak boleh kosong!` : isiInput.value.trim().toLowerCase() !== jawaban[2] ? `${salah++, jawabanSalah[2] = true, ask[2] = false, ask[3] = true}` : ask[2] = false, ask[3] = true;
        labelIsi.style.display = isiInput.value === `` ? `block` : `none`;
        if(isiInput.value === ``) return;
    }
    if (ask[3]) {
        if (salah < 2) {
            lingkaranFour.style.display = `block`;
            judulIsiVerifikasi.textContent = `Selamat Datang Kembali ${user}!`;
            isiInput.value = ``;
            isiInput.style.display = `none`;
            buttonConfirm.style.display = `none`;
            isiVerifikasi.style.display = `block`;
            isiVerifikasi.textContent = `Total benar: ${pertanyaan.length - salah}`
            for (let i = 0; i < jawabanSalah.length; i++) {
                if (jawabanSalah[i] === true) {
                    document.getElementById(`hasil` + namaPertanyaan[i]).style.display = `block`;
                    document.getElementById(`hasil` + namaPertanyaan[i]).textContent = `${pertanyaan[i]}: Salah`;
                }
            }
        }
        else{
            lingkaranFour.style.display = `block`;
            judulIsiVerifikasi.textContent = `Verifikasi Tidak Berhasil`;
            isiInput.value = ``;
            isiInput.style.display = `none`;
            buttonConfirm.style.display = `none`;
            isiVerifikasi.style.display = `none`;
        }
    }
}

// Nilai = 90/100

/*
    Rating Information:
    naik dari 78 karena kritik comma-operator gw cabut (gw salah baca risikonya)
*/