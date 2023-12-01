const users = "./src/db/users.json" //se escribe como si navegaramos desde app.js porque estamos ejecutando este script desde ahí
const fs = require('fs')
const Users = require('../models/users')

module.exports = {
  getById: async (req, res, next) => {  
    try {
      const { id } = req.params
      let users = await Users.findById(id)
      next({status: 200, send:{msg:"usuario encontrado", data: users}})
    } catch (error){
    next({status: 404, send: {msg: "Usuario no encontrado", err: error}})
    }
  },

  getAll: async (req,res,next) => {
    try {
    let users = await Users.find()
    next({status: 200, send: {msg: "Usuarios encontrados", data: users}})
    } catch (err) {
      next({status: 404, send: {msg: "Usuarios no encontrados", err: error}})
    }
  },

  addUser: async (req, res, next) => {
    try {
      let user = await Users.create(req.body)
      next ({status: 201, send: {msg: "Usuario creado", data: user}})
    } catch (error){
      next({status: 400, send: {msg: "Usuario no creado", err: error}})
    }   
  },

  replaceUser: async (req, res, next) => {
    try{
      const { id } = req.params
      let user = await Users.findByIdAndUpdate(id, req.body)
      next ({status: 201, send: {msg: "Usuario actualizado"}})
    } catch (error){
      next({status: 500, send: {msg: "Error al actualizar el usuario", err: err}})
    } 
  },

  deleteUser: async (req, res, next) => {
    try{
      const { id } = req.params
      let delUser = await Users.findByIdAndDelete(id)
      next ({status: 200, send: {msg: "Usuario eliminado", data: delUser}})
    } catch (error){
      next({status: 500, send: {msg: "Error al eliminar el usuario"}})
    } 
  }

  /*getById: async (req, res, next) => {
    //getbyid debe ser así o en snakecase porque es lo que secribe en la url
    const { id } = req.params; //{ } operador deconstructor
    console.log(id);
    fs.readFile(users, "utf-8", (err, users) => {
      if (err) next({ status: 400, send: { msg: "No se pudo abrir el archivo", err: err }});
      users = JSON.parse(users);
      users.forEach((user) => {
        if (user.id == id) {next({status: 200, send: { msg: "Usuario encontrado", data: user }});
        }
      });
      next({ status: 404, send: { msg: "Usuario no encontrado" } });
    });
  },

  getAll: async (req,res,next) => {
    fs.readFile(users, "utf-8", (err, users) => {
        if (err) next({status:400, send:{msg: "No se pudo abrir el archivo", err: err}});
        users = JSON.parse(users)
        console.log(users)
        next({status: 200, send: {msg: "Usuario encontrado", data: users}})
        next({status: 404, send: {msg: "Usuario no encontrado" }});
      })
  },

  addUser: async (req, res, next) => {
    fs.readFile(users, "utf-8", (err, usersObject) => {
      if (err) next({status :400, send: {msg: "No se pudo abrir el archivo", err: err}});
      usersObject = JSON.parse(usersObject)
      let newUser = req.body
      //Aqui va el que genera el id
      usersObject.push(newUser)
      const updatedUsers = JSON.stringify(usersObject)
      fs.writeFile(users, updatedUsers, 'utf-8', (err => {
        if (err) next({status: 500, send: {msg: "Usuario no creado"}});
        next({status: 201, send: {msg: "Usuario añadido correctamente"}})
      }))
    })
  },

    deleteUser: async (req, res, next) => {
        const { id } = req.params; //{ } operador deconstructor
        console.log("id", id);
        fs.readFile(users, "utf-8", (err, usersObject) => {
          if (err) next({ status: 400, send: { msg: "No se pudo abrir el archivo", err: err }});
          usersObject = JSON.parse(usersObject);
          console.log(usersObject)
          /*let deleteId = parseInt(id)
          console.log(deleteId) 
        })   
    }*/  
}
