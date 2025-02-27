//EJERCICIO 1
function obtenerIniciales(nombres) {
    const iniciales = [];
  
    for (let i = 0; i < nombres.length; i++) {
      let nombre = nombres[i];
      let partes = nombre.split(' ');
      let inicialesNombre = '';
  
      for (let j = 0; j < partes.length; j++) {
        inicialesNombre += partes[j][0].toUpperCase(); 
      }
  
      iniciales.push(inicialesNombre); 
    }
  
    return iniciales;
  }
  
  const nombres = ['Juan Pérez', 'Ana María López', 'Carlos Gómez'];
  const iniciales = obtenerIniciales(nombres);
  console.log(iniciales); 
  

//EJERCICIO 2

const correos = ['juan@empresa.com', 'ana@gmail.com', 'maria@empresa.com', 'carlos@yahoo.com'];
const dominio = '@empresa.com';

function filtrarPorDominio(correos, dominio) {
    return correos.filter(correo => correo.endsWith(dominio));
  }
  
  const correosFiltrados = filtrarPorDominio(correos, dominio);
  console.log(correosFiltrados);

//EJERCICIO 3

function buscarPalabra(texto, palabra) {
    return texto.includes(palabra); 
  }
  
  const texto = "Este es un ejemplo de texto para buscar una palabra.";
  const palabra = "ejemplo";
  const resultado = buscarPalabra(texto, palabra);
  console.log(resultado);   

//EJERCICIO 4

function extraerYFormatearUsuarios(correos) {
    return correos.map(correo => {
      const nombreUsuario = correo.split('@')[0];
      const nombreFormateado = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase();
      return nombreFormateado;
    });
  }
  
  const correos1 = ['juan.perez@empresa.com', 'ana.maria@correo.com', 'carlos.gomez@outlook.com'];
  const usuarios = extraerYFormatearUsuarios(correos1);
  console.log(usuarios); 

//EJERCICIO 5

function censurarPalabras(texto, palabrasProhibidas) {
    let palabras = texto.split(' ');
  
    // Recorremos cada palabra en el texto
    palabras = palabras.map(palabra => {
      if (palabrasProhibidas.includes(palabra.toLowerCase())) {
        return '*'.repeat(palabra.length); 
      }
      return palabra;
    });
  
    return palabras.join(' ');
  }
  
  const texto1 = "Este es un texto con algunas palabras prohibidas como droga y alcohol.";
  const palabrasProhibidas = ["droga", "alcohol"];
  const textoCensurado = censurarPalabras(texto1, palabrasProhibidas);
  console.log(textoCensurado); 

//EJERCICIO 6

function capitalizarNombres(nombres) {
    return nombres.map(nombre => {
      return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    });
  }
  
  const nombres2 = ['juan', 'MARÍA', 'pEdrO', 'ana'];
  const nombresCapitalizados = capitalizarNombres(nombres2);
  console.log(nombresCapitalizados);
  

//EJERCICIO 7

function eliminarEspacios(frases) {
    return frases.map(frase => frase.trim()); 
  }
  
  const frases = ['   Hola mundo   ', '  JavaScript es genial  ', '  Aprende a programar  '];
  const frasesSinEspacios = eliminarEspacios(frases);
  console.log(frasesSinEspacios); 

//EJERCICIO 8

function terminaConPalabra(frase, palabra) {
    return frase.trim().endsWith(palabra); 
  }
  
  const frase = "Hoy es un buen día";
  const palabra1 = "día";
  const resultado1 = terminaConPalabra(frase, palabra1);
  console.log(resultado1); 
  

//EJERCICIO 9

function repetirPalabra(palabra, veces) {
    return Array(veces).fill(palabra).join(' '); 
  }
  
  const palabra2 = "hola";
  const veces = 3;
  const resultado2 = repetirPalabra(palabra2, veces);
  console.log(resultado2);
  

//EJERCICIO 10

function ultimaAparicion(palabra, letra) {
    return palabra.lastIndexOf(letra); 
  }
  
  const palabra3 = "programacion";
  const letra = "o";
  const resultado3 = ultimaAparicion(palabra3, letra);
  console.log(resultado3); 

