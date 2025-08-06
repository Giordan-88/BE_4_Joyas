const pool = require("../config/db");

const getJoyas = async ({ limits, page, order_by }) => {
  let query = "SELECT * FROM inventario";
  const values = [];

  if (order_by) {
    const [campo, direccion] = order_by.split("_");
    query += ` ORDER BY ${campo} ${direccion.toUpperCase()}`;
  }

  if (limits) {
    query += " LIMIT $1";
    values.push(limits);

    if (page) {
      const offset = (page - 1) * limits;
      query += " OFFSET $2";
      values.push(offset);
    }
  }

  const { rows } = await pool.query(query, values);
  return rows;
};

const getJoyasPorFiltros = async ({ precio_min, precio_max, categoria, metal }) => {
  let filtros = [];
  let values = [];
  let index = 1;

  if (precio_min) {
    filtros.push(`precio >= $${index++}`);
    values.push(precio_min);
  }
  if (precio_max) {
    filtros.push(`precio <= $${index++}`);
    values.push(precio_max);
  }
  if (categoria) {
    filtros.push(`categoria = $${index++}`);
    values.push(categoria);
  }
  if (metal) {
    filtros.push(`metal = $${index++}`);
    values.push(metal);
  }

  let query = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    query += " WHERE " + filtros.join(" AND ");
  }

  const { rows } = await pool.query(query, values);
  return rows;
};

module.exports = { getJoyas, getJoyasPorFiltros };
