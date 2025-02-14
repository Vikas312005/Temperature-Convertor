const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("to_fahrenheit");
const toCelsius = document.getElementById("to_Celsius");
const tokelvin = document.getElementById("to_Kelvin");
const fahrentokelvin = document.getElementById("from_farhen_to_kelvin");
const kelvintocelcius = document.getElementById("from_kelvin_to_celcius");
const kelvintofahernheit = document.getElementById("from_kelvin_to_fahernheit");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if (tokelvin.checked){
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(2) + "°K";
        }

        else if(fahrentokelvin.checked){
            temp = Number(textBox.value);
            temp = (temp - 32) * 5/9 + 273.15;
            result.textContent = temp.toFixed(2) + "°K";
        }

        else if(kelvintocelcius.checked){
            temp = Number(textBox.value);
            temp = temp - 273.15;
            result.textContent = temp.toFixed(2) + "°C";
        }
        else if(kelvintofahernheit.checked){
            temp = Number(textBox.value);
            temp = (temp - 273.15) * 9/5 + 32;
            result.textContent = temp.toFixed(2) + "°F";
        }
    else{
        result.textContent = "Select a unit"; 
    }
}