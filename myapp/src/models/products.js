const mongoose = require("mongoose")

//define las reglas de los campos de los usuarios de la aplicación
const productSchema = new mongoose.Schema({
   name: {type: String},
   price: {type: String},
});

//modelo (aplica el Schema)
const Products = mongoose.model("Products", productSchema)
module.exports = Products
