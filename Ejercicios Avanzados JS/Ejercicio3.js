//3. Historial de Transacciones Bancarias

const transacciones = [150, -50, 200, -120, 30, -80, 500];

let saldoTotal = 0;
for (let i = 0; i < transacciones.length; i++) {
  saldoTotal += transacciones[i];
}
console.log('Saldo total:', saldoTotal);

const transaccionesMayoresA100 = transacciones.filter(transaccion => transaccion > 100);
console.log('Transacciones mayores a 100:', transaccionesMayoresA100);

let transaccionesInvertidas = [];
for (let i = transacciones.length - 1; i >= 0; i--) {
  transaccionesInvertidas.push(transacciones[i]);
}
console.log('Transacciones invertidas:', transaccionesInvertidas);