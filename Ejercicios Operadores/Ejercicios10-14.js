//EJERCICIO 10

function registrarAsistencia(estudiantes) {
    const asistencia = {};
  
    estudiantes.forEach(estudiante => {
      asistencia[estudiante] = true;  
    });
  
    return asistencia;
  }
  
  const estudiantes = ["Juan", "Ana", "Luis", "Carlos", "Sofia"];
  console.log(registrarAsistencia(estudiantes));

//EJERCICIO 11

function verificarStock(productos) {
    let tieneStock = true;
  
    productos.forEach(producto => {
      if (producto.stock <= 0) {
        tieneStock = false;  
      }
    });
  
    return tieneStock;  
  }
  
  const productos = [
    { nombre: "Producto 1", stock: 10 },
    { nombre: "Producto 2", stock: 5 },
    { nombre: "Producto 3", stock: 3 }
  ];
  
  console.log(verificarStock(productos));  
  
  const productosConAgotado = [
    { nombre: "Producto 1", stock: 10 },
    { nombre: "Producto 2", stock: 0 },
    { nombre: "Producto 3", stock: 3 }
  ];
  
  console.log(verificarStock(productosConAgotado));  
  
//EJERCICIO 12

function calcularTotal(productos) {
    let total = 0;
  
    productos.forEach(producto => {
      total += producto.precio * producto.cantidad; 
    });
  
    return total;
  }
  
  const productos1 = [
    { nombre: "Producto 1", precio: 10, cantidad: 2 },
    { nombre: "Producto 2", precio: 5, cantidad: 3 },
    { nombre: "Producto 3", precio: 20, cantidad: 1 }
  ];
  
  console.log(calcularTotal(productos1));  

//EJERCICIO 13

function eliminarMenoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
  }
  
  const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carlos", edad: 15 }
  ];
  
  console.log(eliminarMenoresDeEdad(personas)); 

//EJERCICIO 14

function actualizarNiveles(usuarios) {
    return usuarios.map(usuario => {
      if (usuario.nivel === "básico") {
        usuario.nivel = "intermedio";
      } else if (usuario.nivel === "intermedio") {
        usuario.nivel = "avanzado";
      }
      return usuario;
    });
  }
  
  const usuarios = [
    { usuario: "Juan", nivel: "básico" },
    { usuario: "Ana", nivel: "intermedio" },
    { usuario: "Luis", nivel: "básico" },
    { usuario: "Carlos", nivel: "intermedio" }
  ];
  
  console.log(actualizarNiveles(usuarios)); 

  