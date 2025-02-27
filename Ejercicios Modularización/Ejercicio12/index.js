import { agregarProducto, calcularPromedioCalificaciones, productos } from './productos.js';

agregarProducto("Smartphone", [5, 4, 3, 4, 5]);
agregarProducto("Laptop", [4, 5, 4, 3, 4]);
agregarProducto("Auriculares", [3, 3, 4, 3, 3]);

productos.forEach(producto => {
    const promedio = calcularPromedioCalificaciones(producto);
    console.log(`${producto.nombre} - Promedio de calificación: ${promedio.toFixed(2)}`);
});
