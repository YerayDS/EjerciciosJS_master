const pedidos = [];

const agregarPedido = (id, cliente, platillo) => {
    pedidos.push({ id, cliente, platillo });
};

const eliminarPrimerPedido = () => pedidos.shift();

const contarPedidos = () => pedidos.length;

const encontrarPedidoPorCliente = (nombreCliente) => pedidos.find(p => p.cliente.toLowerCase() === nombreCliente.toLowerCase());

const obtenerNombresPlatillos = () => pedidos.map(p => p.platillo);

const hayPedidoDePlatillo = (nombrePlatillo) => pedidos.map(p => p.platillo).includes(nombrePlatillo);

export { agregarPedido, eliminarPrimerPedido, contarPedidos, encontrarPedidoPorCliente, obtenerNombresPlatillos, hayPedidoDePlatillo, pedidos };
