const express = require("express");
const cors = require("cors");
const app = express();
const joyasRoutes = require("./routes/joyasRoutes");

app.use(cors());
app.use(express.json());

app.use("/", joyasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
