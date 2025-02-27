//EJERCICIO 15

function agregarCategoria(personas) {
    return personas.map(persona => {
      if (persona.edad < 12) {
        persona.categoria = "Infantil";
      } else if (persona.edad >= 12 && persona.edad <= 17) {
        persona.categoria = "Adolescente";
      } else {
        persona.categoria = "Adulto";
      }
      return persona;
    });
  }
  
  const personas = [
    { nombre: "Juan", edad: 10 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Luis", edad: 20 },
    { nombre: "Carlos", edad: 8 },
    { nombre: "Sofia", edad: 30 }
  ];
  
  console.log(agregarCategoria(personas)); 

//EJERCICIO 16

function sustituirNegativosPorCero(numeros) {
    return numeros.map(numero => numero < 0 ? 0 : numero);
  }
  
  const numeros = [10, -5, 3, -2, 7, -1];
  console.log(sustituirNegativosPorCero(numeros)); 
  
//EJERCICIO 17

function transformarNombres(nombres) {
    return nombres.map(nombre => ({
      nombre: nombre.toUpperCase(),
      longitud: nombre.length
    }));
  }
  
  const nombres = ["Juan", "Ana", "Luis", "Carlos", "Sofia"];
  console.log(transformarNombres(nombres)); 

//EJERCICIO 18

function obtenerInvitadosConfirmados(nombres, confirmaciones) {
    let invitadosConfirmados = [];  
  
    for (let i = 0; i < nombres.length; i++) {
      if (confirmaciones[i]) {  
        invitadosConfirmados.push(nombres[i]); 
      }
    }
  
    return invitadosConfirmados; 
  }
  
  const nombres1 = ["Juan", "Ana", "Luis", "Carlos", "Sofia"];
  const confirmaciones = [true, false, true, false, true];
  
  console.log(obtenerInvitadosConfirmados(nombres1, confirmaciones)); 
  
//EJERCICIO 19

function asignarLetraDNIs(dnis) {
    const tablaLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    return dnis.map(dni => {
      const letra = tablaLetras[dni % 23]; 
      return { dni, letra }; 
    });
  }
  
  const dnis = [12345678, 98765432, 12345679];
  console.log(asignarLetraDNIs(dnis));

//EJERCICIO 20

function contarFrecuenciaNumeros(array) {
    const frecuencia = {};
  
    array.forEach(num => {
      if (frecuencia[num]) {
        frecuencia[num]++;
      } else {
        frecuencia[num] = 1;
      }
    });
  
    return frecuencia;
  }
  
  const numeros2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  console.log(contarFrecuenciaNumeros(numeros2));
  