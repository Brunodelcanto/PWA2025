import express from "express";
// importamos el controlador de usuarios
// el controlador es el encargado de recibir la peticion y devolver la respuesta
import { getUser } from "../../controllers/users/index.js";

// guardamos en esta variable para poder usar el routeo de express
const router = express.Router();

// esta funcion recibe el objeto router y le asigna la ruta /users
// y le asigna el controlador getUser
router.get ("/", getUser);

export default router;
// exportamos el router para poder usarlo en otros archivos