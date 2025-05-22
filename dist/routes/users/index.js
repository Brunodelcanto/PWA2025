"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// importamos el controlador de usuarios
// el controlador es el encargado de recibir la peticion y devolver la respuesta
const users_1 = require("../../controllers/users/");
// guardamos en esta variable para poder usar el routeo de express
const router = express_1.default.Router();
// esta funcion recibe el objeto router y le asigna la ruta /users
// y le asigna el controlador getUser
// metodo get para conseguir
router.get("/", users_1.getUsers);
// metodo post para crear
router.post("/", users_1.createUser);
router.get("/:id", users_1.getUserById);
// metodo put para actualizar 
router.put("/:id", users_1.updateUser);
// metodo delete para eliminar
router.delete("/:id", users_1.deleteUser);
exports.default = router;
// exportamos el router para poder usarlo en otros archivos
