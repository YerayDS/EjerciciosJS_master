//1. Gestión de Inventario

function gestionarInventario() {
    let productos = [
        { nombre: 'Laptop', cantidad: 10, precio: 800 },
        { nombre: 'Teclado', cantidad: 50, precio: 20 },
        { nombre: 'Ratón', cantidad: 30, precio: 10 }
      ];
  
    function agregarProducto(nombre, cantidad, precio) {
      const producto = { nombre, cantidad, precio };
      productos.push(producto);
      console.log(`Producto "${nombre}" agregado al inventario.`);
    }
  
    function eliminarProducto(nombre) {
        const productosFiltrados = productos.filter(producto => producto.nombre !== nombre);
    
        if (productosFiltrados.length === productos.length) {
          console.log(`El producto "${nombre}" no se encontró en el inventario.`);
        } else {
          productos = productosFiltrados; 
          console.log(`Producto "${nombre}" eliminado del inventario.`);
        }
      }
  
    function filtrarPorPrecio(precio) {
      const productosFiltrados = productos.filter(producto => producto.precio > precio);
      console.log(`Productos con precio mayor a ${precio}:`);
      console.log(productosFiltrados);
    }
  
    function ordenarPorCantidad() {
      const productosOrdenados = productos.sort((a, b) => b.cantidad - a.cantidad);
      console.log('Productos ordenados por cantidad (de mayor a menor):');
      console.log(productosOrdenados);
    }
  
    return {
      agregarProducto,
      eliminarProducto,
      filtrarPorPrecio,
      ordenarPorCantidad
    };
  }


const inventario = gestionarInventario();

inventario.agregarProducto('Monitor', 15, 300);  

inventario.eliminarProducto('Ratón');  

inventario.filtrarPorPrecio(100);  

inventario.ordenarPorCantidad();