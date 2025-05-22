"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.getUserById = exports.createUser = void 0;
const user_1 = __importDefault(require("../../models/user"));
// const users = {
//     1: {
//         username: "John",
//         name: "John Doe",
//         email: "johndoe@gmail.com",
//     },
//     2: {
//         username: "Jane",
//         name: "Jane Doe",
//         email: "janedoe@gmail.com"
//     }
// }
// Esta funcion recibe todos los usuarios y los devuelve en formato json
// const getUser = (req: Request, res: Response) => {
//    res.status(200).json({
//     status: "success",
//     data: users,
//    });
// };
// Creamos un controlador para poder insertar informacion en la base de datos
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // el controlador crea un nuevo usuario con la informacion que recibe del cliente
        const user = new user_1.default(req.body);
        // el controlador guarda el usuario en la base de datos
        yield user.save();
        // el controlador devuelve una respuesta al cliente
        res.status(201).json({
            message: "User created successfully",
            data: user,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.createUser = createUser;
// Esta funcion recibe todos los usuarios y los devuelve en formato json
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json({
            message: "Fetched successfully",
            data: users,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.getUsers = getUsers;
// Esta funcion recibe un id y devuelve el usuario correspondiente
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // le enviamos el id de usuario que queremos buscar
        const { id } = req.params;
        // buscamos el usuario filtrandolo por el id
        // esto nos va a devoler un objetoo con la informacion del usuario
        const user = yield user_1.default.findById(id);
        // si el usuario no existe, devolvemos un error
        if (!user) {
            res.status(404).json({
                message: "User not found",
                error: true,
            });
            return;
        }
        // si el usuario existe, devolvemos la informacion del usuario
        res.status(200).json({
            message: "Fetched successfully",
            data: user,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByIdAndUpdate(
        // como primer arumento le pasamos el id del usuario que queremos actualizar
        id, {
            // como segundo argumento le pasamos la informacion que queremos actualizar
            $set: req.body,
        }, 
        // con el new devolvemos el usuario actualizado
        { new: true });
        if (!user) {
            res.status(404).json({
                message: "User not found",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Update successfully",
            data: user,
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // le pasamos el id del usuario que queremos eliminar
        const { id } = req.params;
        // y lo eliminamos de la base de datos
        const user = yield user_1.default.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({
                message: "User not found",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Deletes successfully",
            error: false,
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
});
exports.deleteUser = deleteUser;
