const express = require('express')
const router = express.Router() //importa Router, es el objeto que genera las rutas de app.js a las carpetas de rutas
const fs = require('fs') //importa file system

const pathRouter = `${__dirname}` //dirname es una variable global que identifica la ruta relativa de la aplicación

const removeExtension = (fileName) => { //remueve la extensión de los archivos leídos de fs
    return fileName.split(".").shift()
}

fs.readdirSync(pathRouter).filter((file) => { //lee todos los archivos de la ruta actualdel script
    const fileWithOutExt = removeExtension(file) //remueve su extensión
    const skip = ["index"].includes(fileWithOutExt) //letodos los archivos menos sí mismo "index"
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //asigna todos los recursos encontrados en la ruta actual al router
    }
})

router.get("*", (req, res) => { //todo lo que no haga match con el recurso fileWithOutExt retornalo con código de error
    res.status(404)
    res.send({error: "Not found"})  
})

module.exports = router

//en resumen este script lee users.js y todos los archivos contenidos en este directorio
//este conecta app.js con todas las rutas