//EJERCICIO 1
const calcularDiferenciaFechas = (fecha1, fecha2) => {
    let inicio = new Date(fecha1);
    let fin = new Date(fecha2);

    if (inicio > fin) {
        [inicio, fin] = [fin, inicio];
    }

    let años = fin.getFullYear() - inicio.getFullYear();
    let meses = fin.getMonth() - inicio.getMonth();
    let días = fin.getDate() - inicio.getDate();

    // Ajustar si los días son negativos
    if (días < 0) {
        let ultimoDiaMesAnterior = new Date(fin.getFullYear(), fin.getMonth(), 0).getDate();
        días += ultimoDiaMesAnterior;
        meses--; 
    }

    // Ajustar si los meses son negativos
    if (meses < 0) {
        meses += 12;
        años--; 
    }

    return { años, meses, días };
};

const fecha1 = "2020-02-28";
const fecha2 = "2024-02-29"; 

const resultado = calcularDiferenciaFechas(fecha1, fecha2);
console.log(`Diferencia: ${resultado.años} años, ${resultado.meses} meses y ${resultado.días} días.`);


//EJERCICIO 2
const contarViernes13 = (año) => {
    let contador = 0;

    for (let mes = 0; mes < 12; mes++) {
        let fecha = new Date(año, mes, 13); 
        if (fecha.getDay() === 5) { 
            contador++;
        }
    }

    return contador;
};

const año = 2024; 
console.log(`En el año ${año} hay ${contarViernes13(año)} viernes 13.`);


//EJERCICIO 3
const equinoccios = {
    2024: "2024-03-20T03:06:00Z",
    2025: "2025-03-20T09:02:00Z",
    2026: "2026-03-20T14:46:00Z",
    2027: "2027-03-20T20:25:00Z",
    2028: "2028-03-20T02:17:00Z",
    2029: "2029-03-20T08:01:00Z",
    2030: "2030-03-20T13:51:00Z"
};

const obtenerEquinoccioPrimavera = (año) => {
    if (equinoccios[año]) {
        return new Date(equinoccios[año]);
    } else {
        return "Fecha no disponible.";
    }
};

const año3 = 2025;
const equinoccio = obtenerEquinoccioPrimavera(año3);
console.log(`El equinoccio de primavera en ${año3} sera el: ${equinoccio}`);


//EJERCICIO 4
const esBisiesto = (año) => {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
};

const calcularEdadEnDias = (fechaNacimiento) => {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    const añoNacimiento = nacimiento.getFullYear();
    const nacidoEnBisiesto = esBisiesto(añoNacimiento);

    const diferenciaTiempo = hoy - nacimiento;
    const edadEnDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    return {
        nacidoEnBisiesto,
        edadEnDias,
    };
};

const fecha = "2000-02-29"; 
const resultado4 = calcularEdadEnDias(fecha);

console.log(`Nació en un año bisiesto? ${resultado4.nacidoEnBisiesto ? "Si" : "No"}`);
console.log(`Edad en días: ${resultado4.edadEnDias}`);


//EJERCICIO 5
const encontrarUltimosDomingos = (año) => {
    const ultimosDomingos = [];

    for (let mes = 0; mes < 12; mes++) {
        let ultimoDia = new Date(año, mes + 1, 0); 

        while (ultimoDia.getDay() !== 0) { 
            ultimoDia.setDate(ultimoDia.getDate() - 1);
        }

        ultimosDomingos.push(ultimoDia.toISOString().split('T')[0]);
    }

    return ultimosDomingos;
};

const añoEjemplo = 2025;
console.log(encontrarUltimosDomingos(añoEjemplo));


