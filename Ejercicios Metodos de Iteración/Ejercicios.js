
//1. Duplicar y Filtrar Números Pares

    const numbers = [3, 7, 12, 5, 9, 20, 15];

    const dobles = numbers.map(num => num * 2);

    const filtrados = dobles.filter(num => num > 20 && num % 2 === 0);

    console.log(filtrados);

//2. Ordenar y Eliminar Elementos

    const scores = [56, 89, 72, 45, 99, 38, 65];

    scores.sort();

    scores.pop();

    scores.shift();

    scores.reverse();

    console.log(scores)

//3. Añadir y Eliminar Elementos de un Array

    const fruits = ['apple', 'banana', 'cherry'];

    fruits.push('grape');
    fruits.unshift('mango');

    console.log(fruits);

    fruits.shift();
    fruits.pop();

    console.log(fruits);

//4. Invertir y Unir Nombres

    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    names.reverse();

    console.log(names);

    const result1 = names.join('-');

    console.log(result1);

//5. Encontrar la Primera Palabra Larga

    const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];

    const result2 = words.find(word => word.length>5);

    console.log(result2);

//6. Comprobar Inclusión de Elementos

    const colors = ['red', 'blue', 'green', 'yellow'];

    const purple = colors.includes('purple');

    console.log(purple);

    const green = colors.includes('green');

    console.log(green);

//7. Filtrar Números Primos

    const numbers1 = [2, 4, 5, 6, 7, 8, 9, 11, 13];

    const esPrimo = (num) => {
        if(num < 2) return false;
        for(let i = 2; i < num; i++){
            if(num % i === 0) return false;
        }
        return true;
    }

    const numerosPrimeros = numbers1.filter(esPrimo);

    console.log(numerosPrimeros);

//8. Convertir Números a Cadenas

    const nums = [10, 20, 30, 40, 50];

    const res1 = nums.map(String);
    const res2 = nums.toString(String);

    console.log(res1);
    console.log(res2);

//9. Contar Frases Largas

    const sentences = ['Hello world', 'JavaScript is fun', 'I love coding', 'Keep it simple'];

    const frasesLargas = sentences.filter(frase => frase.length > 12);

    const contador = frasesLargas.length;

    console.log(`${contador} (${frasesLargas.join(', ')})`);

//10. Invertir y Transformar Números

    const nums1 = [1, 2, 3, 4, 5];

    nums1.reverse();

    console.log(nums1);

    const result3 = nums1.map((num, index) => num*index);

    console.log(result3);

//11. Ordenar Nombres por Longitud

    const names1 = ['Tom', 'Alexander', 'Bob', 'Christina'];

    const result = names1.sort((a, b) => a.length - b.length);

    console.log(result);

//12. Manipular Lista de Tareas

    const tasks = ['Wash dishes', 'Do laundry', 'Clean room'];

    tasks.push('Buy groceries');
    tasks.unshift('Feed the cat');

    console.log(tasks);

    tasks.pop();
    tasks.shift();

    console.log(tasks);

//13. Filtrar y Unir Palabras

    const words1 = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];

    const palabrasA = words1.filter(palabra => palabra[0] === 'a' || palabra[0] === 'A');

    console.log(palabrasA.join(','));

//14. Encontrar el Segundo Número Más Grande

    const numbers3 = [45, 67, 12, 89, 34, 22];

    numbers3.sort().reverse();

    console.log(numbers3);

    numbers3.shift();

    console.log(numbers3);

    console.log(numbers3[0]);

//15. Verificar Inclusión de Subcadenas en Frases

    const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];

    const contieneJava = phrases.map(phrase => phrase.includes('Java'));

    console.log(contieneJava);