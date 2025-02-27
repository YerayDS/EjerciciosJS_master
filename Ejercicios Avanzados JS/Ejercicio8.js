//8. Gestión de Carrito de Compras

let carrito = [
    { nombre: 'Laptop', precio: 800 },
    { nombre: 'Teclado', precio: 20 },
    { nombre: 'Ratón', precio: 10 }
];

carrito.push({ nombre: 'Monitor', precio: 150 });
carrito.push({ nombre: 'Auriculares', precio: 50 });

console.log('Carrito después de agregar productos:');
console.log(carrito);

carrito.pop();

console.log('\nCarrito después de eliminar el último producto:');
console.log(carrito);

let precioTotal = 0;
for (let i = 0; i < carrito.length; i++) {
    precioTotal += carrito[i].precio;
}

console.log(`\nPrecio total del carrito: $${precioTotal}`);

carrito.sort((a, b) => a.precio - b.precio);

console.log('\nCarrito después de ordenar los productos por precio (de menor a mayor):');
console.log(carrito);
