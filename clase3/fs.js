const fs = require("fs")

///////////Funciones de archivos////////////
//Escribe un archivo nuevo
/*fs.writeFile("./test.txt", "Hola Koders", (error) => {
    if (error) throw error //cuando if tiene una sola línea no es necesario poner {}
    console.log("Archivo creado correctamente")
})

//lee un archivo
fs.readFile("./test.txt", "utf-8", (err, data) =>{
    if (err) throw err
    console.log(data)
})

//Modifica un archivo
fs.appendFile("./test.txt"," new text", (err) => {
    if (err) throw err
    console.log("Archivo modificado correctamente")
})

//Eliminar un archivo
fs.unlink("./test.txt", (err => { 
    if (err) throw err
    console.log("Archivo eliminado")
}))*/

///////////Funciones de carpetas///////////
//Crear una carpeta
fs.mkdir("./newFolder", (err) => {
    if (err) throw err
    console.log("Carpeta creada correctamente")
})

//Borrar una carpeta
fs.rmdir("./newFolder", {recursive: false}, (err=>{
    if (err) throw err
    console.log("Carpeta eliminada")
}))

//Leer una carpeta
fs.readdir("./newFolder", {withFileTypes: false} , (error, files) => {
    if (err) throw error
    files.forEach(f => {
        console.log(f)
    })
})

//Funciones anidadas para ejecución secuencial
fs.mkdir("./newFolder", (err) => {
    if (err) throw err
    console.log("Carpeta creada correctamente")
    fs.writeFile("./newFolder/test.txt", "Hola Koders", (error) => {
        if (error) throw error //cuando if tiene una sola línea no es necesario poner {}
        console.log("Archivo creado correctamente")
        fs.readdir("./newFolder", {withFileTypes: false} , (error, files) => {
            if (err) throw error
            files.forEach(f => {
                console.log(f)
            })
        })
    })
})