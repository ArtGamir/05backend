module.exports = {
    getAll: async (req, res, next) => {
     next({status: 200, send: {msg: "Publicaciones", data: []}})
    },
    getById: async (req, res, next) => {
     next({status: 200, send: {msg: "Publicación encontrada", data: {}}})
    },
    post: async (req, res, next) => {
     next({status: 200, send: {msg: "Publicación creada", data: {}}})
    },
    put: async (req, res, next) => {
     next({status: 200, send: {msg: "Publicación actualizada", data: {}}})
    },
    delete: async (req, res, next) => {
     next({status: 200, send: {msg: "Publicación eliminada", data: {}}})
    },
 }