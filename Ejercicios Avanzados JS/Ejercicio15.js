//15. Gestión de Inventario de Productos (Avanzado con Spread)

const inventario1 = [
    { nombre: 'Laptop', precio: 800, stock: 5 },
    { nombre: 'Teclado', precio: 20, stock: 0 },
    { nombre: 'Ratón', precio: 15, stock: 10 }
  ];
  
  const inventario2 = [
    { nombre: 'Monitor', precio: 150, stock: 2 },
    { nombre: 'Teclado', precio: 18, stock: 5 }, 
    { nombre: 'Auriculares', precio: 30, stock: 8 }
  ];
  
  function agregarProducto(inventario, nuevoProducto) {
    return [...inventario, nuevoProducto]; 
  }
  
  function actualizarPrecio(inventario, nombreProducto, nuevoPrecio) {
    return inventario.map(producto => 
      producto.nombre === nombreProducto
        ? { ...producto, precio: nuevoPrecio }  // Si es el producto que buscamos, actualizamos el precio
        : producto
    );
  }
  
  function eliminarConStockCero(inventario) {
    return inventario.filter(producto => producto.stock > 0); 
  }
  
  function combinarInventarios(inventario1, inventario2) {
    const combinados = [...inventario1, ...inventario2];
    return combinados.filter((producto, index, self) => 
      index === self.findIndex(p => p.nombre === producto.nombre) 
    );
  }
  
  const nuevoProducto = { nombre: 'Cámara', precio: 200, stock: 3 };
  
  const inventarioConNuevoProducto = agregarProducto(inventario1, nuevoProducto);
  console.log('Inventario con nuevo producto:', inventarioConNuevoProducto);
  
  const inventarioConPrecioActualizado = actualizarPrecio(inventario1, 'Ratón', 18);
  console.log('Inventario con precio actualizado:', inventarioConPrecioActualizado);
  
  const inventarioSinStockCero = eliminarConStockCero(inventario1);
  console.log('Inventario sin productos con stock 0:', inventarioSinStockCero);
  
  const inventarioCombinado = combinarInventarios(inventario1, inventario2);
  console.log('Inventario combinado sin duplicados:', inventarioCombinado);
  