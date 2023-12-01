const mongoose = require("mongoose")

module.exports = {
    connect: async () => {
        let conection = await mongoose.connect('mongodb+srv://artgamir:WL3MrMHQXUW0r7LG@cluster0.m28q23f.mongodb.net/firstDataBase');
        if(conection) console.log("DB Connected")
    },
    disconnect: (done) => {
        mongoose.disconnect(done)
    }
}