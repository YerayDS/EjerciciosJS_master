//13. Análisis de Palabras en un Texto

const texto = "La programación en JavaScript puede ser desafiante.";

const palabras = texto.split(' ');

const palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);

const palabrasOrdenadas = palabrasFiltradas.sort((a, b) => b.length - a.length);

console.log(palabrasOrdenadas);
