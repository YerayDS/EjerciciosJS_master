//14. Simulación de una Cola de Atención

let colaDeClientes = [];

function agregarCliente(cliente) {
  colaDeClientes.push(cliente);
  console.log(`Cliente "${cliente}" añadido a la cola.`);
}

function atenderCliente() {
  if (colaDeClientes.length === 0) {
    console.log("No hay clientes en la cola.");
    return;
  }
  const clienteAtendido = colaDeClientes.shift(); 
  console.log(`Cliente "${clienteAtendido}" ha sido atendido.`);
}

function siguienteCliente() {
  if (colaDeClientes.length === 0) {
    console.log("No hay clientes en la cola.");
    return;
  }
  console.log(`El siguiente cliente en ser atendido es: "${colaDeClientes[0]}"`);
}

function contarClientes() {
  console.log(`Hay ${colaDeClientes.length} clientes en la cola.`);
}

agregarCliente("Carlos");
agregarCliente("Ana");
agregarCliente("Pedro");

siguienteCliente(); 
contarClientes(); 

atenderCliente(); 
contarClientes(); 

agregarCliente("Laura");
siguienteCliente(); 
