import { agregarVehiculo, buscarVehiculosPorMarca, ordenarVehiculosPorAño, vehiculos } from './vehiculos.js';

agregarVehiculo("Toyota", "Corolla", 2020);
agregarVehiculo("Honda", "Civic", 2018);
agregarVehiculo("Ford", "Fiesta", 2022);
agregarVehiculo("Toyota", "Camry", 2021);
agregarVehiculo("BMW", "X5", 2021);

console.log("Vehiculos de la marca Toyota:");
console.log(buscarVehiculosPorMarca("Toyota"));

console.log("\n Vehiculos ordenados por año:");
ordenarVehiculosPorAño();
console.log(vehiculos.map(vehiculo => `${vehiculo.marca} ${vehiculo.modelo} - Año: ${vehiculo.año}`));
