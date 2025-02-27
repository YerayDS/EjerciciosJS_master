import { agregarCurso, ordenarCursosPorInscritos, obtenerListaDeNombres, cursos } from './cursos.js';

agregarCurso("Desarrollo Web", 120);
agregarCurso("Marketing Digital", 85);
agregarCurso("Diseño Grafico", 45);
agregarCurso("Inteligencia Artificial", 200);
agregarCurso("Fotografia Digital", 70);

console.log(" Cursos ordenados por cantidad de estudiantes inscritos:");
ordenarCursosPorInscritos();
console.log(cursos.map(curso => `${curso.nombre} - Inscritos: ${curso.numEstudiantes}`));

console.log("\n Lista de nombres de los cursos:");
console.log(obtenerListaDeNombres());
