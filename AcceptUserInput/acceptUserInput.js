//let namaMu = prompt(`Ketik namamu`); // Cara mudah.
// Ini itu notif dibagian atas web.

// Cara Professional:
let namaKu;

document.getElementsByTagName(`button`)[0].onclick = function(){
    namaKu = document.getElementsByTagName(`input`)[0].value;
    document.getElementsByTagName(`label`)[0].textContent = `Halo ${namaKu}!`
}