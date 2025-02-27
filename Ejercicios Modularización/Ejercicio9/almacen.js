const productos = [];

const agregarProducto = (nombre, stock) => {
    productos.push({ nombre, stock });
};

const eliminarUltimoProducto = () => {
    productos.pop();
};

const filtrarProductosConStockBajo = (limite) => {
    return productos.filter(producto => producto.stock < limite);
};

const ordenarProductosPorStock = () => {
    productos.sort((a, b) => a.stock - b.stock);
};

export { agregarProducto, eliminarUltimoProducto, filtrarProductosConStockBajo, ordenarProductosPorStock, productos };
