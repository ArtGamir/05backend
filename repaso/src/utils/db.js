const mongoose = require("mongoose")
const URI = process.env.URI //importa el uri desde .env
module.exports = {
    connect: async() => {
        let conection = await mongoose.connect(URI)
        if (conection) console.log("DB Connected")
    },
    disconnect: (done) => { //buena práctica ponerlo aunque no se ejecuta ahora, se usa si se rompe el servidor y necesitamos desconectarlo
        mongoose.disconnect(done)
    }
}