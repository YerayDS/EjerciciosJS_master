//9. Filtrado de Libros por Autor y Año

const libros = [
    { titulo: 'El Alquimista', autor: 'Paulo Coelho', año: 1988 },
    { titulo: 'Sapiens', autor: 'Yuval Noah Harari', año: 2011 },
    { titulo: 'El psicoanalista', autor: 'John Katzenbach', año: 2002 },
    { titulo: '1984', autor: 'George Orwell', año: 1949 },
    { titulo: 'Homo Deus', autor: 'Yuval Noah Harari', año: 2015 }
];

const librosPost2010 = libros.filter(libro => libro.año > 2010);

console.log('Libros publicados después de 2010:');
console.log(librosPost2010);

const primerLibroHarari = libros.find(libro => libro.autor === 'Yuval Noah Harari');

console.log('\nPrimer libro de Yuval Noah Harari:');
console.log(primerLibroHarari);

const librosOrdenadosPorAño = libros.sort((a, b) => a.año - b.año);

console.log('\nLibros ordenados por año de publicación:');
console.log(librosOrdenadosPorAño);
