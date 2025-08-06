const logger = (req, res, next) => {
  const ruta = req.originalUrl;
  const fecha = new Date().toISOString();
  console.log(`[${fecha}] Consulta a ruta: ${ruta}`);
  next();
};

module.exports = logger;
