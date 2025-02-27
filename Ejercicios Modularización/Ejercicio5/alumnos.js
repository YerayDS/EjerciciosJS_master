const alumnos = [];

const agregarAlumno = (nombre, notas) => {
    alumnos.push({ nombre, notas });
};

const calcularPromedio = (notas) => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const calcularPromedios = () => alumnos.map(alumno => ({
    nombre: alumno.nombre,
    promedio: calcularPromedio(alumno.notas)
}));

const filtrarAprobados = () => alumnos.filter(alumno => calcularPromedio(alumno.notas) >= 5);

const ordenarPorPromedio = () => alumnos.sort((a, b) => calcularPromedio(b.notas) - calcularPromedio(a.notas));

const buscarAlumnoPorNombre = (nombre) => alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());

export { agregarAlumno, calcularPromedios, filtrarAprobados, ordenarPorPromedio, buscarAlumnoPorNombre, alumnos };
