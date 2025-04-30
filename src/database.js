import mongoose from "mongoose";

// creamos una funcion para conectarnos a nuestro base de datos
// siempre que usemos un modelo ODM la funcion va a ser asincrona
const connectDB = async () => {
    try {
        // mediante este proceso nos conectamos a la base de datos
        // el URI lo tenemos en el archivo .env
        await mongoose.connect(process.env.MONGO_URI, "");
        console.log("Database MongoDB connected✅");
    } catch (error) {
        // si no se conecta a la base de datos, mostramos el error en consola
        // y terminamos el proceso
        console.log("MongoDB connection failed❌", error);
        process.exit(1); // terminamos el proceso si no se conecta a la base de datos
    }
}

export default connectDB; 
// exportamos la funcion para usarla en otros archivos