//EJERCICIO 11

function extraerParte(texto, inicio, fin) {
    return texto.slice(inicio, fin); // Extrae una parte del texto desde el índice 'inicio' hasta el índice 'fin' (sin incluir 'fin')
  }
  
  const texto3 = "Hola, ¿cómo estás?";
  const inicio = 7;
  const fin = 13;
  const resultado4 = extraerParte(texto3, inicio, fin);
  console.log(resultado4);

//EJERCICIO 12

function dividirNombresYApellidos(nombresCompletos) {
    return nombresCompletos.map(nombreCompleto => {
      const [nombre, apellido] = nombreCompleto.split(' ');
      return { nombre, apellido };
    });
  }
  
  const nombresCompletos = ["Juan Pérez", "Ana García", "Carlos López"];
  const resultado5 = dividirNombresYApellidos(nombresCompletos);
  console.log(resultado5);

//EJERCICIO 13

function alternarMayusculasYMinusculas(frase) {
    return frase.split('').map((letra, indice) => {
      return indice % 2 === 0 ? letra.toUpperCase() : letra.toLowerCase();
    }).join('');
  }
  
  const frase3 = "esto es una prueba";
  const resultado6 = alternarMayusculasYMinusculas(frase3);
  console.log(resultado6); 

//EJERCICIO 14

function contienePalabraProhibida(texto, palabrasProhibidas) {
    return palabrasProhibidas.some(palabra => texto.includes(palabra)); 
  }
  
  const texto14 = "Este es un texto de prueba que contiene una palabra prohibida";
  const palabrasProhibidas14 = ["prohibida", "secreto", "confidencial"];
  const resultado14 = contienePalabraProhibida(texto14, palabrasProhibidas14);
  console.log(resultado14);
  

//EJERCICIO 15

function contarLetra(texto, letra) {
    return texto.split('').filter(caracter => caracter === letra).length;
  }
  
  const texto15 = "La programación es divertida";
  const letra15 = "a";
  const resultado15 = contarLetra(texto15, letra15);
  console.log(resultado15);
  

//EJERCICIO 16

function eliminarEspaciosExtra(texto) {
    const palabras = texto.trim().split(' ').filter(palabra => palabra !== '');
    return palabras.join(' '); 
  }
  
  const texto16 = "   Este  es   un  texto   con   espacios   extra   ";
  const resultado16 = eliminarEspaciosExtra(texto16);
  console.log(resultado16); 
  

//EJERCICIO 17

function generarNombresDeUsuario(nombresCompletos) {
    return nombresCompletos.map(nombreCompleto => {
      const partes = nombreCompleto.split(' '); 
      const primerNombre = partes[0].toLowerCase(); 
      const apellido = partes[1].toLowerCase(); 
      return `${primerNombre.charAt(0)}${apellido}`; 
    });
  }
  
  const nombresCompletos17 = ["Juan Pérez", "Ana García", "Carlos López"];
  const usuarios17 = generarNombresDeUsuario(nombresCompletos17);
  console.log(usuarios17); 
  

//EJERCICIO 18

function reemplazarPalabra(texto, palabraObjetivo, nuevaPalabra) {
    return texto.split(palabraObjetivo).join(nuevaPalabra); 
  }
  
  const texto18 = "La casa es grande. La casa es azul.";
  const palabraObjetivo = "casa";
  const nuevaPalabra = "hogar";
  const resultado18 = reemplazarPalabra(texto18, palabraObjetivo, nuevaPalabra);
  console.log(resultado18); 
  

//EJERCICIO 19

function comienzaConSubcadena(cadena, subcadena) {
    return cadena.startsWith(subcadena); 
  }
  
  const cadena = "Hola, ¿cómo estás?";
  const subcadena = "Hola";
  const resultado19 = comienzaConSubcadena(cadena, subcadena);
  console.log(resultado19); 
  

//EJERCICIO 20

function obtenerValorPrimitivo(cadena) {
    return cadena.valueOf(); 
  }
  
  const textoObjeto = new String("Hola Mundo");
  const resultado20 = obtenerValorPrimitivo(textoObjeto);
  console.log(resultado20); 
    