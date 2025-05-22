"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
require("dotenv/config");
const database_1 = __importDefault(require("./database"));
// ejecucion de express
const app = (0, express_1.default)();
// asignacion de puerto para el servidor
// el puerto se toma de las variables de entorno, si no existe se asigna el 3000
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
// nos permite que todo lo que enviemos al servidor o lo que entre venga o vaya parseado en formato json
app.use(express_1.default.json());
console.log("🔍 URI de conexión:", process.env.MONGO_URI);
// llamamos a la funcion de conexion a la base de datos
// y la ejecutamos
(0, database_1.default)();
// esta funcion toma dos parametros, el puerto y una funcion de callback
app.get("/", (req, res) => {
    res.send("Hola Mundo desde Express");
});
app.use("/api", index_1.default);
// esta funcion recibe el puerto y el callback que se ejecutara cuando el servidor inicie
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
