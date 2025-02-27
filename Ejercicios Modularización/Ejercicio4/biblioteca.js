const libros = [];

const agregarLibro = (titulo, autor, genero) => {
    libros.push({ titulo, autor, genero });
};

const buscarPorAutor = (autor) => libros.find(libro => libro.autor.toLowerCase() === autor.toLowerCase());

const obtenerListaTitulos = () => libros.map(libro => libro.titulo);

const hayLibrosDeGenero = (genero) => libros.map(libro => libro.genero.toLowerCase()).includes(genero.toLowerCase());

const ordenarLibrosAlfabeticamente = () => libros.sort((a, b) => {
    if (a.titulo < b.titulo) return -1;
    if (a.titulo > b.titulo) return 1;
    return 0;
});

const filtrarPorGenero = (genero) => libros.filter(libro => libro.genero.toLowerCase() === genero.toLowerCase());

export { agregarLibro, buscarPorAutor, obtenerListaTitulos, hayLibrosDeGenero, ordenarLibrosAlfabeticamente, filtrarPorGenero, libros };
