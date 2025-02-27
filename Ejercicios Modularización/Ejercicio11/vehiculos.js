const vehiculos = [];

const agregarVehiculo = (marca, modelo, año) => {
    vehiculos.push({ marca, modelo, año });
};

const buscarVehiculosPorMarca = (marca) => {
    return vehiculos.filter(vehiculo => vehiculo.marca.toLowerCase() === marca.toLowerCase());
};

const ordenarVehiculosPorAño = () => {
    vehiculos.sort((a, b) => b.año - a.año);  
};

export { agregarVehiculo, buscarVehiculosPorMarca, ordenarVehiculosPorAño, vehiculos };
