const moment = require('moment-timezone');


//EJERCICIO 1
const fechaInicio = moment('2024-12-01'); 
const fechaFin = moment('2024-12-25');   

const diferenciaEnDias = fechaFin.diff(fechaInicio, 'days');

console.log(`La diferencia entre ${fechaInicio.format('YYYY-MM-DD')} y ${fechaFin.format('YYYY-MM-DD')} es de ${diferenciaEnDias} dias.`);

//EJERCICIO 2
const fechaOriginal = moment('2023-08-15');

const nuevaFecha = fechaOriginal.add(2, 'weeks');

const fechaFormateada = nuevaFecha.format('dddd, MMMM Do YYYY');

console.log(fechaFormateada);

//EJERCICIO 3
const fecha1 = moment('2025-02-10');
const fecha2 = moment('2025-02-12');

const esAnterior = fecha1.isBefore(fecha2);
const esPosterior = fecha1.isAfter(fecha2);
const sonIguales = fecha1.isSame(fecha2);

console.log(`La fecha ${fecha1.format('YYYY-MM-DD')} es anterior a ${fecha2.format('YYYY-MM-DD')}? ${esAnterior}`);
console.log(`La fecha ${fecha1.format('YYYY-MM-DD')} es posterior a ${fecha2.format('YYYY-MM-DD')}? ${esPosterior}`);
console.log(`La fecha ${fecha1.format('YYYY-MM-DD')} es igual a ${fecha2.format('YYYY-MM-DD')}? ${sonIguales}`);

//EJERCICIO 4
const fechaTokio = moment.tz('2025-05-01 12:00', 'Asia/Tokyo');

console.log("Fecha en Tokio:", fechaTokio.format("YYYY-MM-DD HH:mm:ss"));

const fechaMadrid = fechaTokio.clone().tz('Europe/Madrid');

console.log("Fecha en Madrid:", fechaMadrid.format("YYYY-MM-DD HH:mm:ss"));

const diferenciaHoras = fechaTokio.utcOffset() - fechaMadrid.utcOffset();
console.log("Diferencia de horas entre Tokio y Madrid:", diferenciaHoras / 60);


//EJERCICIO 5
const fechaInicio5 = moment('2025-01-01');
const fechaFin5 = moment('2025-10-01');

const diferenciaMeses = fechaFin5.diff(fechaInicio5, 'months');

console.log("Diferencia en meses:", diferenciaMeses);

//EJERCICIO 6
const fecha = moment('2025-12-25');

const formatoPersonalizado = `El día ${fecha.format('DD')} de ${fecha.format('MMMM')} de ${fecha.format('YYYY')} es un ${fecha.format('dddd')}`;

console.log(formatoPersonalizado);

//EJERCICIO 7
const fechaInicial = moment('2025-06-01');

const nuevaFecha7 = fechaInicial.clone().add(7, 'days').add(3, 'hours');

const fechaFutura = moment('2025-06-10');

const esAnterior7 = nuevaFecha7.isBefore(fechaFutura);

console.log(`Fecha inicial: ${fechaInicial.format('YYYY-MM-DD HH:mm:ss')}`);
console.log(`Nueva fecha: ${nuevaFecha7.format('YYYY-MM-DD HH:mm:ss')}`);
console.log(`Fecha futura: ${fechaFutura.format('YYYY-MM-DD HH:mm:ss')}`);
console.log(`¿La nueva fecha es anterior a la fecha futura? ${esAnterior7}`);

//EJERCICIO 8
const fechaInicial8 = moment('2023-03-01');

const nuevaFecha8 = fechaInicial8.clone().subtract(4, 'months').subtract(10, 'days');

nuevaFecha8.add(1, 'year').add(2, 'weeks');

const fechaFinal = nuevaFecha8.format('DD-MM-YYYY');

console.log(`La fecha final es: ${fechaFinal}`);

//EJERCICIO 9
const fechaInvalida = moment('2025-02-30');

if (fechaInvalida.isValid()) {
    console.log(`La fecha ${fechaInvalida.format('YYYY-MM-DD')} es valida.`);
} else {
    console.log(`La fecha ${fechaInvalida.format('YYYY-MM-DD')} no es valida.`);
}

//EJERCICIO 10
const fechaInicio10 = moment('2020-01-01');
const fechaFin10 = moment('2025-03-15');

const años = fechaFin10.diff(fechaInicio10, 'years');
fechaInicio10.add(años, 'years'); 
const meses = fechaFin10.diff(fechaInicio10, 'months');
fechaInicio10.add(meses, 'months');
const días = fechaFin10.diff(fechaInicio10, 'days');

console.log(`La diferencia es de ${años} años, ${meses} meses y ${días} días.`);