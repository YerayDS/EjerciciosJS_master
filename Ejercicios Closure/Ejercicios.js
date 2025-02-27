//Ejercicio 1
function crearContador() {
    let contador = 0; 
  
    return function () { 
      contador++; 
      return contador; 
    };
  }
  
  const miContador = crearContador();
  
  console.log(miContador()); 
  console.log(miContador()); 
  console.log(miContador()); 
  

//Ejercicio 2
function crearPrefijo(prefijo) {
    return function (palabra) {
      return prefijo + palabra; 
    };
  }
  
  const agregarSuper = crearPrefijo("Super");
  console.log(agregarSuper("héroe")); 
  console.log(agregarSuper("estrella")); 
  
  const agregarMini = crearPrefijo("Mini");
  console.log(agregarMini("juego"));  
  console.log(agregarMini("serie"));  
  

//Ejercicio 3
function crearCuentaBancaria() {
    let saldo = 0; 
  
    return {
      depositar: function (cantidad) {
        if (cantidad > 0) {
          saldo += cantidad;
          console.log(`Deposito: $${cantidad}. Saldo actual: $${saldo}`);
        } else {
          console.log("Cantidad invalida para depositar.");
        }
      },
  
      retirar: function (cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
          saldo -= cantidad;
          console.log(`Retiro: $${cantidad}. Saldo actual: $${saldo}`);
        } else {
          console.log("Fondos insuficientes.");
        }
      },
  
      consultarSaldo: function () {
        console.log(`Saldo actual: $${saldo}`);
        return saldo;
      }
    };
  }
  
  const miCuenta = crearCuentaBancaria();
  
  miCuenta.depositar(100); 
  miCuenta.retirar(30);   
  miCuenta.consultarSaldo(); 
  miCuenta.retirar(100);   
  

//Ejercicio 4
function crearTemporizador(segundos) {
    let tiempoRestante = segundos; 
  
    return function () {
      if (tiempoRestante > 0) {
        console.log(`Tiempo restante: ${tiempoRestante} segundos`);
        tiempoRestante--; 
      } else {
        console.log('Tiempo terminado');
      }
    };
  }
  
  const temporizador = crearTemporizador(5);
  
  temporizador(); 
  temporizador();
  temporizador(); 
  temporizador();
  temporizador(); 
  temporizador(); 
  


//Ejercicio 5

function crearGeneradorId() {
    let id = 0; 
  
    return function () {
      id++; 
      return id;
    };
  }
  
  const generarId = crearGeneradorId();
  
  console.log(generarId()); 
  console.log(generarId()); 
  console.log(generarId()); 
  console.log(generarId()); 
  

//Ejercicio 6
function crearContador1() {
    let contador = 0; 
  
    return {
      incrementar: function () {
        contador++; 
        return contador;
      },
      reset: function () {
        contador = 0; 
        console.log("Contador reiniciado");
      }
    };
  }
  
  const miContador1 = crearContador1();
  
  console.log(miContador1.incrementar()); 
  console.log(miContador1.incrementar()); 
  console.log(miContador1.incrementar()); 
  miContador1.reset(); 
  console.log(miContador1.incrementar());
  


//Ejercicio 7
function crearLogger() {
    let historial = []; 
  
    return {
      registrar: function (mensaje) {
        historial.push(mensaje); 
        console.log(`Mensaje registrado: ${mensaje}`);
      },
      verHistorial: function () {
        return [...historial]; 
      }
    };
  }
  
  const logger = crearLogger();
  
  logger.registrar("Primer mensaje"); 
  logger.registrar("Segundo mensaje"); 
  
  console.log(logger.verHistorial()); 
  

//Ejercicio 8
function crearSumaAcumulativa() {
    let sumaAcumulada = 0; 
  
    return function (valor) {
      sumaAcumulada += valor; 
      return sumaAcumulada; 
    };
  }
  
  const suma = crearSumaAcumulativa();
  
  console.log(suma(5));  
  console.log(suma(10)); 
  console.log(suma(3));  
  console.log(suma(7)); 
  
  
//Ejercicio 10
function crearMultiplicador(valorInicial) {
    return function (numero) {
      return valorInicial * numero; 
    };
  }
  
  const multiplicadorPor2 = crearMultiplicador(2);
  const multiplicadorPor5 = crearMultiplicador(5);
  
  console.log(multiplicadorPor2(10)); 
  console.log(multiplicadorPor5(3));  
  console.log(multiplicadorPor2(4));  
  