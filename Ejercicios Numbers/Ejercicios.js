//Ejercicio 1
const convertirNumerosACadenas = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    for (let num of numeros) {
        if (typeof num !== 'number') {
            console.log("Todos los elementos del array deben ser numeros.");
        }
    }

    const numerosComoCadenas = numeros.map(num => num.toString());

    return {
        original: numeros,
        convertido: numerosComoCadenas
    };
};

const numeros = [10, 25, 100, 3.14, -7];
const resultado = convertirNumerosACadenas(numeros);

console.log("Array Original:", resultado.original);
console.log("Array Convertido:", resultado.convertido);

//Ejercicio 2
const redondearNumeros = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    for (let num of numeros) {
        if (typeof num !== 'number') {
            console.log(`El valor "${num}" no es un numero.`);
        }
    }

    const numerosRedondeados = numeros.map(num => Number(num.toFixed(3)));

    return {
        original: numeros,
        redondeado: numerosRedondeados
    };
};

const numeros2 = [3.14159, 2.71828, 1.41421, 0.57721, 4.6692];
const resultado2 = redondearNumeros(numeros2);

console.log("Array Original:", resultado2.original);
console.log("Array Redondeado:", resultado2.redondeado);


//Ejercicio 3
const convertirANotacionExponencial = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    for (let num of numeros) {
        if (typeof num !== 'number') {
            console.log(`El valor "${num}" no es un numero.`);
        }
    }

    const conversion = numeros.map(num => {
        const notacion = num.toExponential(4);
        return notacion;
    });

    return {
        original: numeros,
        convertido: conversion
    };
};

const numeros3 = [123456789, 0.000456, -987654321, 3.141592, -0.00001234];
const resultado3 = convertirANotacionExponencial(numeros3);

console.log("Array Original:", resultado3.original);
console.log("Array Convertido:", resultado3.convertido);


//Ejercicio 4
const filtrarPorValorAbsoluto = (objetos, umbral) => {
    if (!Array.isArray(objetos)) {
        console.log("El parametro debe ser un array de objetos.");
    }
    if (typeof umbral !== 'number') {
        console.log("El umbral debe ser un numero.");
    }

    const filtrados = objetos.filter(obj => Math.abs(obj.valor) > umbral);

    return filtrados;
};

// Ejemplo de uso
const datos = [
    { nombre: "A", valor: 10 },
    { nombre: "B", valor: -5 },
    { nombre: "C", valor: 20 },
    { nombre: "D", valor: -2 },
    { nombre: "E", valor: 15 }
];

const umbral = 5;
const resultado4 = filtrarPorValorAbsoluto(datos, umbral);

console.log("Datos Originales:", datos);
console.log("Datos Filtrados:", resultado4);


//Ejercicio 5
const redondearHaciaArriba = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    const numerosValidos = numeros.filter(num => typeof num === 'number' && !isNaN(num));

    const redondeados = numerosValidos.map(num => Math.ceil(num));

    return redondeados;
};

const datos5 = [3.2, -1.8, 7.6, NaN, 5.3, "texto", 8.9, -4.1];

const resultado5 = redondearHaciaArriba(datos5);

console.log("Datos Originales:", datos5);
console.log("Datos Redondeados:", resultado5);


//Ejercicio 6
const redondearHaciaAbajo = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    for (let num of numeros) {
        if (typeof num !== 'number' || isNaN(num)) {
            console.log("Todos los elementos del array deben ser numeros validos.");
        }
    }

    return numeros.map(num => Number.isInteger(num) ? num : Math.floor(num));
};

const datos6 = [4.7, 2, 9.9, -3.5, -8, 6.1];

const resultado6 = redondearHaciaAbajo(datos6);

console.log("Datos Originales:", datos6);
console.log("Datos Redondeados:", resultado6);


//Ejercicio 7
const redondeoInteligente = (numeros) => {
    if (!Array.isArray(numeros)) {
        console.log("El parametro debe ser un array.");
    }

    for (let num of numeros) {
        if (typeof num !== 'number' || isNaN(num)) {
            console.log("Todos los elementos del array deben ser numeros validos.");
        }
    }

    return numeros.map(num => {
        const decimal = num % 1; 
        
        if (decimal === 0.5 || decimal === -0.5) {
            const enteroBase = Math.floor(num); 
            return (enteroBase % 2 === 0) ? enteroBase : enteroBase + 1; 
        }

        return Math.round(num); 
    });
};

const datos7 = [2.5, 3.5, 4.4, 5.6, -2.5, -3.5, 7.2, 8.8];

const resultado7 = redondeoInteligente(datos7);

console.log("Datos Originales:", datos7);
console.log("Datos Redondeados:", resultado7);


//Ejercicio 8
const generarNumerosAleatorios = (n, min, max) => {
    if (typeof n !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        console.log("Todos los parametros deben ser numeros.");
    }
    if (min > max) {
        console.log("El valor minimo no puede ser mayor que el maximo.");
    }

    const numerosAleatorios = [];
    for (let i = 0; i < n; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero);
    }

    return numerosAleatorios;
};

const cantidad = 5;
const minimo = 10;
const maximo = 50;

const resultado8 = generarNumerosAleatorios(cantidad, minimo, maximo);

console.log("Numeros Aleatorios Generados:", resultado8);


