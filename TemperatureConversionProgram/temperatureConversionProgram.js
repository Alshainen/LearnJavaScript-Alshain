const textBox = document.getElementById(`textBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const button = document.getElementsByTagName(`button`)[0];
const hasil = document.getElementsByTagName(`p`)[0];
let temperature;


hasil.textContent = `Pilih Unitnya`;

button.onclick = function convert() {
    if (toFahrenheit.checked) {
        if (Number.isNaN(Number(textBox.value)) || textBox.value == ``) {
            hasil.textContent = `Data error.\nPastikan untuk mengisi data,\ndan selalu gunakan angka.`;
        }
        else{
            temperature = Number(textBox.value);
            temperature = temperature * 9 / 5 + 32;
            // Ini rumus to Fahrenheit

            hasil.textContent = temperature.toFixed(1) + `°F`;
        }
    }
    else if (toCelsius.checked){
        if (Number.isNaN(Number(textBox.value)) || textBox.value == ``) {
            hasil.textContent = `Data error.\nPastikan untuk mengisi data,\ndan selalu gunakan angka.`;
        }
        else{
            temperature = Number(textBox.value);
            temperature = (temperature - 32) * (5 / 9);
            // Ini rumus to Celsius

            hasil.textContent = temperature.toFixed(1) + `°C`;
        }

    }
    else{
        hasil.textContent = `Pilih Unitnya!`;
    }
}