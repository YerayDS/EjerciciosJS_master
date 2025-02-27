import { agregarEmpleado, calcularSumaTotalDeHoras, filtrarEmpleadosPorHoras, ordenarEmpleadosPorHoras, empleados } from './empleados.js';

agregarEmpleado("Juan Perez", 38);
agregarEmpleado("Ana Lopez", 42);
agregarEmpleado("Luis Garcia", 45);
agregarEmpleado("Maria Rodriguez", 39);
agregarEmpleado("Carlos Sanchez", 50);

console.log(" Suma total de horas trabajadas:");
console.log(calcularSumaTotalDeHoras());

console.log("\n Empleados que trabajaron mas de 40 horas:");
console.log(filtrarEmpleadosPorHoras());

console.log("\n Empleados ordenados por horas trabajadas:");
ordenarEmpleadosPorHoras();
console.log(empleados.map(empleado => `${empleado.nombre}: ${empleado.horasTrabajadas} horas`));
