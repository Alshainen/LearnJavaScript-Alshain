// Variable Scope = tempat di mana sebuah variabel dikenali 
//                  dan bisa diakses (lokal vs global)"

/*
    let a = 1;
    let a = 2;

    Ini adalah global variable.
    Kalian tidak bisa deklarasi variable dengan nama yang sama.
*/


a();
c();

function a() {
    let b = 2;
    console.log(b);
    
}

function c() {
    let b = 10;
    console.log(b);
    
}

// Ini adalah lokal variabel.
// Note: Variabel function c tidak dapat dipanggil oleh function a,
//       Begitu pula sebaliknya.