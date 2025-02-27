//4. Gestión de Tareas (To-Do List)

function gestionarTareas() {
    let tareas = [];

    function añadirTarea(nombre) {
        const tarea = { nombre, completada: false };
        tareas.push(tarea);
        console.log(`Tarea "${nombre}" añadida.`);
    }

    function marcarComoCompletada(nombre) {
        const tarea = tareas.find(tarea => tarea.nombre === nombre);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea "${nombre}" marcada como completada.`);
        } else {
            console.log(`La tarea "${nombre}" no se encuentra.`);
        }
    }

    function filtrarTareasCompletadas() {
        const tareasCompletadas = tareas.filter(tarea => tarea.completada === true);
        console.log('Tareas completadas:');
        console.log(tareasCompletadas);
    }

    function filtrarTareasIncompletas() {
        const tareasIncompletas = tareas.filter(tarea => tarea.completada === false);
        console.log('Tareas incompletas:');
        console.log(tareasIncompletas);
    }

    function contarTareasPendientes() {
        const tareasPendientes = tareas.filter(tarea => tarea.completada === false);
        console.log(`Número de tareas pendientes: ${tareasPendientes.length}`);
    }

    return {
        añadirTarea,
        marcarComoCompletada,
        filtrarTareasCompletadas,
        filtrarTareasIncompletas,
        contarTareasPendientes
    };
}

const miTareas = gestionarTareas();

miTareas.añadirTarea('Hacer la compra');
miTareas.añadirTarea('Estudiar JavaScript');
miTareas.añadirTarea('Lavar los platos');

miTareas.marcarComoCompletada('Hacer la compra');

miTareas.filtrarTareasCompletadas();
miTareas.filtrarTareasIncompletas();

miTareas.contarTareasPendientes();
