import { agregarPelicula, buscarPorGenero, obtenerTitulos, ordenarPorDuracion, peliculas } from './peliculas.js';

agregarPelicula("Inception", 148, "Ciencia Ficcion");
agregarPelicula("The Dark Knight", 152, "Accion");
agregarPelicula("Titanic", 195, "Romántico");
agregarPelicula("The Matrix", 136, "Ciencia Ficcion");
agregarPelicula("The Godfather", 175, "Drama");

console.log("Peliculas de Ciencia Ficcion:");
console.log(buscarPorGenero("Ciencia Ficcion"));

console.log("\n Titulos de todas las peliculas:");
console.log(obtenerTitulos());

console.log("\n Peliculas ordenadas por duracion:");
ordenarPorDuracion();
console.log(peliculas.map(pelicula => `${pelicula.titulo}: ${pelicula.duracion} minutos`));
