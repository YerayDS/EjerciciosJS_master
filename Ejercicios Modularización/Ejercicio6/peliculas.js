const peliculas = [];

const agregarPelicula = (titulo, duracion, genero) => {
    peliculas.push({ titulo, duracion, genero });
};

const buscarPorGenero = (genero) => peliculas.filter(pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase());

const obtenerTitulos = () => peliculas.map(pelicula => pelicula.titulo).join(', ');

const ordenarPorDuracion = () => peliculas.sort((a, b) => a.duracion - b.duracion);

export { agregarPelicula, buscarPorGenero, obtenerTitulos, ordenarPorDuracion, peliculas };
