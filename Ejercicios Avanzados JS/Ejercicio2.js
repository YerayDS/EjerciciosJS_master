//2. Análisis de Notas de Estudiantes

const estudiantes = [
    { nombre: 'Juan', calificacion: 8 },
    { nombre: 'Ana', calificacion: 5 },
    { nombre: 'Pedro', calificacion: 7 },
    { nombre: 'Lucía', calificacion: 9 },
    { nombre: 'Carlos', calificacion: 4 },
    { nombre: 'María', calificacion: 6 }
  ];


//FILTRAR APROBADOS
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 6);
console.log(estudiantesAprobados);

//NOTA MEDIA DE LA CLASE
let totalNotas = 0;
for (let i = 0; i < estudiantes.length; i++) {
  totalNotas += estudiantes[i].calificacion;
}
const notaMedia = totalNotas / estudiantes.length;
console.log(notaMedia);

//ESTUDIANTES ORDENADOS
let estudiantesOrdenados = [...estudiantes]; 
for (let i = 0; i < estudiantesOrdenados.length - 1; i++) {
  for (let j = 0; j < estudiantesOrdenados.length - 1 - i; j++) {
    if (estudiantesOrdenados[j].calificacion < estudiantesOrdenados[j + 1].calificacion) {
      let temp = estudiantesOrdenados[j];
      estudiantesOrdenados[j] = estudiantesOrdenados[j + 1];
      estudiantesOrdenados[j + 1] = temp;
    }
  }
}
console.log(estudiantesOrdenados);