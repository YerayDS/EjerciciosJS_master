//6. Análisis de Datos Climáticos

const temperaturas = [15, 22, 30, 18, 27, 35, 12, 25];

let tempMaxima = temperaturas[0];
let tempMinima = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
  if (temperaturas[i] > tempMaxima) {
    tempMaxima = temperaturas[i];
  }
  if (temperaturas[i] < tempMinima) {
    tempMinima = temperaturas[i];
  }
}

console.log(`Temperatura más alta: ${tempMaxima}°C`);
console.log(`Temperatura más baja: ${tempMinima}°C`);

let sumaTemperaturas = 0;
for (let i = 0; i < temperaturas.length; i++) {
  sumaTemperaturas += temperaturas[i];
}

const mediaTemperatura = sumaTemperaturas / temperaturas.length;

const temperaturasArribaMedia = [];
for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] > mediaTemperatura) {
    temperaturasArribaMedia.push(temperaturas[i]);
  }
}

console.log(`Temperaturas por encima de la media (${temperaturasArribaMedia})`);

const temperaturasFahrenheit = [];
for (let i = 0; i < temperaturas.length; i++) {
  const fahrenheit = (temperaturas[i] * 9 / 5) + 32;
  temperaturasFahrenheit.push(fahrenheit);
}

console.log('Temperaturas en Fahrenheit:');
console.log(temperaturasFahrenheit);
