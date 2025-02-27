// Variables globales
let numero1;
let numero2;
let operacion;

// Obtener referencias a los elementos
const inputs = document.querySelectorAll('.input-field');
const buttons = document.querySelectorAll('.btn');

// Añadir un único event listener para todos los botones
document.querySelector('.buttons-container').addEventListener('click', (e) => {
    // Verificar si lo que se clickeó es un botón
    if (e.target.classList.contains('btn')) {
        // Guardar los valores en las variables globales
        numero1 = parseFloat(inputs[0].value);
        numero2 = parseFloat(inputs[1].value);
        operacion = e.target.id;
        
        // Para verificar que funciona
        console.log('Número 1:', numero1);
        console.log('Número 2:', numero2);
        console.log('Operación:', operacion);

         // Realizar la operación correspondiente
         let resultado;
         switch (operacion) {
             case 'sumar':
                 resultado = numero1 + numero2;
                 console.log(`El resultado de ${numero1} + ${numero2} = ${resultado}`);
                 break;
             case 'restar':
                 resultado = numero1 - numero2;
                 console.log(`El resultado de ${numero1} - ${numero2} = ${resultado}`);
                 break;
             case 'multiplicar':
                 resultado = numero1 * numero2;
                 console.log(`El resultado de ${numero1} * ${numero2} = ${resultado}`);
                 break;
             case 'dividir':
                 if (numero2 === 0) {
                     console.log('Error: No se puede dividir por cero.');
                 } else {
                     resultado = numero1 / numero2;
                     console.log(`El resultado de ${numero1} / ${numero2} = ${resultado}`);
                 }
                 break;
             default:
                 console.log('Operación no válida.');
         }
    }
});
