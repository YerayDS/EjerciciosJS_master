const cursos = [];

const agregarCurso = (nombre, numEstudiantes) => {
    cursos.push({ nombre, numEstudiantes });
};

const ordenarCursosPorInscritos = () => {
    cursos.sort((a, b) => b.numEstudiantes - a.numEstudiantes);  
};

const obtenerListaDeNombres = () => {
    return cursos.map(curso => curso.nombre);
};

export { agregarCurso, ordenarCursosPorInscritos, obtenerListaDeNombres, cursos };
