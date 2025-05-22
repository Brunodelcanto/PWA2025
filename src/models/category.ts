import mongoose, {Schema, Document} from "mongoose";
import { Product } from "./product";


// Definimos la interfaz de nuestro modelo
interface Category extends Document {
    name: string;
    description: string;
    products: Product[];
}


// Definimos el esquema de nuestro modelo
const CategorySchema = new Schema(
    {
        name: {type: String},
        description: {type: String},
        // Definimos la relación con el modelo de productos
        products: [{type: Schema.Types.ObjectId, ref: "Product"}],
    },
    {
        timestamps: true,
    }
)

const Category = mongoose.model<Category>("Category", CategorySchema);

export default Category;