const fs = require("fs")

//obtener información
fs.readFile("./practicaFileSystem.json", "utf-8", (err, data) =>{
    if (err) throw err    
//convertir la data en objeto
    let jsonData = JSON.parse(data)
    console.log(jsonData)
//agregar la nueva propiedad
    let newObject = {...jsonData, read: "true"}
    console.log(newObject)
//agregar saltos de línea

//convertir el objeto en string
    let newString = JSON.stringify(newObject)
//agregar el objeto con la nueva propiedad
    fs.unlink("./practicaFileSystem.json", (err) => {
        if (err) throw err
        fs.writeFile("./practicaFileSystem.json", newString, (err) => {
            if (err) throw err
        })
        console.log("Archivo modificado correctamente")
    })
}) 