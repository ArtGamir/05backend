//console.log(process.argv)

//Script que imprime el doble de un número
/*let number = process.argv[2]

console.log("El doble del número es:",number*2)*/

//Script que imprima el promedio del alumno, si no exixte, imprimir un mensaje de error
/*const alumnos = {
    Juan: [10,5,8,9,7],
    Diana: [10,9,9,8,10],
    Roberto: [6,8,5,9,10]
   }

const nameInput = process.argv[2]

   let promedioFunction = (nameInput) => {
    if(alumnos[nameInput]){
        let suma = alumnos[nameInput].reduce((accum, calification)=>
            accum + calification, 0)
        let promedio = suma/alumnos[nameInput].length
        console.log (promedio)} else {console.log("Alumno no encontrado")}
    }

    promedioFunction(nameInput)*/

// Script que reciba una cantidad indefinida de nombres e imprima cuántos nombres se ingresaron
// Crear o recopilar datos
const nameListInput = process.argv

//Iterar esos datos
let nameCounter = nameListInput.length-2
//Empaquetar el resultado de esa iteración

//Mostrar ese paquete
console.log(nameCounter)
    

