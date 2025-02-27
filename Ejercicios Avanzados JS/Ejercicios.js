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

//2. Análisis de Notas de Estudiantes

const estudiantes = [
    { nombre: 'Juan', calificacion: 8 },
    { nombre: 'Ana', calificacion: 5 },
    { nombre: 'Pedro', calificacion: 7 },
    { nombre: 'Lucía', calificacion: 9 },
    { nombre: 'Carlos', calificacion: 4 },
    { nombre: 'María', calificacion: 6 }
  ];


//FILTRAR APROBADOS
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 6);
console.log(estudiantesAprobados);

//NOTA MEDIA DE LA CLASE
let totalNotas = 0;
for (let i = 0; i < estudiantes.length; i++) {
  totalNotas += estudiantes[i].calificacion;
}
const notaMedia = totalNotas / estudiantes.length;
console.log(notaMedia);

//ESTUDIANTES ORDENADOS
let estudiantesOrdenados = [...estudiantes]; 
for (let i = 0; i < estudiantesOrdenados.length - 1; i++) {
  for (let j = 0; j < estudiantesOrdenados.length - 1 - i; j++) {
    if (estudiantesOrdenados[j].calificacion < estudiantesOrdenados[j + 1].calificacion) {
      let temp = estudiantesOrdenados[j];
      estudiantesOrdenados[j] = estudiantesOrdenados[j + 1];
      estudiantesOrdenados[j + 1] = temp;
    }
  }
}
console.log(estudiantesOrdenados);

//3. Historial de Transacciones Bancarias

const transacciones = [150, -50, 200, -120, 30, -80, 500];

let saldoTotal = 0;
for (let i = 0; i < transacciones.length; i++) {
  saldoTotal += transacciones[i];
}
console.log('Saldo total:', saldoTotal);

const transaccionesMayoresA100 = transacciones.filter(transaccion => transaccion > 100);
console.log('Transacciones mayores a 100:', transaccionesMayoresA100);

let transaccionesInvertidas = [];
for (let i = transacciones.length - 1; i >= 0; i--) {
  transaccionesInvertidas.push(transacciones[i]);
}
console.log('Transacciones invertidas:', transaccionesInvertidas);

//4. Gestión de Tareas (To-Do List)

