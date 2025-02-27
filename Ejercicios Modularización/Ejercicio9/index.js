import { agregarProducto, eliminarUltimoProducto, filtrarProductosConStockBajo, ordenarProductosPorStock, productos } from './almacen.js';

agregarProducto("Laptop", 5);
agregarProducto("Teclado", 12);
agregarProducto("Monitor", 3);
agregarProducto("Mouse", 20);
agregarProducto("Auriculares", 8);

console.log(" Productos con stock bajo:");
console.log(filtrarProductosConStockBajo(10));

console.log("\n Productos ordenados por stock:");
ordenarProductosPorStock();
console.log(productos.map(producto => `${producto.nombre} - Stock: ${producto.stock}`));

eliminarUltimoProducto();
console.log("Productos despues de eliminar el ultimo:");
console.log(productos);
