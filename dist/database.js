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
const mongoose_1 = __importDefault(require("mongoose"));
// creamos una funcion para conectarnos a nuestro base de datos
// siempre que usemos un modelo ODM la funcion va a ser asincrona
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // mediante este proceso nos conectamos a la base de datos
        // el URI lo tenemos en el archivo .env
        yield mongoose_1.default.connect((_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : "");
        console.log("Database MongoDB connected✅");
    }
    catch (error) {
        // si no se conecta a la base de datos, mostramos el error en consola
        // y terminamos el proceso
        console.log("MongoDB connection failed❌", error);
        process.exit(1); // terminamos el proceso si no se conecta a la base de datos
    }
});
exports.default = connectDB;
// exportamos la funcion para usarla en otros archivos