function gestionarTareas() {
    let tareas = [];

    function añadirTarea(nombre) {
        const tarea = { nombre, completada: false };
        tareas.push(tarea);
        console.log(`Tarea "${nombre}" añadida.`);
    }

    function marcarComoCompletada(nombre) {
        const tarea = tareas.find(tarea => tarea.nombre === nombre);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea "${nombre}" marcada como completada.`);
        } else {
            console.log(`La tarea "${nombre}" no se encuentra.`);
        }
    }

    function filtrarTareasCompletadas() {
        const tareasCompletadas = tareas.filter(tarea => tarea.completada === true);
        console.log('Tareas completadas:');
        console.log(tareasCompletadas);
    }

    function filtrarTareasIncompletas() {
        const tareasIncompletas = tareas.filter(tarea => tarea.completada === false);
        console.log('Tareas incompletas:');
        console.log(tareasIncompletas);
    }

    function contarTareasPendientes() {
        const tareasPendientes = tareas.filter(tarea => tarea.completada === false);
        console.log(`Número de tareas pendientes: ${tareasPendientes.length}`);
    }

    return {
        añadirTarea,
        marcarComoCompletada,
        filtrarTareasCompletadas,
        filtrarTareasIncompletas,
        contarTareasPendientes
    };
}

const miTareas = gestionarTareas();

miTareas.añadirTarea('Hacer la compra');
miTareas.añadirTarea('Estudiar JavaScript');
miTareas.añadirTarea('Lavar los platos');

miTareas.marcarComoCompletada('Hacer la compra');

miTareas.filtrarTareasCompletadas();
miTareas.filtrarTareasIncompletas();

miTareas.contarTareasPendientes();

//5. Operaciones con Nombres de Usuarios

const nombres = ['Ana', 'Carlos', 'Alfredo', 'Pedro', 'Amalia', 'Luis'];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log('Nombres en mayúsculas:', nombresMayusculas);

const nombresConA = nombresMayusculas.filter(nombre => nombre[0] === 'A');
console.log('Nombres que comienzan con "A":', nombresConA);

const nombresOrdenados = nombresConA.sort();
console.log('Nombres ordenados alfabéticamente:', nombresOrdenados);

//6. Análisis de Datos Climáticos

const temperaturas = [15, 22, 30, 18, 27, 35, 12, 25];

let tempMaxima = temperaturas[0];
let tempMinima = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
  if (temperaturas[i] > tempMaxima) {
    tempMaxima = temperaturas[i];
  }
  if (temperaturas[i] < tempMinima) {
    tempMinima = temperaturas[i];
  }
}

console.log(`Temperatura más alta: ${tempMaxima}°C`);
console.log(`Temperatura más baja: ${tempMinima}°C`);

let sumaTemperaturas = 0;
for (let i = 0; i < temperaturas.length; i++) {
  sumaTemperaturas += temperaturas[i];
}

const mediaTemperatura = sumaTemperaturas / temperaturas.length;

const temperaturasArribaMedia = [];
for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] > mediaTemperatura) {
    temperaturasArribaMedia.push(temperaturas[i]);
  }
}

console.log(`Temperaturas por encima de la media (${temperaturasArribaMedia})`);

const temperaturasFahrenheit = [];
for (let i = 0; i < temperaturas.length; i++) {
  const fahrenheit = (temperaturas[i] * 9 / 5) + 32;
  temperaturasFahrenheit.push(fahrenheit);
}

console.log('Temperaturas en Fahrenheit:');
console.log(temperaturasFahrenheit);

//7. Combinar Listas de Contactos (Operador Spread)

const contactos1 = ['Carlos', 'Ana', 'Luis', 'Pedro'];
const contactos2 = ['María', 'Pedro', 'Sofía', 'Carlos'];

const contactosCombinados = [...new Set([...contactos1, ...contactos2])];

const contactosOrdenados = contactosCombinados.sort();

console.log('Lista combinada y ordenada de contactos:');
console.log(contactosOrdenados);

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


//9. Filtrado de Libros por Autor y Año

const libros = [
    { titulo: 'El Alquimista', autor: 'Paulo Coelho', año: 1988 },
    { titulo: 'Sapiens', autor: 'Yuval Noah Harari', año: 2011 },
    { titulo: 'El psicoanalista', autor: 'John Katzenbach', año: 2002 },
    { titulo: '1984', autor: 'George Orwell', año: 1949 },
    { titulo: 'Homo Deus', autor: 'Yuval Noah Harari', año: 2015 }
];

const librosPost2010 = libros.filter(libro => libro.año > 2010);

console.log('Libros publicados después de 2010:');
console.log(librosPost2010);

const primerLibroHarari = libros.find(libro => libro.autor === 'Yuval Noah Harari');

console.log('\nPrimer libro de Yuval Noah Harari:');
console.log(primerLibroHarari);

const librosOrdenadosPorAño = libros.sort((a, b) => a.año - b.año);

console.log('\nLibros ordenados por año de publicación:');
console.log(librosOrdenadosPorAño);


//10. Gestión de Inscripciones a un Evento

let participantes = ['Ana', 'Luis', 'Pedro', 'María', 'Carlos'];

function agregarParticipante(nombre) {
  participantes.push(nombre);
  console.log(`Participante "${nombre}" agregado.`);
}

function eliminarParticipante(nombre) {
  const participantesFiltrados = participantes.filter(participante => participante !== nombre);

  if (participantesFiltrados.length === participantes.length) {
    console.log(`Participante "${nombre}" no encontrado.`);
  } else {
    participantes = participantesFiltrados; // Se reasigna el nuevo array sin el participante eliminado.
    console.log(`Participante "${nombre}" eliminado.`);
  }
}

function filtrarPorLetra(letra) {
  const participantesFiltrados = participantes.filter(participante => participante.includes(letra));
  console.log(`Participantes que contienen la letra "${letra}":`);
  console.log(participantesFiltrados);
}

function convertirALista() {
  const listaParticipantes = participantes.join(', ');
  console.log('Lista de participantes:');
  console.log(listaParticipantes);
}

agregarParticipante('Sofía');
eliminarParticipante('Luis');
filtrarPorLetra('a');
convertirALista();

//11. Estadísticas de Redes Sociales

const publicaciones = [
    { id: 1, likes: 120, comentarios: 30 },
    { id: 2, likes: 50, comentarios: 10 },
    { id: 3, likes: 200, comentarios: 100 },
    { id: 4, likes: 80, comentarios: 20 },
    { id: 5, likes: 150, comentarios: 40 }
  ];
  
  const totalLikes = publicaciones.reduce((acc, publicacion) => acc + publicacion.likes, 0);
  console.log('Total de likes:', totalLikes);
  
  const publicacionesMasDe100Likes = publicaciones.filter(publicacion => publicacion.likes > 100);
  console.log('Publicaciones con más de 100 likes:', publicacionesMasDe100Likes);
  
  const publicacionesOrdenadas = publicaciones.sort((a, b) => (b.likes + b.comentarios) - (a.likes + a.comentarios));
  console.log('Publicaciones ordenadas por popularidad:', publicacionesOrdenadas);
  
  //12. Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 19 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'María', edad: 16 }
  ];
  
  function gestionarAlumnos() {
    function añadirAlumno(nombre, edad) {
      const nuevoAlumno = { nombre, edad };
      return [...alumnos, nuevoAlumno]; 
    }
  
    function actualizarAlumno(nombre, nuevaEdad) {
      const alumnosActualizados = alumnos.map(alumno => {
        if (alumno.nombre === nombre) {
          return { ...alumno, edad: nuevaEdad };
        }
        return alumno; 
      });
      return alumnosActualizados; 
    }
  
    function contarMayoresDe18() {
      return alumnos.filter(alumno => alumno.edad > 18).length;
    }
  
    return {
      añadirAlumno,
      actualizarAlumno,
      contarMayoresDe18
    };
  }
  
  const gestor = gestionarAlumnos();
  
  const alumnosConNuevo = gestor.añadirAlumno('Carlos', 22);
  console.log('Alumnos después de añadir a Carlos:', alumnosConNuevo);
  
  const alumnosActualizados = gestor.actualizarAlumno('Ana', 18);
  console.log('Alumnos después de actualizar a Ana:', alumnosActualizados);
  
  const cantidadMayoresDe18 = gestor.contarMayoresDe18();
  console.log('Número de alumnos mayores de 18 años:', cantidadMayoresDe18);
  
  //13. Análisis de Palabras en un Texto

const texto = "La programación en JavaScript puede ser desafiante.";

const palabras = texto.split(' ');

const palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);

const palabrasOrdenadas = palabrasFiltradas.sort((a, b) => b.length - a.length);

console.log(palabrasOrdenadas);

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
  