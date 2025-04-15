import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import "dotenv/config";

// ejecucion de express
const app = express();
// asignacion de puerto para el servidor
// el puerto se toma de las variables de entorno, si no existe se asigna el 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
// nos permite que todo lo que enviemos al servidor o lo que entre venga o vaya parseado en formato json
app.use (express.json());

// esta funcion toma dos parametros, el puerto y una funcion de callback
app.get("/",(req, res)=>{
    res.send("Hola Mundo desde Express");
});

app.use("/api", routes);

// esta funcion recibe el puerto y el callback que se ejecutara cuando el servidor inicie
app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});




