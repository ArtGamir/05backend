const fs = require ('fs')

//este es el equivalente de escribir async:
let example = new Promise((resolve, reject) => {
    fs.readfile('../clase3/practicaFileSystem.json', 'utf-8', (err, data) =>{
        if (err) reject (err)
        resolve(data)
    })
})

//este es el equivalente de escribir await:
example.then((data) => {
    console.log(data)
}).catch((err) => {
    consolelog(err)
}).finally(() =>{
    console.log("esto siempres se ejecuta")
})