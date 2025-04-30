import User from "../../models/user.js";

const users = {
    1: {
        username: "John",
        name: "John Doe",
        email: "johndoe@gmail.com",
    },
    2: {
        username: "Jane",
        name: "Jane Doe",
        email: "janedoe@gmail.com"
    }
}

// Esta funcion recibe todos los usuarios y los devuelve en formato json
const getUser = (req, res) => {
   res.status(200).json({
    status: "success",
    data: users,
   });
};

// Creamos un controlador para poder insertar informacion en la base de datos
const createUser = async (req, res)=>{
    try {
        // el controlador crea un nuevo usuario con la informacion que recibe del cliente
        const user = new User(req.body);
        // el controlador guarda el usuario en la base de datos
        await user.save();
        // el controlador devuelve una respuesta al cliente
        res.status(201).json({
            message: "User created successfully",
            data: user,
            error: false,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

// exportamos la funcion getUser para poder usarla en otros archivos 
export { getUser, createUser };