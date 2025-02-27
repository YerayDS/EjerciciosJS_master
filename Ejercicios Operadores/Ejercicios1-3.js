//EJERCICIO 1

function modificarArray(numeros) {
    return numeros.map((num, index) => {
        let nuevoValor = index % 2 === 0 ? num * 2 : num * 3;
        
        if (nuevoValor > 10) {
            nuevoValor -= 5;
        }
        
        return nuevoValor;
    });
}

const numeros1 = [1, 4, 7, 10, 3, 6];
console.log(modificarArray(numeros1));

//EJERCICIO 2

function actualizarObjeto(obj) {
    let { a, b } = obj;
    a -= b;
    a *= 3;
    b /= 2;
    return { a, b };
}

const objeto = { a: 10, b: 4 };
console.log(actualizarObjeto(objeto));

//EJERCICIO 3

function modificarPrecios(productos) {
    return productos.map(producto => {
        let { nombre, precio } = producto;
        
        if (precio < 20) {
            precio *= 1.15;
        } else if (precio >= 50) {
            precio *= 0.9;
        }
        
        return { nombre, precio };
    });
}

const productos = [
    { nombre: "Producto A", precio: 15 },
    { nombre: "Producto B", precio: 50 },
    { nombre: "Producto C", precio: 30 }
];

console.log(modificarPrecios(productos));