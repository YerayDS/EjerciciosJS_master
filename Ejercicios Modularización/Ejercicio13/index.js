import { agregarReserva, ordenarReservasPorFecha, reservas } from './reservas.js';

agregarReserva("Juan Perez", "2025-04-15");
agregarReserva("Maria Gonzalez", "2025-02-10");
agregarReserva("Carlos Ruiz", "2025-03-05");
agregarReserva("Ana Lopez", "2025-02-20");

ordenarReservasPorFecha();

console.log("Reservas ordenadas por fecha:");
reservas.forEach(reserva => {
    console.log(`${reserva.nombre} - Fecha de reserva: ${reserva.fecha}`);
});
