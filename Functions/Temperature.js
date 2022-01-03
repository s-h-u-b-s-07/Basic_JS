const prompt = require('prompt-sync')();

function ferenhietToCelsius(degF) {
    return (degF - 32) * (5 / 9);
}
function celsiusToFerenhiet(degC) {
    return (degC * 9 / 5) + 32;
}

let opt = prompt("Enter 1.Celsius to ferenheit 2.ferenheit to celsius ");
let temperature = prompt("Enter a Temperature: ");
let conversionTemp;
switch (parseInt(opt)) {
    case 1:
        conversionTemp=  celsiusToFerenhiet(temperature);
        break;
    case 2:
        conversionTemp= ferenhietToCelsius(temperature);
        break;
    default:
        console.log("invalid input");
}
console.log( "conversion Temperature"+conversionTemp);