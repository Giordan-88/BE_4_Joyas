const construirHATEOAS = (joyas) => {
  return joyas.map((j) => {
    return {
      nombre: j.nombre,
      href: `/joyas/${j.id}`
    };
  });
};

module.exports = construirHATEOAS;
