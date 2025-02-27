const proyectos = [];

const agregarProyecto = (nombre, estado, prioridad) => {
    proyectos.push({ nombre, estado, prioridad });
};

const filtrarEnProgreso = () => proyectos.filter(p => p.estado === "En progreso");

const ordenarPorPrioridad = () => proyectos.sort((a, b) => a.prioridad - b.prioridad);

const eliminarUltimoProyecto = () => proyectos.pop();

const proyectosToString = () => proyectos.map(p => `${p.nombre} - Estado: ${p.estado}, Prioridad: ${p.prioridad}`).join("\n");

export {agregarProyecto, filtrarEnProgreso, ordenarPorPrioridad, eliminarUltimoProyecto, proyectosToString, proyectos };
