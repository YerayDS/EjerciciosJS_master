import { agregarMensaje, filtrarMensajesPorUsuario } from './mensajes.js';

agregarMensaje("Juan", "Hola, como estas?");
agregarMensaje("Ana", "Hola, todo bien y tu?");
agregarMensaje("Juan", "Estoy bien gracias.");
agregarMensaje("Carlos", "Listos para la reunion?");
agregarMensaje("Ana", "Si, ya casi.");

console.log("Mensajes de Juan:");
const mensajesJuan = filtrarMensajesPorUsuario("Juan");
mensajesJuan.forEach(mensaje => {
    console.log(`${mensaje.remitente}: ${mensaje.texto}`);
});

console.log("\n Mensajes de Ana:");
const mensajesAna = filtrarMensajesPorUsuario("Ana");
mensajesAna.forEach(mensaje => {
    console.log(`${mensaje.remitente}: ${mensaje.texto}`);
});
