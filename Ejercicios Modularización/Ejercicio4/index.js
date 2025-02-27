import { agregarLibro, buscarPorAutor, obtenerListaTitulos, hayLibrosDeGenero, ordenarLibrosAlfabeticamente, filtrarPorGenero } from './biblioteca.js';

agregarLibro("1984", "George Orwell", "Ciencia Ficción");
agregarLibro("Cien años de soledad", "Gabriel García", "Realismo");
agregarLibro("El Hobbit", "J.R.R.", "Fantasía");
agregarLibro("Fahrenheit 451", "Ray Bradbury", "Ciencia Ficción");

console.log("🔹 Lista de títulos:");
console.log(obtenerListaTitulos());

console.log("\n🔹 Buscar libro por autor (Gabriel García):");
console.log(buscarPorAutor("Gabriel García"));

console.log("\n🔹 Hay libros de Ciencia Ficción?");
console.log(hayLibrosDeGenero("Ciencia Ficción"));

console.log("\n🔹 Libros ordenados alfabéticamente:");
ordenarLibrosAlfabeticamente();
console.log(obtenerListaTitulos());

console.log("\n🔹 Filtrar libros de Ciencia Ficción:");
console.log(filtrarPorGenero("Ciencia Ficción"));
