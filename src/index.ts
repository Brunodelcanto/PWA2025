import express from "express";
import cors from "cors";
import routes from "./routes/index";
import "dotenv/config";
import connectDB from "./database";



// ejecucion de express
const app = express();
// asignacion de puerto para el servidor
// el puerto se toma de las variables de entorno, si no existe se asigna el 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
// nos permite que todo lo que enviemos al servidor o lo que entre venga o vaya parseado en formato json
app.use (express.json());

console.log("🔍 URI de conexión:", process.env.MONGO_URI);

// llamamos a la funcion de conexion a la base de datos
// y la ejecutamos
connectDB();

// esta funcion toma dos parametros, el puerto y una funcion de callback
app.get("/",(req, res)=>{
    res.send("Hola Mundo desde Express");
});

app.use("/api", routes);

// esta funcion recibe el puerto y el callback que se ejecutara cuando el servidor inicie
app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});




