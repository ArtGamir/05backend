//importar desde users/index.js
const usersRoutes = require('./src/routes/users/index.js')

const express = require('express')
const app = express()
const port = 3000 //puerto estandar para crear apis

//importar midleware arriba de todas las rutas (para poder usar el body de PUT y POST)
app.use(express.json()) //este middleware modifica el request para que se pueda leer el JSON
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => { //'/'= path   get asigna un recurso 
  res.send('Hello World!')
})

/*app.get('/:id', (req, res) => { //'/'= path   get asigna un recurso 
  console.log(req.params);
  res.send(`Hello World Get Router Params! ${req.params.id}`)
})*/

/*app.get('/hi', (req, res) => {  
  res.send('Hi')
})*/

/*app.post('/', (req, res) => {
  console.log(req.body)
    res.status(201).send(`Hello ${req.body.name}` )
  })*/

/*app.delete('/', (req, res) => {
  res.status(201).send('Hello World post!')
})*/

//Asigna el ENDPOINT al módulo, usa la respuesta de users
app.use('/user', usersRoutes) //el string es el nombre del recurso (de la url)

app.use((rsp,req,res,next) =>{ //este es next
  res.status(rsp.status).send(rsp.send)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})