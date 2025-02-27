const empleados = [];

const agregarEmpleado = (nombre, horasTrabajadas) => {
    empleados.push({ nombre, horasTrabajadas });
};

const calcularSumaTotalDeHoras = () => empleados.reduce((acumulador, empleado) => acumulador + empleado.horasTrabajadas, 0);

const filtrarEmpleadosPorHoras = () => empleados.filter(empleado => empleado.horasTrabajadas > 40);

const ordenarEmpleadosPorHoras = () => empleados.sort((a, b) => b.horasTrabajadas - a.horasTrabajadas);

export { agregarEmpleado, calcularSumaTotalDeHoras, filtrarEmpleadosPorHoras, ordenarEmpleadosPorHoras, empleados };
