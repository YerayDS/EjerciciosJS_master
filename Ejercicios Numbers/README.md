📌 1. Conversión de Números a Cadenas

Crea una función que reciba un array de números y devuelva un nuevo array donde cada número se haya convertido a su representación en cadena de texto utilizando el método toString(). Además, la función debe garantizar que el resultado sea realmente de tipo string, validándolo antes de añadirlo al nuevo array. Finalmente, retorna un objeto que contenga el array original y el array convertido.

📌 2. Redondeo de Números con Precisión Fija

Escribe una función que tome un array de números decimales y retorne un nuevo array donde cada número haya sido redondeado a exactamente tres decimales utilizando el método toFixed(). Sin embargo, antes de retornar el resultado, la función debe verificar que todos los elementos del array original sean de tipo number y, en caso de encontrar un valor no numérico, debe lanzar un error con un mensaje adecuado.

📌 3. Conversión de Grandes Números a Notación Exponencial

Implementa una función que reciba un array de números de distintos órdenes de magnitud y devuelva un nuevo array donde cada número haya sido convertido a su notación exponencial con cuatro decimales utilizando toExponential(). Adicionalmente, la función debe detectar valores negativos y, en esos casos, incluir una advertencia en la salida indicando que el número convertido era originalmente negativo.

📌 4. Filtrado de Objetos Basado en Valores Absolutos

Dado un array de objetos donde cada objeto tiene una propiedad valor, escribe una función que elimine todos los objetos cuyo valor absoluto sea menor o igual a un umbral definido. La función debe utilizar Math.abs() para determinar los valores absolutos y retornar un nuevo array con los objetos que cumplen la condición.

📌 5. Redondeo Obligatorio Hacia Arriba

Crea una función que reciba un array de números decimales positivos y negativos, y devuelva un nuevo array donde cada número haya sido redondeado hacia arriba utilizando Math.ceil(). Antes de retornar el resultado, la función debe validar que no haya valores NaN dentro del array original y, en caso de encontrarlos, eliminarlos antes de aplicar el redondeo.

📌 6. Redondeo Obligatorio Hacia Abajo

Escribe una función que tome un array de números y retorne un nuevo array donde cada número haya sido redondeado hacia abajo utilizando Math.floor(). Sin embargo, si alguno de los números del array original ya es un número entero, la función debe devolverlo sin modificarlo.

📌 7. Redondeo Inteligente al Entero Más Cercano

Desarrolla una función que tome un array de números y los redondee al entero más cercano utilizando Math.round(). Sin embargo, si el número tiene exactamente .5 como decimal, en lugar de redondearlo con la regla estándar, la función debe redondearlo hacia el número par más cercano.

📌 8. Generación de Números Aleatorios en Rango Definido

Implementa una función que reciba tres parámetros: la cantidad de números aleatorios a generar (n), un valor mínimo (min) y un valor máximo (max). La función debe devolver un array con n números aleatorios enteros dentro del rango definido, asegurando que min y max sean respetados. Utiliza Math.random() y Math.floor() para lograrlo.

📌 9. Filtrado de Elementos No Numéricos en un Array

Dado un array con elementos de distintos tipos de datos, crea una función que devuelva un nuevo array que contenga solo aquellos valores que sean realmente numéricos. Para ello, usa la función isNaN() para detectar y excluir los valores que no sean números válidos.

📌 10. Conversión de Cadenas Numéricas a Enteros

Crea una función que reciba un array de cadenas que representan números enteros en distintas bases numéricas (binario, octal, decimal, hexadecimal). La función debe utilizar parseInt() para convertir cada valor en su número entero equivalente en base 10 y retornar un nuevo array con los valores convertidos.

📌 11. Conversión de Cadenas Numéricas a Decimales

Dado un array de cadenas de texto que contienen números decimales (algunos con caracteres adicionales al final), escribe una función que los convierta en valores de tipo float utilizando parseFloat(). La función debe ignorar cualquier carácter no numérico después del número y retornar un array con los valores convertidos.

📌 12. Conversión de Valores Mixtos a Tipo Number

Desarrolla una función que tome un array de valores de distintos tipos (números, strings, booleanos, null, undefined, objetos) y utilice la función Number() para convertirlos a tipo number. La función debe retornar un objeto con dos arrays: uno con los valores convertidos correctamente y otro con los valores que no pudieron convertirse.

📌 13. Extraer el Valor Primitivo de Objetos Number

Crea una función que tome un array de valores, donde algunos de ellos sean instancias del objeto Number creadas con new Number(). La función debe recorrer el array y reemplazar cualquier instancia de Number con su valor primitivo usando valueOf(). Devuelve un nuevo array con los valores corregidos.

📌 14. Generación de Números Aleatorios con Redondeo y Registro

Escribe una función que genere n números aleatorios entre 0 y 100. Cada número generado debe ser redondeado al entero más cercano utilizando Math.round(). Además, la función debe almacenar cada número junto con su versión antes de ser redondeado en un array de objetos con la siguiente estructura:

jsCopiarEditar{ original: <número sin redondear>, redondeado: <número redondeado> }


Retorna el array de objetos resultante.

📌 15. Transformación de Strings Numéricos en un Objeto Detallado

Dado un array de cadenas que representan números en formato decimal, crea una función que convierta cada número a un objeto con las siguientes propiedades:

original: El número en su forma original como cadena.

numero: El número convertido a tipo Number.

exponencial: El número representado en notación exponencial con dos decimales.

redondeado: El número redondeado al entero más cercano.

La función debe devolver un array con estos objetos.