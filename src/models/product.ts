import mongoose, {Schema, Document} from "mongoose";


// Definimos la interfaz de nuestro modelo
export interface Product extends Document {
    name: string;
    description: string;
    amount: number;
    price: number;
    isActive: boolean;
    image: string;
}


// Definimos el esquema de nuestro modelo
const productSchema = new Schema(
    {
        name: {type: String},
        description: {type: String},
        amount: {type: Number},
        price: {type: Number},
        isActive: {type: Boolean},
        image: {type: String},
    },
    {
        timestamps: true,  
    }
);

// conectado nuestro tipado con nuestro modelo de mongoose
const Product = mongoose.model<Product>("Product", productSchema);

export default Product;