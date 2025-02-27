//7. Combinar Listas de Contactos (Operador Spread)

const contactos1 = ['Carlos', 'Ana', 'Luis', 'Pedro'];
const contactos2 = ['María', 'Pedro', 'Sofía', 'Carlos'];

const contactosCombinados = [...new Set([...contactos1, ...contactos2])];

const contactosOrdenados = contactosCombinados.sort();

console.log('Lista combinada y ordenada de contactos:');
console.log(contactosOrdenados);
