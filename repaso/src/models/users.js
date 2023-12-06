const mongoose = require('mongoose')//manejador de base de datos

//un schema define las reglas de cómo se va a comportar una colección de registros
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingresa un correo válido"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Writer',
        enum: ['Admin', 'Writer']
    }
})

const User = mongoose.model('Users', userSchema)

module.exports = User