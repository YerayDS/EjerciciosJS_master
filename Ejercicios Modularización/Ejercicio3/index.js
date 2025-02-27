import { agregarProyecto, filtrarEnProgreso, ordenarPorPrioridad, eliminarUltimoProyecto, proyectosToString } from './proyectos.js';

agregarProyecto("Sitio Web", "En progreso", 2);
agregarProyecto("App Móvil", "Completado", 1);
agregarProyecto("Sistema ERP", "En progreso", 3);

console.log("Proyectos en progreso:");
console.log(filtrarEnProgreso());

ordenarPorPrioridad();
console.log("\n Proyectos ordenados por prioridad:");
console.log(proyectosToString());

eliminarUltimoProyecto();
console.log("\n Después de eliminar el último proyecto:");
console.log(proyectosToString());
