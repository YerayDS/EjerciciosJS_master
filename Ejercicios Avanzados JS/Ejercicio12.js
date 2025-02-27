//12. Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 19 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'María', edad: 16 }
  ];
  
  function gestionarAlumnos() {
    function añadirAlumno(nombre, edad) {
      const nuevoAlumno = { nombre, edad };
      return [...alumnos, nuevoAlumno]; 
    }
  
    function actualizarAlumno(nombre, nuevaEdad) {
      const alumnosActualizados = alumnos.map(alumno => {
        if (alumno.nombre === nombre) {
          return { ...alumno, edad: nuevaEdad };
        }
        return alumno; 
      });
      return alumnosActualizados; 
    }
  
    function contarMayoresDe18() {
      return alumnos.filter(alumno => alumno.edad > 18).length;
    }
  
    return {
      añadirAlumno,
      actualizarAlumno,
      contarMayoresDe18
    };
  }
  
  const gestor = gestionarAlumnos();
  
  const alumnosConNuevo = gestor.añadirAlumno('Carlos', 22);
  console.log('Alumnos después de añadir a Carlos:', alumnosConNuevo);
  
  const alumnosActualizados = gestor.actualizarAlumno('Ana', 18);
  console.log('Alumnos después de actualizar a Ana:', alumnosActualizados);
  
  const cantidadMayoresDe18 = gestor.contarMayoresDe18();
  console.log('Número de alumnos mayores de 18 años:', cantidadMayoresDe18);
  