//EJERCICIO 6
const ajustarAÚltimaHora = (fecha, zonaHoraria) => {
    try {
        let fechaUTC = new Date(fecha);
        fechaUTC.setUTCHours(23, 59, 59, 999); 


        let fechaLocal = new Date(fechaUTC.toLocaleString("en-US", { timeZone: zonaHoraria }));

        let año = fechaLocal.getFullYear();
        let mes = String(fechaLocal.getMonth() + 1).padStart(2, "0");
        let dia = String(fechaLocal.getDate()).padStart(2, "0");
        let hora = String(fechaLocal.getHours()).padStart(2, "0");
        let minuto = String(fechaLocal.getMinutes()).padStart(2, "0");
        let segundo = String(fechaLocal.getSeconds()).padStart(2, "0");

        return `${año}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
    } catch (error) {
        return `Error: Zona horaria inválida (${zonaHoraria})`;
    }
};

console.log(ajustarAÚltimaHora("2025-03-15T12:00:00Z", "Europe/Madrid"));
console.log(ajustarAÚltimaHora("2025-03-15T12:00:00Z", "ZonaInexistente")); 


//EJERCICIO 7
function calcularProximaLunaLlena(fechaInicio) {
    let fecha = new Date(fechaInicio);
    
    const cicloLunar = 29.53;
    
    const fechaActual = new Date();
    
    let diasTranscurridos = Math.floor((fechaActual - fecha) / (1000 * 60 * 60 * 24));
    
    let ciclosPasados = Math.floor(diasTranscurridos / cicloLunar);
    
    let diasHastaProximaLunaLlena = Math.ceil((ciclosPasados + 1) * cicloLunar) - diasTranscurridos;
    
    fecha.setDate(fecha.getDate() + diasHastaProximaLunaLlena);
    
    return fecha;
}

const fechaInicio = "2025-02-25"; 
const proximaLunaLlena = calcularProximaLunaLlena(fechaInicio);
console.log(`La proxima luna llena es el: ${proximaLunaLlena.toLocaleDateString()}`);


//EJERCICIO 8
function contarDiasHabiles(fechaInicio, fechaFin, diasFestivos = []) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const diasFestivosSet = new Set(diasFestivos.map(d => new Date(d).toDateString()));
    let diasHabiles = 0;

    for (let dia = new Date(inicio); dia <= fin; dia.setDate(dia.getDate() + 1)) {
        const esFinDeSemana = dia.getDay() === 0 || dia.getDay() === 6; 
        if (!esFinDeSemana && !diasFestivosSet.has(dia.toDateString())) {
            diasHabiles++;
        }
    }

    return diasHabiles;
}

const totalDiasHabiles = contarDiasHabiles("2025-02-25", "2025-03-05", ["2025-03-01"]);
console.log(`Dias habiles: ${totalDiasHabiles}`);


//EJERCICIO 9
function tiempoRestanteHastaMedianoche(zonaHoraria) {
    const fechaActualUTC = new Date();
    
    const fecha = new Date(fechaActualUTC.toLocaleString("en-US", { timeZone: zonaHoraria }));
    const horasActuales = fecha.getHours();
    const minutosActuales = fecha.getMinutes();
    const segundosActuales = fecha.getSeconds();

    const horasRestantes = 23 - horasActuales;
    const minutosRestantes = 59 - minutosActuales;
    const segundosRestantes = 59 - segundosActuales;

    return {
        horas: horasRestantes,
        minutos: minutosRestantes,
        segundos: segundosRestantes
    };
}

try {
    const tiempoRestante = tiempoRestanteHastaMedianoche("America/Madrid");
    console.log(`Tiempo restante hasta la medianoche: ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos, ${tiempoRestante.segundos} segundos`);
} catch (error) {
    console.error(error.message);
}


//EJERCICIO 10
function obtenerLunesDelAno(anio) {
    const lunes = [];
    const fechaInicial = new Date(anio, 0, 1); 
    const fechaFinal = new Date(anio, 11, 31); 

    let diaSemana = fechaInicial.getDay();
    let primerLunes = fechaInicial;

    if (diaSemana !== 1) { 
        let diasHastaLunes = (1 - diaSemana + 7) % 7; 
        primerLunes.setDate(fechaInicial.getDate() + diasHastaLunes);
    }

    for (let fecha = primerLunes; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 7)) {
        const anio = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
        const dia = String(fecha.getDate()).padStart(2, '0'); 
        lunes.push(`${anio}-${mes}-${dia}`);
    }

    return lunes;
}

const anio = 2023; 
const lunesDelAno = obtenerLunesDelAno(anio);
console.log(lunesDelAno);
