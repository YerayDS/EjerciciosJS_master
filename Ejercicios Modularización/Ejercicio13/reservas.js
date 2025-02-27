const reservas = [];

const agregarReserva = (nombre, fecha) => {
    reservas.push({ nombre, fecha });
};

const ordenarReservasPorFecha = () => {
    reservas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));  
};

export { agregarReserva, ordenarReservasPorFecha, reservas };
