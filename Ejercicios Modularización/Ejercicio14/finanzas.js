const registros = [];

const registrarIngreso = (cantidad) => {
    registros.push({ tipo: "ingreso", cantidad });
};

const registrarGasto = (cantidad) => {
    registros.push({ tipo: "gasto", cantidad });
};

const calcularSaldoTotal = () => {
    return registros.reduce((total, registro) => {
        if (registro.tipo === "ingreso") {
            return total + registro.cantidad;
        } else if (registro.tipo === "gasto") {
            return total - registro.cantidad;
        }
        return total;
    }, 0);
};

export { registrarIngreso, registrarGasto, calcularSaldoTotal, registros };
