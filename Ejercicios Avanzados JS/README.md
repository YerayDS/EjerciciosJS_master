📋 Introducción

Estos 15 ejercicios están diseñados para reforzar tus habilidades en JavaScript, trabajando con:

Arrays 📦

Funciones y Funciones Flecha 🚀

Operador Spread (...) 🔄

Objetos y Arrays de Objetos 🗂️

Métodos de Iteración: map, filter, pop, push, forEach, shift, unshift, sort, reverse, find, includes, join, toString, length 🔍

🚀 Ejercicios

1️⃣ Gestión de Inventario

Crea una función que gestione un inventario de productos. Debes poder:

Añadir nuevos productos (nombre, cantidad, precio).

Eliminar productos.

Filtrar productos por precio mayor a un valor dado.

Ordenar los productos por cantidad de mayor a menor.

Ejemplo de Datos:

const inventario = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 50, precio: 20 },
  { nombre: 'Ratón', cantidad: 30, precio: 10 }
];


2️⃣ Análisis de Notas de Estudiantes

Tienes un array de objetos con el nombre de los estudiantes y sus calificaciones.

Filtra a los estudiantes que aprobaron (nota ≥ 6).

Calcula la nota media de toda la clase.

Ordena los estudiantes de mayor a menor calificación.

Ejemplo de Datos:

const estudiantes = [
  { nombre: 'Juan', nota: 8 },
  { nombre: 'Ana', nota: 5 },
  { nombre: 'Carlos', nota: 7 }
];


3️⃣ Historial de Transacciones Bancarias

Dado un array de transacciones (positivo = ingreso, negativo = gasto):

Suma el saldo total.

Filtra las transacciones mayores a 100.

Invierte el orden de las transacciones sin usar reverse.

Ejemplo de Datos:

const transacciones = [200, -50, -100, 350, -20];

4️⃣ Gestión de Tareas (To-Do List)

Crea un sistema de tareas donde puedas:

Añadir nuevas tareas.

Marcar tareas como completadas.

Filtrar tareas completadas e incompletas.

Contar cuántas tareas están pendientes.

Ejemplo de Datos:

const tareas = [
  { tarea: 'Comprar leche', completada: false },
  { tarea: 'Estudiar JavaScript', completada: true }
];

5️⃣ Operaciones con Nombres de Usuarios

Dado un array de nombres:

Convierte todos los nombres a mayúsculas usando map.

Filtra los nombres que comienzan con la letra "A".

Ordena alfabéticamente.

Ejemplo de Datos:

const nombres = ['Ana', 'Juan', 'Pedro', 'Andrés'];

6️⃣ Análisis de Datos Climáticos

Dado un array de temperaturas:

Encuentra la temperatura más alta y la más baja.

Filtra las temperaturas por encima de la media.

Convierte todas las temperaturas de Celsius a Fahrenheit.

Ejemplo de Datos:

const temperaturas = [22, 28, 18, 15, 32, 25];

7️⃣ Combinar Listas de Contactos (Operador Spread)

Combina dos listas de contactos sin duplicados:

Usa Set y el operador spread para eliminar duplicados.

Ordena alfabéticamente la lista combinada.

Ejemplo de Datos:

const contactos1 = ['Juan', 'Carlos', 'Ana'];
const contactos2 = ['Ana', 'Pedro', 'Luis'];

8️⃣ Gestión de Carrito de Compras

Simula un carrito de compras:

Añade productos usando push.

Elimina el último producto con pop.

Calcula el precio total del carrito.

Ordena los productos por precio.

Ejemplo de Datos:

const carrito = [
  { producto: 'Laptop', precio: 800 },
  { producto: 'Ratón', precio: 20 }
];

9️⃣ Filtrado de Libros por Autor y Año

Dado un array de objetos (libros con autor y año):

Filtra los libros publicados después de 2010.

Encuentra el primer libro de un autor específico usando find.

Ordena los libros por año de publicación.

Ejemplo de Datos:

javascriptCopiarEditarconst libros = [
  { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2019 },
  { titulo: 'JavaScript Básico', autor: 'Carlos López', año: 2008 }
];

🔟 Gestión de Inscripciones a un Evento

Crea un sistema para gestionar inscripciones:

Añade nuevos participantes.

Elimina un participante por nombre.

Filtra participantes con nombres que contengan una letra específica.

Convierte la lista de participantes a una sola cadena usando join.

Ejemplo de Datos:

const participantes = ['Juan', 'Ana', 'Pedro', 'Luis'];

1️⃣1️⃣ Estadísticas de Redes Sociales

Dado un array de publicaciones (likes, comentarios):

Calcula el total de likes usando reduce.

Filtra publicaciones con más de 100 likes.

Ordena publicaciones de mayor a menor popularidad.

Ejemplo de Datos:

const publicaciones = [
  { likes: 50, comentarios: 10 },
  { likes: 200, comentarios: 30 },
  { likes: 120, comentarios: 20 }
];

1️⃣2️⃣ Sistema de Gestión de Alumnos (Operador Spread + Objetos)

Crea una función para:

Añadir un nuevo alumno a un array de objetos.

Actualizar información de un alumno específico (sin mutar el original) usando el operador spread.

Contar cuántos alumnos tienen más de 18 años.

Ejemplo de Datos:

const alumnos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 17 }
];

1️⃣3️⃣ Análisis de Palabras en un Texto

Dado un párrafo de texto:

Convierte el texto en un array de palabras.

Filtra las palabras que tienen más de 5 letras.

Ordena las palabras de forma descendente por longitud.

Ejemplo de Datos:

const texto = 'El sol brilla sobre el cielo azul y brillante';

1️⃣4️⃣ Simulación de una Cola de Atención

Implementa una cola de clientes:

Añade clientes al final de la cola usando push.

Atiende clientes usando shift.

Muestra el siguiente cliente en ser atendido sin eliminarlo.

Cuenta cuántos clientes hay en la cola.

Ejemplo de Datos:

const cola = ['Juan', 'Ana', 'Carlos'];

1️⃣5️⃣ Gestión de Inventario de Productos (Avanzado con Spread)

Tienes un array de objetos representando productos:

Añade nuevos productos sin modificar el array original usando spread.

Actualiza el precio de un producto específico.

Elimina productos con stock igual a 0.

Combina dos inventarios diferentes sin duplicados.

Ejemplo de Datos:

const inventario1 = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 20, precio: 30 }
];

const inventario2 = [
  { nombre: 'Ratón', cantidad: 15, precio: 10 },
  { nombre: 'Monitor', cantidad: 5, precio: 200 }
];

🚀 ¡A Programar!

Estos ejercicios están diseñados para que practiques de forma intensiva. Intenta resolverlos por tu cuenta antes de buscar soluciones. ¡El mejor aprendizaje es el que logras con esfuerzo propio! 💡