//11. Estadísticas de Redes Sociales

const publicaciones = [
    { id: 1, likes: 120, comentarios: 30 },
    { id: 2, likes: 50, comentarios: 10 },
    { id: 3, likes: 200, comentarios: 100 },
    { id: 4, likes: 80, comentarios: 20 },
    { id: 5, likes: 150, comentarios: 40 }
  ];
  
  const totalLikes = publicaciones.reduce((acc, publicacion) => acc + publicacion.likes, 0);
  console.log('Total de likes:', totalLikes);
  
  const publicacionesMasDe100Likes = publicaciones.filter(publicacion => publicacion.likes > 100);
  console.log('Publicaciones con más de 100 likes:', publicacionesMasDe100Likes);
  
  const publicacionesOrdenadas = publicaciones.sort((a, b) => (b.likes + b.comentarios) - (a.likes + a.comentarios));
  console.log('Publicaciones ordenadas por popularidad:', publicacionesOrdenadas);
  