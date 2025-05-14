import express from "express";
// importamos el controlador de usuarios
// el controlador es el encargado de recibir la peticion y devolver la respuesta
import { getUser, createUser, getUserById, updateUser, getUsers, deleteUser } from "../../controllers/users/index.js";

// guardamos en esta variable para poder usar el routeo de express
const router = express.Router();

// esta funcion recibe el objeto router y le asigna la ruta /users
// y le asigna el controlador getUser

// metodo get para conseguir
router.get ("/", getUsers);
// metodo post para crear
router.post ("/", createUser);
router.get ("/:id", getUserById);
// metodo put para actualizar 
router.put ("/:id", updateUser);
// metodo delete para eliminar
router.delete ("/:id", deleteUser);

export default router;
// exportamos el router para poder usarlo en otros archivos