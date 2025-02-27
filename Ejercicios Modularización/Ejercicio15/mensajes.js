const mensajes = [];

const agregarMensaje = (remitente, texto) => {
    mensajes.push({ remitente, texto });
};

const filtrarMensajesPorUsuario = (usuario) => {
    return mensajes.filter(mensaje => mensaje.remitente.toLowerCase() === usuario.toLowerCase());
};

export { agregarMensaje, filtrarMensajesPorUsuario, mensajes };
