const notas = [];

const agregarNota = (titulo, prioridad) => {
    notas.push({ titulo, prioridad });
};

const filtrarNotasUrgentes = () => notas.filter(nota => nota.prioridad === 'Urgente');

const ordenarNotasPorPrioridad = () => {
    // Definimos las prioridades para cada nivel
    const prioridades = { 'Urgente': 1, 'Alta': 2, 'Media': 3, 'Baja': 4 };

    notas.sort((a, b) => prioridades[a.prioridad] - prioridades[b.prioridad]);
};

const buscarNota = (titulo) => notas.find(nota => nota.titulo.toLowerCase() === titulo.toLowerCase());

export { agregarNota, filtrarNotasUrgentes, ordenarNotasPorPrioridad, buscarNota, notas };
