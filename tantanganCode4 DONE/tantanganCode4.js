const totalOutput = document.getElementById(`totalOutput`);
const totalBelanja = document.getElementById(`totalBelanja`);
const namaBarang = [`Beras`, `Minyak Goreng`, `Gula Pasir`, `Telur Ayam`, `Bawang Merah`, `Bawang Putih`];
const hargaBarang = [12000, 20000, 4700, 2000, 3900, 3800];
const gambarBarang = [`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBrc2RydGxjYjVtM21yY2Z4dXZqa3c4ajAwcmhzYXB2cWVpem1wYyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fVCGkJbbGC60degZMp/giphy.gif`, `https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWswOHNoMHhweGxiNjV4YWw4eXAyOXJnNDBoMzVyb2VzdDB3dXdlNiZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/BVR6RLvUAK6znQiSOY/giphy.gif`, `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBrc2RydGxjYjVtM21yY2Z4dXZqa3c4ajAwcmhzYXB2cWVpem1wYyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Yy2y9i3yY4pjhtv5LG/giphy.gif`, `https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MjJsNHdsNXBkZ3YxdG9rbWQ3aTBtY2pmcHM5OGJuZXQ5NzN2MHB6dSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/QUWJOtMcIkNoYR310q/giphy.gif`, `https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWFmY2tvZWVvOWVzYWxzYmk3bWluNWJsdG02dTMwNWhsZnFoaGxvbCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/69uqK8FpJaeLMw1KHo/giphy.gif`, `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBrc2RydGxjYjVtM21yY2Z4dXZqa3c4ajAwcmhzYXB2cWVpem1wYyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Xy8HuuYeqEDlWHdYWA/giphy.gif`]
const totalHarga = [];

const ongkir = 5000;
const pajak = 2000;
document.getElementById(`ongkir`).textContent = `Ongkir: ${ongkir}`;
document.getElementById(`pajak`).textContent = `Pajak: ${pajak}`;

function barangHarga(...barang) {
    let harga = 0;
    for (let hargaBarang of barang) {
        harga += hargaBarang;
    }
    return harga;
}

function barangTermahal() {
    if (totalHarga.length === 0) {
        return ``;
    }

    let hargaMaks = totalHarga[0];
    for (let i = 0; i < totalHarga.length; i++) {
        if (totalHarga[i] > hargaMaks) {
            hargaMaks = totalHarga[i];
        }
    }

    const index = hargaBarang.indexOf(hargaMaks);
    return namaBarang[index];
}

function buttonBarang(index) {
    const gambar = document.getElementsByClassName(`gambarBarang`)[index];
    gambar.src = gambarBarang[index];
    gambar.alt = namaBarang[index];
}

function labelBarang(index) {
    document.getElementsByClassName(`hargaBarang`)[index].textContent = hargaBarang[index];
    document.getElementsByClassName(`namaBarang`)[index].textContent = namaBarang[index];
}

function totalOutputBarang() {
    totalOutput.textContent = `Rp${pajak + ongkir + barangHarga(...totalHarga)}`;
    totalBelanja.textContent = barangHarga(...totalHarga) <= 0 ? `Total Belanja:` : `Total Belanja: ${totalHarga.length}`;
    document.getElementById(`barangTermahal`).textContent =`Barang Termahal: ${barangTermahal()}`;
}

function tabelHarga(index) {
    document.getElementsByClassName(`buttonPlus`)[index].onclick = function(){
        document.getElementsByClassName(`inputHarga`)[index].value++;
        totalHarga.push(hargaBarang[index]);
        totalOutputBarang();
    }
    document.getElementsByClassName(`buttonMinus`)[index].onclick = function(){
        if (document.getElementsByClassName(`inputHarga`)[index].value > 0) {
            document.getElementsByClassName(`inputHarga`)[index].value--;
            totalHarga.splice(totalHarga.indexOf(hargaBarang[index]), 1);
            totalOutputBarang();
        }
    }
}

for (let i = 0; i < namaBarang.length; i++) {
    buttonBarang(i);
    labelBarang(i);
    tabelHarga(i);
}
totalOutputBarang();


// Nilai = 95/100