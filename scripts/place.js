const wind = 18;
const temperature = 28;
const label = document.getElementById('label')

function calculateWindChill(temperature, windSpeed){
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    windChill = windChill.toFixed(2)
    label.innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;
}

if (temperature <= 10 && wind > 4.8){
    calculateWindChill(temperature, wind)
}