Estos ejercicios te ayudarán a reforzar el uso de los operadores aritméticos, lógicos, de comparación, de asignación, de incremento/decremento, bitwise y otros. Prepárate para un gran reto.

🔢 Operadores Aritméticos y Asignación

1️⃣ Modificación de un Array Numérico con Operaciones Matemáticas

Dado un array de números enteros positivos, escribe una función que:

Multiplique los números en posiciones pares por 2 y los de posiciones impares por 3.

Reste 5 a todos los números mayores de 10.

Devuelva el nuevo array con los valores modificados.

2️⃣ Cálculo de Diferencias con Asignación Compuesta

Dado un objeto con dos propiedades a y b (ambas números), escribe una función que:

Reste b de a utilizando el operador -=.

Multiplique a por 3 y divida b entre 2.

Devuelva un nuevo objeto con las propiedades actualizadas.

3️⃣ Operaciones en un Inventario de Productos

Dado un array de objetos con nombre y precio, crea una función que:

Aumente el precio en un 15% si el precio original es menor a 20.

Disminuya el precio en un 10% si el precio es mayor o igual a 50.

Devuelva el array modificado.

🔁 Operadores de Comparación y Lógicos

4️⃣ Filtrado de Usuarios con Condiciones Múltiples

Dado un array de objetos representando usuarios (nombre, edad, activo), escribe una función que:

Devuelva solo los usuarios mayores de 18 que además estén activos.

Usa operadores de comparación (>) y lógicos (&&).

5️⃣ Validación de Contraseñas con Múltiples Condiciones

Crea una función que reciba una contraseña y valide que:

Su longitud sea de al menos 8 caracteres.

Contenga al menos una mayúscula y un número.

No contenga espacios en blanco.

Devuelva true si cumple todas las condiciones, false en caso contrario.

6️⃣ Clasificación de Números con Condicionales Encadenados

Dado un número, escribe una función que devuelva:

"Positivo" si es mayor que 0.

"Negativo" si es menor que 0.

"Cero" si es igual a 0.
Usa operadores de comparación (>, <, ===) y operadores ternarios (? :).

🔄 Operadores de Incremento, Decremento y Bitwise

7️⃣ Manipulación de un Contador con ++ y --

Dado un objeto contador con la propiedad valor, crea una función que:

Incremente valor en 2 si es par.

Decremente valor en 1 si es impar.

Devuelva el objeto actualizado.

8️⃣ Verificación de Paridad con Operador Bitwise

Escribe una función que reciba un número y determine si es par o impar usando &.
💡 Pista: n & 1 devuelve 0 si n es par, y 1 si es impar.

9️⃣ Manipulación de Bits para Doblar o Reducir Valores

Dado un número, escribe una función que:

Lo duplique utilizando el operador <<.

Lo divida entre 2 usando el operador >>.

Devuelva un objeto con los valores resultantes.

📚 Operadores en Arrays y Objetos

🔟 Creación de un Registro de Asistencia

Dado un array de nombres de estudiantes y un objeto asistencia vacío, escribe una función que:

Agregue cada estudiante como una propiedad del objeto con un valor booleano (true si asistió, false si no).

Devuelva el objeto resultante.

1️⃣1️⃣ Validación de Disponibilidad de Productos

Dado un array de objetos representando productos (nombre, stock), escribe una función que:

Devuelva true si todos los productos tienen stock disponible (stock > 0).

Devuelva false en caso contrario.

1️⃣2️⃣ Cálculo del Producto Total en una Lista de Compras

Dado un array de objetos (nombre, precio, cantidad), escribe una función que:

Multiplique el precio por la cantidad de cada producto.

Devuelva la suma total de todos los productos.

1️⃣3️⃣ Eliminación de Elementos según una Condición

Dado un array de objetos (nombre, edad), crea una función que:

Elimine del array a las personas menores de 18 años.

Devuelva el nuevo array filtrado.

1️⃣4️⃣ Transformación de Objetos con Valores Modificados

Dado un array de objetos (usuario, nivel), escribe una función que:

Convierta los niveles "básico" a "intermedio", y los "intermedio" a "avanzado".

Devuelva el array actualizado.

🛠️ Operadores Ternarios y Combinación de Métodos de Arrays

1️⃣5️⃣ Asignación de Categorías según la Edad

Dado un array de objetos (nombre, edad), escribe una función que:

Agregue una propiedad categoria:

"Infantil" si la edad es menor de 12.

"Adolescente" si la edad está entre 12 y 17.

"Adulto" si es 18 o más.

Devuelva el array modificado.

1️⃣6️⃣ Modificación de un Array según un Criterio

Dado un array de números, escribe una función que:

Sustituya todos los números negativos por 0.

Devuelva el array modificado.

1️⃣7️⃣ Transformación de Strings en un Array de Objetos

Dado un array de nombres en formato string, escribe una función que:

Devuelva un nuevo array de objetos con la propiedad nombre en mayúsculas y longitud con el número de caracteres de cada nombre.

1️⃣8️⃣ Creación de una Lista de Invitados con Doble Confirmación

Dado un array de nombres y otro de booleanos representando confirmaciones (true/false), escribe una función que:

Devuelva solo los nombres de los invitados que confirmaron su asistencia.

1️⃣9️⃣ Cálculo de la Letra del DNI

Dado un array de números de DNI, escribe una función que:

Asigne a cada DNI su letra correspondiente según una tabla de letras predefinida.

Devuelva un array de objetos { dni, letra }.

2️⃣0️⃣ Histograma de Ocurrencias en un Array de Números

Dado un array de números, crea un objeto donde:

Las claves sean los números únicos del array.

Los valores sean la cantidad de veces que aparecen en el array.