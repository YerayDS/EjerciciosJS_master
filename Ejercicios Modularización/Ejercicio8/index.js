import { agregarNota, filtrarNotasUrgentes, ordenarNotasPorPrioridad, buscarNota, notas } from './notas.js';

agregarNota("Reunion con el cliente", "Alta");
agregarNota("Comprar comida", "Baja");
agregarNota("Llamada con el proveedor", "Urgente");
agregarNota("Enviar informe", "Media");
agregarNota("Revisar correos", "Baja");

console.log(" Notas urgentes:");
console.log(filtrarNotasUrgentes());

console.log("\n Notas ordenadas por prioridad:");
ordenarNotasPorPrioridad();
console.log(notas.map(nota => `${nota.titulo} - Prioridad: ${nota.prioridad}`));

console.log("\n Buscar una nota especifica:");
console.log(buscarNota("Enviar informe"));
