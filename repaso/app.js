require('dotenv').config() //importa de manera global la biblioteca dotenv
const express = require ('express') //importa la dependencia
const morgan = require ('morgan')
const publicRoutes = require ('./src/public/routes/index')
const routes = require ('./src/routes/index') //mporta las rutas
const jwt = require ('./src/utils/jwt') //importa el middleware verify
const db = require ('./src/utils/db') //importa la conección con base de datos
const app = express() //ejecuta la dependencia
const port = process.env.PORT || 3000

db.connect() //ejecuta la conección con base de datos
app.use(express.json()) //define que va a poder recibir bodys tipo json, es un api res
app.use(morgan('dev')) //ejecuta morgan para que pueda ver logs del servidor en terminal

app.use('/', publicRoutes) //buena práctica escribirla así: '/api/v1'
app.use('/api', jwt.verify, routes)// ejecuta el middleware verify

//middleware de respuestas de controladores
app.use((resp,req, res, next) => {
    res.status(resp.status).send(resp.send)
})

app.listen(port,() => {
    console.log('Server is listening in port ' + port)
})