const users = "./src/db/users.json"; //se escribe como si navegaramos desde app.js porque estamos ejecutando este script desde ahí
const fs = require('fs');

module.exports = {
  getById: async (req, res, next) => {
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
          let deleteId = parseInt(id)
          let filteredUsers = usersObject.filter(user => user.id !==deleteId)
          let updatedUsers = JSON.stringify(filteredUsers)
          fs.writeFile(users, updatedUsers, 'utf-8', ((err) => {
            if (err) next({status: 500, send: {msg: "Usuario no eliminado"}});
            next({status: 201, send: {msg: "Usuario eliminado"}})
          }))   
        }); 
    }
}
