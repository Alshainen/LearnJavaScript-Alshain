console.log("Hai");
console.log("Mwewheheh");
/* 
    Untuk melihatnya bisa dengan klik kanan di web,
    lalu pilih inspect.
    Di bagian console kalian bisa melihat teks ini muncul.
*/

//window.alert("hai");
// Menampilkan notif dibagian atas web.

//alert("Hebat");
/* 
    Pakai ini juga bisa, sama aja.
    Cuman pastikan variabelmu ga ada yang namanya
    alert juga, kalau ada ya terpaksa pakai yang cara pertama.
*/

document.getElementsByTagName("h2")[0].textContent = "Ini adalah cara ngetik/menampilkan teks dari JS";
document.getElementsByTagName("h2")[1].textContent = "Gimana, hebat kan?";
/* 
    Kalau kita ambil satu element langsung, maka kasih index ya,
    index itu yang [0] gitu.

    Kalu lu pakai getElementsById/ClassName, maka ga perlu index
    segala.
*/

document.getElementById("pe").textContent = "Ini pakai getElementById di JS."