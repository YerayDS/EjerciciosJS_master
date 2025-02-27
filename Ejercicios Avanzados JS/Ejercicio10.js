//10. Gestión de Inscripciones a un Evento

let participantes = ['Ana', 'Luis', 'Pedro', 'María', 'Carlos'];

function agregarParticipante(nombre) {
  participantes.push(nombre);
  console.log(`Participante "${nombre}" agregado.`);
}

function eliminarParticipante(nombre) {
  const participantesFiltrados = participantes.filter(participante => participante !== nombre);

  if (participantesFiltrados.length === participantes.length) {
    console.log(`Participante "${nombre}" no encontrado.`);
  } else {
    participantes = participantesFiltrados; // Se reasigna el nuevo array sin el participante eliminado.
    console.log(`Participante "${nombre}" eliminado.`);
  }
}

function filtrarPorLetra(letra) {
  const participantesFiltrados = participantes.filter(participante => participante.includes(letra));
  console.log(`Participantes que contienen la letra "${letra}":`);
  console.log(participantesFiltrados);
}

function convertirALista() {
  const listaParticipantes = participantes.join(', ');
  console.log('Lista de participantes:');
  console.log(listaParticipantes);
}

agregarParticipante('Sofía');
eliminarParticipante('Luis');
filtrarPorLetra('a');
convertirALista();
