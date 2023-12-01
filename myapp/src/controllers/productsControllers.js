//const users = "./src/db/users.json" //se escribe como si navegaramos desde app.js porque estamos ejecutando este script desde ahí
const fs = require('fs')
const Products = require('../models/products')

module.exports = {
    getProduct: async (req, res, next) => {  
        try {
          const { id } = req.params
          let products = await Products.findById(id).populate("Seller")
          next({status: 200, send:{msg:"Producto encontrado", data: products}})
        } catch (error){
        next({status: 404, send: {msg: "Producto no encontrado", err: error}})
        }
      },

    addProduct: async (req, res, next) => {
    try {
      let product = await Products.create(req.body)
      next ({status: 201, send: {msg: "Producto creado", data: product}})
    } catch (error){
      next({status: 400, send: {msg: "Producto no creado", err: error}})
    }   
  }
}