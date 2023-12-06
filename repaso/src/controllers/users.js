const User = require('../models/users')//importa el modelo, ahora los endpoints tienen que ser con try catch porque ya hay validaciones desde la base de datos
const jwt = require('../utils/jwt')
//este lleva del json de funciones que ejecutan nuestras rutas. Se necesita un middleware en app.js que maneje las respuestas
module.exports = {
   getAll: async (req, res, next) => {
    try{
        let user = await User.find()
        next({status: 200, send: {msg: "Usuarios", data: users}})
    } catch (error){
        next({status: 400, send: {msg: "Usuarios no encontrados", err: error}})
    }
   
   },
   getById: async (req, res, next) => {
    next({status: 200, send: {msg: "Usuario encontrado", data: {}}})
   },
   post: async (req, res, next) => {
    try{
        let user = await User.create(req.body)
        next({status: 201, send: {msg: "Usuario creado", data: user}})
    } catch (error){
        next({status: 400, send: {msg: "Usuario no creado", err: error}})
    }
   },
   put: async (req, res, next) => {
    next({status: 200, send: {msg: "Usuario actualizado", data: {}}})
   },
   delete: async (req, res, next) => {
    next({status: 200, send: {msg: "Usuario eliminado", data: {}}})
   },
   login:  async (req, res, next) => {
    try{
        let user = await User.findOne({email: req.body.email})
        if (user.password !== req.body.password) {
            next({status: 401, send: {msg: "Email o Password incorrecto"}})
        }
        delete user.password
        let token = jwt.create(user)
        next({status: 200, send: {msg: "Acceso autorizado", token: token}}) //aquí enviamos el token al navegador
    } catch (error){
        next({status: 401, send: {msg: "Acceso no autorizado", err: error}})
    } 
   }
}