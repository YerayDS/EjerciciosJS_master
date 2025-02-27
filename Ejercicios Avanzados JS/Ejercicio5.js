//5. Operaciones con Nombres de Usuarios

const nombres = ['Ana', 'Carlos', 'Alfredo', 'Pedro', 'Amalia', 'Luis'];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log('Nombres en mayúsculas:', nombresMayusculas);

const nombresConA = nombresMayusculas.filter(nombre => nombre[0] === 'A');
console.log('Nombres que comienzan con "A":', nombresConA);

const nombresOrdenados = nombresConA.sort();
console.log('Nombres ordenados alfabéticamente:', nombresOrdenados);