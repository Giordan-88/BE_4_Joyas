const { getJoyas, getJoyasPorFiltros } = require("../models/joyasModel");
const construirHATEOAS = require("../utils/hateoas");
const pool = require("../config/db"); // Agregar esta línea

const obtenerJoyas = async (req, res) => {
  try {
    const joyas = await getJoyas(req.query);
    const resultado = construirHATEOAS(joyas);
    res.json({ joyas: resultado });
  } catch (error) {
    console.error("Error al obtener joyas:", error);
    res.status(500).json({ error: "Error al obtener joyas" });
  }
};

const filtrarJoyas = async (req, res) => {
  try {
    const joyas = await getJoyasPorFiltros(req.query);
    res.json({ joyas });
  } catch (error) {
    console.error("Error al filtrar joyas:", error);
    res.status(500).json({ error: "Error al filtrar joyas" });
  }
};

const obtenerJoyaPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const query = "SELECT * FROM inventario WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Joya no encontrada" });
    }
    res.json({ joya: rows[0] });
  } catch (error) {
    console.error("Error al obtener joya por ID:", error);
    res.status(500).json({ error: "Error al obtener joya por ID" });
  }
};

module.exports = { obtenerJoyas, filtrarJoyas, obtenerJoyaPorId };
