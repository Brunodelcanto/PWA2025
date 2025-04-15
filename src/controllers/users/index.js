const users = {
    1: {
        username: "John",
        name: "John Doe",
        email: "johndoe@gmail.com",
    },
    2: {
        username: "Jane",
        name: "Jane Doe",
        emai: "janedoe@gmail.com"
    }
}

// Esta funcion recibe todos los usuarios y los devuelve en formato json
const getUser = (req, res) => {
   res.status(200).json({
    status: "success",
    data: users,
   });
};

// exportamos la funcion getUser para poder usarla en otros archivos 
export { getUser };