// Este archivo va a manejar todas las rutas de nuestra aplicacion
import express from "express";
import userRouter from "./users/index";
import productRouter from "./products/index";
import categoryRouter from "./categories/index";

const router = express.Router();

// esto lo que hace es que todo lo que vaya a la ruta /users
// va a ser manejado por el router de usuarios
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
// exportamos el router para poder usarlo en otros archivos
