const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//iniciando app
const app = express();
app.use(express.json()); // para permitir receber os posts em json
app.use(cors());

//iniciando banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi");
requireDir("./src/models");

//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
