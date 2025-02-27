import { registrarIngreso, registrarGasto, calcularSaldoTotal } from './finanzas.js';

registrarIngreso(1000);  
registrarGasto(200);   
registrarIngreso(500);  
registrarGasto(150);  

const saldoTotal = calcularSaldoTotal();
console.log(`🔹 El saldo total es: $${saldoTotal}`);
