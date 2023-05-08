const mongoose = require("mongoose");

var MONGODB_CONNECT;

if (process.env.NODE_ENV != "development")
  MONGODB_CONNECT = process.env.MONGODB_CONNECT;
else MONGODB_CONNECT = "mongodb://127.0.0.1:27017/empress";

mongoose.connect(MONGODB_CONNECT);

const db = mongoose.connection;
db.once("open", () => console.log("Banco carregado com sucesso!"));
db.once("error", () => console.log("Error ao carregar banco!"));
