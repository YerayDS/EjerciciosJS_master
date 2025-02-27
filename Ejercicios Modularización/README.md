Cada ejercicio está diseñado para desafiarte al máximo y fortalecer tus habilidades en programación funcional y estructuración de código. 📌

🔹 CommonJS (require/export) para Node.js
🔹 ES Modules (import/export) para aplicaciones modernas
🔹 Uso extensivo de métodos avanzados de arrays y destructuring

⚠️ ⚠️ CADA EJERCICIO DEBERÁ COMPONERSE DE UN INDEX.JS Y OTRO FICHERO DONDE DEFINIREMOS LA LÓGICA FUNCIONAL QUE SE APLICARÁ EN EL INDEX ⚠️ ⚠️

👀 👀 FIJAROS BIEN EN EL EJERCICIO DE EJEMPLO 👀 👀


EJERCICIO DE EJEMPLO (CON COMMON JS)

1️⃣ Sistema de Inventario Inteligente para una Tienda 🛍️

📌 Objetivo: Diseña un sistema que maneje el inventario de una tienda con operaciones avanzadas.

✅ Agregar productos al inventario.
✅ Usar map para formatear los nombres en mayúsculas.
✅ Filtrar productos con stock bajo (filter).
✅ Ordenar productos por precio (sort).
✅ Buscar productos por nombre (find).
✅ Convertir los productos a un string legible (join).

📁 inventario.js

const productos = [];

const agregarProducto = (nombre, precio, stock) => {
    productos.push({ nombre, precio, stock });
};

const productosEnMayusculas = () => productos.map(p => ({ ...p, nombre: p.nombre.toUpperCase() }));

const filtrarStockBajo = (limite) => productos.filter(p => p.stock < limite);

const ordenarPorPrecio = () => productos.sort((a, b) => a.precio - b.precio);

const buscarProducto = (nombre) => productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

const obtenerInventarioComoString = () => productos.map(p => `${p.nombre}: $${p.precio} (${p.stock} en stock)`).join(' | ');

module.exports = { agregarProducto, productosEnMayusculas, filtrarStockBajo, ordenarPorPrecio, buscarProducto, obtenerInventarioComoString, productos };


📁 index.js

const { agregarProducto, productosEnMayusculas, filtrarStockBajo, ordenarPorPrecio, buscarProducto, obtenerInventarioComoString } = require('./inventario');

agregarProducto('Laptop', 1500, 5);
agregarProducto('Teclado', 50, 12);
agregarProducto('Monitor', 300, 3);

console.log(productosEnMayusculas());
console.log(filtrarStockBajo(6));
ordenarPorPrecio();
console.log(obtenerInventarioComoString());
console.log(buscarProducto('Monitor'));


🚀🚀 EJERCICIOS A REALIZAR 🚀🚀

Sistema de Gestión de Pedidos de Restaurante 🍽️

📌 Objetivo: Maneja los pedidos de un restaurante con operaciones avanzadas.

✅ Agregar pedidos con ID, cliente y platillo.
✅ Eliminar el primer pedido en la cola (shift).
✅ Contar la cantidad total de pedidos (length).
✅ Encontrar pedidos de un cliente específico (find).
✅ Obtener solo los nombres de los platillos (map).
✅ Saber si hay pedidos de un platillo específico (includes).

3️⃣ Gestor de Proyectos con Estados y Prioridades 📊

📌 Objetivo: Implementa un sistema para administrar proyectos con estados y prioridades.

✅ Agregar proyectos con nombre, estado y prioridad.
✅ Filtrar proyectos en estado "En progreso" (filter).
✅ Ordenar proyectos por prioridad (sort).
✅ Eliminar el último proyecto agregado (pop).
✅ Convertir proyectos a una lista legible (toString).

4️⃣ Biblioteca de Libros Digitales 📖

📌 Objetivo: Administra una colección de libros con operaciones avanzadas.

✅ Agregar libros con título, autor y género.
✅ Buscar libros por autor (find).
✅ Obtener la lista de títulos (map).
✅ Saber si hay libros de un género específico (includes).
✅ Ordenar libros alfabéticamente (sort).
✅ Filtrar libros de un género (filter).

5️⃣ Registro de Alumnos y Promedios de Notas 🎓

📌 Objetivo: Diseña un sistema para gestionar alumnos y sus notas.

✅ Agregar alumnos con nombre y array de notas.
✅ Calcular el promedio de cada alumno (map).
✅ Filtrar alumnos aprobados (filter).
✅ Ordenar alumnos por promedio (sort).
✅ Buscar un alumno por nombre (find).

📌 Ejercicios con ES Modules (import/export)

6️⃣ Plataforma de Streaming de Películas 🎬

📌 Objetivo: Maneja una lista de películas disponibles para streaming.

✅ Agregar películas con título, duración y género.
✅ Buscar películas de un género (filter).
✅ Obtener los títulos en un solo string (join).
✅ Ordenar películas por duración (sort).

7️⃣ Control de Horas de Trabajo de Empleados ⏳

📌 Objetivo: Gestiona las horas trabajadas de empleados.

✅ Agregar empleados con su total de horas trabajadas.
✅ Calcular la suma total de horas.
✅ Filtrar empleados que trabajaron más de 40 horas (filter).
✅ Ordenar empleados por horas trabajadas (sort).

8️⃣ Aplicación de Notas y Recordatorios 📅

📌 Objetivo: Diseña un sistema de notas con recordatorios.

✅ Agregar notas con título y prioridad.
✅ Filtrar notas urgentes (filter).
✅ Ordenarlas por prioridad (sort).
✅ Buscar una nota específica (find).

9️⃣ Control de Stock en un Almacén 📦

📌 Objetivo: Gestiona productos en un almacén con manipulación avanzada.

✅ Agregar productos con stock.
✅ Eliminar un producto (pop).
✅ Filtrar productos con stock bajo (filter).
✅ Ordenar productos por stock (sort).

🔟 Plataforma de Cursos Online 📚

📌 Objetivo: Maneja una lista de cursos y estudiantes inscritos.

✅ Agregar cursos con nombre y número de estudiantes.
✅ Ordenar cursos por cantidad de inscritos (sort).
✅ Obtener una lista de nombres (map).

📌 5 Ejercicios Adicionales para Expertos 🔥

1️⃣1️⃣ Sistema de Registro de Vehículos 🚗

Agregar vehículos con marca, modelo y año.

Buscar vehículos de una marca (filter).

Ordenar vehículos por año (sort).

1️⃣2️⃣ Plataforma de Evaluación de Productos ⭐

Agregar productos con calificaciones.

Calcular el promedio de calificaciones (reduce).

1️⃣3️⃣ Control de Reservaciones en un Hotel 🏨

Agregar reservas con nombre y fecha.

Ordenar reservas por fecha (sort).

1️⃣4️⃣ Aplicación de Finanzas Personales 💰

Registrar ingresos y gastos.

Calcular saldo total .

1️⃣5️⃣ Sistema de Mensajería en Tiempo Real 📩

Agregar mensajes con remitente y texto.

Filtrar mensajes de un usuario (filter).