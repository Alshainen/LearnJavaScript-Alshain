/*
    Cara acc user input ada 2:

    1. Cara mudah = Window Prompt
    2. Cara Professional = HTML TextBox
*/

// Cara mudah:
let usrName;
usrName = window.prompt("Sape kw ni?")
// Ini muncul sebagai box notif diatas.

document.getElementsByTagName("p")[0].textContent = `halo ${usrName}`;
// Yang kamu input akan tercatat mengubah data variabelnya.



// Cara professional:
document.getElementsByTagName("button")[0].onclick = function(){
    usrName = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].textContent = `halo ${usrName}`;
}