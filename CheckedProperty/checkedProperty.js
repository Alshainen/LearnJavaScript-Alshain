// Menentukan check element checkbox atau radio dari HTML

const checkEat = document.getElementById(`checkEat`);
const visa = document.getElementById(`visa`);
const pulsa = document.getElementById(`pulsa`);
const paypal = document.getElementById(`paypal`);
const submit = document.getElementsByTagName(`button`)[0];
const output = document.getElementById(`output`);

submit.onclick = function(){
    if(checkEat.checked){
        if(visa.checked){
            output.textContent = `Pembayaran Visa berhasil!`;
        }
        else if(pulsa.checked){
            output.textContent = `Pembayaran Pulsa berhasil!`;
        }
        else if(paypal.checked){
            output.textContent = `Pembayaran PayPal berhasil!`;
        }
        else{
            output.textContent = `Bayar woi.`;
        }
    }
    else{
        output.textContent = `Minimal makan dulu lah`
    }
}