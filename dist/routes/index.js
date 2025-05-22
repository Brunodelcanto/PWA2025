"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Este archivo va a manejar todas las rutas de nuestra aplicacion
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./users/index"));
const index_2 = __importDefault(require("./products/index"));
const index_3 = __importDefault(require("./categories/index"));
const router = express_1.default.Router();
// esto lo que hace es que todo lo que vaya a la ruta /users
// va a ser manejado por el router de usuarios
router.use("/users", index_1.default);
router.use("/products", index_2.default);
router.use("/categories", index_3.default);
exports.default = router;
// exportamos el router para poder usarlo en otros archivos
