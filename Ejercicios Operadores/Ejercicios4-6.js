//EJERCICIO 4

function filtrarUsuarios(usuarios) {
    return usuarios.filter(usuario => usuario.edad > 18 && usuario.activo);
}

const usuarios = [
    { nombre: "Ana", edad: 25, activo: true },
    { nombre: "Luis", edad: 17, activo: true },
    { nombre: "Carlos", edad: 20, activo: false },
    { nombre: "Marta", edad: 30, activo: true }
];

console.log(filtrarUsuarios(usuarios));

//EJERCICIO 5

function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
      return false;
    }
  
    for (let i = 0; i < contraseña.length; i++) {
      if (contraseña[i] === ' ') {
        return false;
      }
    }
  
    let tieneMayuscula = false;
    let tieneNumero = false;
  
    for (let i = 0; i < contraseña.length; i++) {
      if (contraseña[i] >= 'A' && contraseña[i] <= 'Z') {
        tieneMayuscula = true;
      }
      if (contraseña[i] >= '0' && contraseña[i] <= '9') {
        tieneNumero = true;
      }
    }
  
    if (tieneMayuscula && tieneNumero) {
      return true;
    } else {
      return false;
    }
  }

console.log(validarContraseña("Password1")); 
console.log(validarContraseña("pass1")); 
console.log(validarContraseña("password")); 
console.log(validarContraseña("PASSWORD1")); 
console.log(validarContraseña("Pass word1"));

//EJERCICIO 6

function clasificarNumero(numero) {
    return numero > 0 ? "Positivo" : (numero < 0 ? "Negativo" : "Cero");
  }

function clasificarArray(numeros){
  return numeros.map(numero => numero > 0 ? 'Positivo' : (numero < 0) ? 'Negativo' : 'Cero');
}

let arrayNumeros = [1,3,-2,0];

console.log(clasificarArray(arrayNumeros));

console.log(clasificarNumero(5));  
console.log(clasificarNumero(-3)); 
console.log(clasificarNumero(0));   
console.log(clasificarNumero(10));