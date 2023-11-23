//CLI para creación de archivos para proyecto web 
const fs = require ('fs')

//Recopilar datos
let comandInput = process.argv[2]

//comando init <nombre_del_proyecto>
let comandInit = () => {   
    fs.mkdir(`${process.argv[3]}`, (err) =>{ //pude asignar los index de process a variables
        if (err) throw err
        fs.writeFile(`${process.argv[3]}/index.html`, "", (err) =>{
            if (err) throw err
        fs.mkdir(`${process.argv[3]}/html`, (err) =>{
            if (err) throw err})
        fs.mkdir(`${process.argv[3]}/js`, (err) =>{
            if (err) throw err})
        fs.mkdir(`${process.argv[3]}/css`, (err) =>{
            if (err) throw err})
        console.log("Proyecto creado correctamente")
        })
    })
}

//Comando html <nombre_del_archivo>
let comandHtml = () => { 
    fs.writeFile(`${process.argv[3]}/html/${process.argv[4]}.html`, "", (err) =>{
        if (err) throw err
        console.log("Archivo creado correctamente")
    })
}

//Comando js <nombre_del_archivo>
let comandJs = () => { 
    fs.writeFile(`${process.argv[3]}/js/${process.argv[4]}.js`, "", (err) =>{
        if (err) throw err
        console.log("Archivo creado correctamente")
    })
}

//Comando css <nombre_del_archivo>
let comandCss = () => { 
    fs.writeFile(`${process.argv[3]}/css/${process.argv[4]}.css`, "", (err) =>{
        if (err) throw err
        console.log("Archivo creado correctamente")
    })
}

//llamado de función
if(comandInput === "init"){comandInit()} //en lugar de if() pude haber usado switch()
else if(comandInput === "html"){comandHtml()}
else if(comandInput === "js"){comandJs()}
else if(comandInput === "css"){comandCss()}