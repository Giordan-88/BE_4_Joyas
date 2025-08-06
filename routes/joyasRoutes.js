const express = require("express");
const router = express.Router();
const { obtenerJoyas, filtrarJoyas, obtenerJoyaPorId } = require("../controllers/joyasController");
const logger = require("../middleware/logger");

router.get("/joyas", logger, obtenerJoyas);
router.get("/joyas/filtros", logger, filtrarJoyas);
router.get("/joyas/:id", obtenerJoyaPorId);
module.exports = router;