//Ejercicio 9
const filtrarElementosNumericos = (array) => {
    if (!Array.isArray(array)) {
        console.log("El parametro debe ser un array.");
    }

    return array.filter(elemento => typeof elemento === 'number' && !isNaN(elemento));
};

const datos9 = [10, 'texto', NaN, 25, true, null, -5, 42.7, undefined, '50', 0];

const resultado9 = filtrarElementosNumericos(datos9);

console.log("Datos Originales:", datos9);
console.log("Elementos Numericos Filtrados:", resultado9);


//Ejercicio 10
const convertirCadenasANumerosEnteros = (cadenas) => {
    if (!Array.isArray(cadenas)) {
        console.log("El parametro debe ser un array.");
    }

    return cadenas.map(cadena => {
        let base;
        if (cadena.startsWith('0b')) {
            base = 2; 
        } else if (cadena.startsWith('0o')) {
            base = 8; 
        } else if (cadena.startsWith('0x')) {
            base = 16; 
        } else {
            base = 10; 
        }

        return parseInt(cadena, base);
    });
};

const cadenasNumericas = ['0b1010', '0o12', '34', '0x1F', '15'];

const resultado10 = convertirCadenasANumerosEnteros(cadenasNumericas);

console.log("Cadenas Originales:", cadenasNumericas);
console.log("Numeros Enteros Convertidos:", resultado10);


//Ejercicio 11
const convertirCadenasADecimales = (cadenas) => {
    if (!Array.isArray(cadenas)) {
        console.log("El parametro debe ser un array.");
    }

    return cadenas.map(cadena => {
        const numeroDecimal = parseFloat(cadena);
        return isNaN(numeroDecimal) ? null : numeroDecimal; 
    });
};

const cadenasNumericas11 = ['12.34abc', '56.78', '90.12xyz', '100', 'invalid', '45.67.89'];

const resultado11 = convertirCadenasADecimales(cadenasNumericas11);

console.log("Cadenas Originales:", cadenasNumericas11);
console.log("Numeros Decimales Convertidos:", resultado11);


//Ejercicio 12
const convertirValoresAMixtosANumeros = (valores) => {
    if (!Array.isArray(valores)) {
        console.log("El parametro debe ser un array.");
    }

    const valoresConvertidos = [];
    const valoresNoConvertidos = [];

    valores.forEach(valor => {
        const numero = Number(valor);
        if (isNaN(numero)) {
            valoresNoConvertidos.push(valor); // No se pudo convertir
        } else {
            valoresConvertidos.push(numero); // Se convirtió correctamente
        }
    });

    return {
        convertidos: valoresConvertidos,
        noConvertidos: valoresNoConvertidos,
    };
};

const valoresMixtos = [42, '23', true, null, undefined, 'text', NaN, [1, 2], { key: 'value' }, false];

const resultado12 = convertirValoresAMixtosANumeros(valoresMixtos);

console.log("Valores Originales:", valoresMixtos);
console.log("Valores Convertidos Correctamente:", resultado12.convertidos);
console.log("Valores No Convertidos:", resultado12.noConvertidos);


//Ejercicio 13
const extraerValoresPrimitivosDeNumeros = (valores) => {
    if (!Array.isArray(valores)) {
        console.log("El parametro debe ser un array.");
    }

    return valores.map(valor => {
        if (valor instanceof Number) {
            return valor.valueOf(); 
        }
        return valor; 
    });
};

const valoresMixtos13 = [42, new Number(23), true, null, new Number(5), 'text', [1, 2], { key: 'value' }, false];

const resultado13 = extraerValoresPrimitivosDeNumeros(valoresMixtos13);

console.log("Valores Originales:", valoresMixtos13);
console.log("Valores Corregidos:", resultado13);


//Ejercicio 14
const generarNumerosAleatoriosConRedondeo = (n) => {
    if (typeof n !== 'number' || n <= 0) {
        console.log("El parametro debe ser un numero entero positivo.");
    }

    const numeros = [];

    for (let i = 0; i < n; i++) {
        const numeroAleatorio = Math.random() * 100;
        const numeroRedondeado = Math.round(numeroAleatorio); 
        
        numeros.push({
            original: numeroAleatorio,
            redondeado: numeroRedondeado,
        });
    }

    return numeros; 
};

const cantidad14 = 5; 
const resultado14 = generarNumerosAleatoriosConRedondeo(cantidad14);

console.log("Numeros Aleatorios con Redondeo:");
console.log(resultado14);


//Ejercicio 15
const transformarStringsANumerosDetallados = (cadenas) => {
    if (!Array.isArray(cadenas)) {
        console.log("El parametro debe ser un array.");
    }

    return cadenas.map(cadena => {
        const numero = parseFloat(cadena); 

        if (isNaN(numero)) {
            console.log(`La cadena '${cadena}' no es un numero valido.`);
        }

        return {
            original: cadena,
            numero: numero,
            exponencial: numero.toExponential(2), 
            redondeado: Math.round(numero) 
        };
    });
};

const cadenasNumericas15 = ["10.5", "3.14159", "2.71828", "0.1", "100.75"];
const resultado15 = transformarStringsANumerosDetallados(cadenasNumericas15);

console.log("Transformacion de Strings Numericos:");
console.log(resultado15);

