import mongoose, { Schema } from "mongoose";

// modelamos una entidad que se llama usuario
// definimios sus atributos y sus tipos de datos
const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate:{
            type: Date,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,    
    }
);

// el primer parametro es el nombre del modelo y el segundo es lo que va a ir dentro del modelo
const User = mongoose.model("User", userSchema);

// exportamos el modelo para poder usarlo en otros archivos
export default User;