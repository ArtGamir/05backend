const express = require('express');
const router = express.Router();
const users = "./src/db/users.json"; //se escribe como si navegaramos desde app.js porque estamos ejecutando este script desde ahí
const fs = require('fs');
const { nextTick } = require('process');
const usersControllers = require("../../controllers/usersControllers")

//Obtener usuario por id
router.get("/getbyid/:id", usersControllers.getById);

//Obtener todos los usuarios
router.get("/getall", usersControllers.getAll)

//agrega un usuario
router.post("/add", usersControllers.addUser)

//actualiza un usuario por id

//elimina un usuario
router.delete('/delete', usersControllers.deleteUser)

/*router.get('/', (req, res) => {
  console.log(req.params); 
  res.status(200).send(`Hello Word Get Router Params ${req.params.id}!`)
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send(`Hello ${req.body.name}`)
})

router.put('/', (req, res) => {
  res.status(201).send('Hello Word Put Router!')
})

router.delete('/', (req, res) => {
  res.status(200).send('Hello Word Delete Router!')
})*/

//exportar
module.exports = router;
