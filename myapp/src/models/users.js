 const mongoose = require("mongoose")

 //define las reglas de los campos de los usuarios de la aplicación
 const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String, unique: true, match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "debe ingresar un correo valido"]},
    gender: {type: String, enum: ["Female" ,"Male"]},
    password: {type: String, required: [true, "El password es requerido"], match: /^(.){8,300}$/},
    role: {type: String}
});

//modelo (aplica el Schema)
const Users = mongoose.model("Users", userSchema)
module.exports = Users
