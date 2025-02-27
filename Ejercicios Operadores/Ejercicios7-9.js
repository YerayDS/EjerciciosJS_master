//EJERCICIO 7

function actualizarContador(contador) {
    if (contador.valor % 2 === 0) {
      contador.valor += 2;
    } else {
      contador.valor -= 1;
    }
    return contador;
  }

let contador = { valor: 4 };

console.log(actualizarContador(contador)); 
  
contador = { valor: 5 };
  
console.log(actualizarContador(contador));

//EJERCICIO 8

function verificarParidad(n) {
    return (n & 1) === 0 ? "Par" : "Impar";
  }
  
  console.log(verificarParidad(4));
  console.log(verificarParidad(7));  
  console.log(verificarParidad(10));

//EJERCICIO 9

function manipularBits(numero) {
    const duplicado = numero << 1;  
    const dividido = numero >> 1;  
  
    return {
      duplicado: duplicado,
      dividido: dividido
    };
  }
  
  console.log(manipularBits(4));  
  console.log(manipularBits(7));  
  console.log(manipularBits(10)); 

  
  