const express = require('express')
const router = express.Router() //genera rutas fuera de app.js como módulos
const userController = require('../controllers/users')//importa el controlador
/*parámetros: recurs y función callback o controlador:
router.get('/', (req, res) => { 
    res.status(200).send("Hola mundo desde users")
})
controlador:*/
router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.post('/', userController.post)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)

module.exports = router