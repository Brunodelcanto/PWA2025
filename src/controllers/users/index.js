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

// Esta funcion recibe todos los usuarios y los devuelve en formato json
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Fetched successfully",
            data: users,
            error: false,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

// Esta funcion recibe un id y devuelve el usuario correspondiente
const getUserById = async (req, res) => {
    try {
        // le enviamos el id de usuario que queremos buscar
        const { id } = req.params;
        // buscamos el usuario filtrandolo por el id
        // esto nos va a devoler un objetoo con la informacion del usuario
        const user = await User.findById(id);
        // si el usuario no existe, devolvemos un error
        if (!user){
            return res.status(404).json({
                message: "User not found",
                error: true,
            });
        }
        // si el usuario existe, devolvemos la informacion del usuario
        res.status(200).json({
            message: "Fetched successfully",
            data: user,
            error: false,  
        })
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(
            // como primer arumento le pasamos el id del usuario que queremos actualizar
            id,
            {
            // como segundo argumento le pasamos la informacion que queremos actualizar
                $set: req.body,
            },
            // con el new devolvemos el usuario actualizado
            { new: true }
        );
        if (!user){
            return res.status(404).json({
                message: "User not found",
                error: true,
            });
        }
        res.status(200).json({
            message: "Update successfully",
            data: user,
            error: false,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
}

const deleteUser = async (req, res)=>{
    try {
        // le pasamos el id del usuario que queremos eliminar
        const { id } = req.params;
        // y lo eliminamos de la base de datos
        const user = await User.findByIdAndDelete(id);
        if (!user){
            return res.status(404).json({
                message: "User not found",
                error: true,
            });
        }
        res.status(200).json({
            message: "Deletes successfully",
            error: false,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};


// exportamos la funcion getUser para poder usarla en otros archivos 
export { getUser, createUser, getUserById, getUsers, updateUser, deleteUser };