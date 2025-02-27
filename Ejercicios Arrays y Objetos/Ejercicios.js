//Ejercicio 1: Suma Condicional de Números

    let array1 = [3,32,12,14,23,24];
    let guardar = [];
    let indice = 0;

    function sumaCondicional(arr){
        let suma = 0;
        arr.forEach(element => {
            if(element > 10 && element % 3 === 0){
                suma += element;
                guardar[indice] = element;
                indice++;
            }
        });
        return suma;
    }

    let resultado1 = sumaCondicional(array1);


    // Mostrar resultado en el formato deseado
    console.log(`${resultado1} (${guardar.join(" + ")})`);

//Ejercicio 2: Invertir Claves y Valores de un Objeto

    let persona = {
        nombre: 'Luis',
        edad: 22,
        profesion: 'Desarrollador'
    };

    const invertirObjeto = obj => {
        let objetoInvertido = {};

        for (let key in obj) {
            objetoInvertido[obj[key]] = key;  
        }

        return objetoInvertido;
    }

    console.log(invertirObjeto(persona));



//Ejercicio 3: Filtrar Palabras Largas

    let array2 = ['hola', 'casas', 'almohada', 'rata', 'aviones'];
    let contador = 0;

    const filtrarPalabras = array => {
        let resultado2 = [];

        array.forEach(element => {
            if(element.length > 5){
                resultado2[contador]=element;
                contador++;
            }
        });
        return resultado2;
    }

    console.log(filtrarPalabras(array2));

//Ejercicio 4: Contar Tipos de Datos en un Array

    let array3 = ['Hola', 23, true, 'Casa', 29, undefined];

    function contarTipos(arr){
        let contador = {};
        arr.forEach(element => {
            let tipo = typeof element;
            if(contador[tipo] == true){
                contador[tipo]+= 1;
            }
            else{
                contador[tipo] = 1;
            }
        });
        return contador;
    }

    console.log(contarTipos(array3));

//Ejercicio 5: Calcular Estadísticas de un Array Numérico

    let array4 = [4,8,12,15,18,20];

    const calcularEstadisticas = arr => {
        let sumaTotal = 0;
        let numMax = arr[0];
        let numMin = arr[0];

        arr.forEach(element => {
            sumaTotal += element;

            if(element > numMax){
                numMax = element;
            } 

            if(element < numMin){
                numMin = element;
            }
        });

            const promedio = sumaTotal / arr.length;

        return {
            sumaTotal,
            promedio,
            numMax,
            numMin
        }
    }

    console.log(calcularEstadisticas(array4));

//Ejercicio 6: Mostrar Información de Estudiantes

    const estudiantes = [
        { nombre: "Laura", edad: 22, curso: "Matemáticas" },
        { nombre: "Carlos", edad: 25, curso: "Física" },
        { nombre: "Marta", edad: 20, curso: "Programación" }
    ];

    const mostrarEstudiantes = arr => {
        arr.forEach(element => {
        console.log(`${element.nombre} tiene ${element.edad} años y está inscrito en el curso de ${element.curso}`) 
        });
    }

    mostrarEstudiantes(estudiantes);

//Ejercicio 7: Fusionar Objetos con Claves Únicas

    const fusionarObjetos = (obj1, obj2) => {
        for (let key in obj2) {
            obj1[key] = obj2[key];  
        }

        return obj1;
    }

    let objeto1 = { nombre: "Juan", edad: 30, curso: "Matemáticas" };
    let objeto2 = { edad: 35, profesion: "Desarrollador" };

    console.log(fusionarObjetos(objeto1, objeto2));

//Ejercicio 8: Encontrar la Palabra Más Larga en un Array

    let array5 = ['hola', 'caracola', 'albaricoque', 'casa'];
    let resultado3 = '';

    const palabraMasLarga = arr => {
        arr.forEach(element => {
            if(element.length > resultado3.length){
                resultado3 = element;
            }
        });
        return resultado3;
    }

    console.log(palabraMasLarga(array5));

//Ejercicio 9: Validar Propiedades en un Objeto

    let array6= ['nombre', 'edad'];
    let objeto = {
        nombre : 'Pepe',
        edad : 12,
        ciudad: 'Sevilla'
    };

    const validarPropiedades = (obj, arr) => {
        for (let i in arr) {
            if (!(arr[i] in obj)) {
                return false; 
            }
        }
        return true;
    }

    console.log(validarPropiedades(objeto, array6));

//Ejercicio 10: Contar Caracteres en un Texto

    let frase = 'Hola que tal estas'

    const contarCaracteres = texto => {
        let contador = {}; 

        for (let i in texto) {
            let caracter = texto[i]; 

            if (contador[caracter]) {
                contador[caracter] += 1;
            } else {
                contador[caracter] = 1; 
            }
        }

        return contador;
    }

    console.log(contarCaracteres(frase))