const productos = [];

const agregarProducto = (nombre, calificaciones) => {
    productos.push({ nombre, calificaciones });
};

const calcularPromedioCalificaciones = (producto) => {
    if (producto.calificaciones.length === 0) return 0; 
    const totalCalificaciones = producto.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return totalCalificaciones / producto.calificaciones.length;
};

export { agregarProducto, calcularPromedioCalificaciones, productos };
