import { agregarAlumno, calcularPromedios, filtrarAprobados, ordenarPorPromedio, buscarAlumnoPorNombre } from './alumnos.js';

agregarAlumno("Juan Perez", [7, 8, 9]);
agregarAlumno("Ana Lopez", [4, 5, 6]);
agregarAlumno("Luis Garcia", [8, 9, 7]);
agregarAlumno("María Rodriguez", [3, 4, 2]);

console.log("🔹 Promedios de los alumnos:");
console.log(calcularPromedios());

console.log("\n🔹 Alumnos aprobados:");
console.log(filtrarAprobados());

console.log("\n🔹 Alumnos ordenados por promedio:");
ordenarPorPromedio();
console.log(calcularPromedios());

console.log("\n🔹 Buscar alumno por nombre (Ana Lopez):");
console.log(buscarAlumnoPorNombre("Ana Lopez"));
