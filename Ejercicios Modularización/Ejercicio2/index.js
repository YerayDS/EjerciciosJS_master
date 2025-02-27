import { agregarPedido, eliminarPrimerPedido, contarPedidos, encontrarPedidoPorCliente, obtenerNombresPlatillos, hayPedidoDePlatillo } from './pedidos.js';

agregarPedido(1, 'Carlos', 'Pizza');
agregarPedido(2, 'María', 'Sushi');
agregarPedido(3, 'José', 'Hamburguesa');

console.log(`Total de pedidos: ${contarPedidos()}`);
console.log('Pedidos actuales:', obtenerNombresPlatillos());

console.log('Hay pedidos de Sushi?', hayPedidoDePlatillo('Sushi'));

console.log('Pedido de María:', encontrarPedidoPorCliente('María'));

eliminarPrimerPedido();
console.log('Después de eliminar el primer pedido:', obtenerNombresPlatillos());
