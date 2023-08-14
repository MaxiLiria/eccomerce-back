const express = require('express');
const upload = require("../../middlewares/upload.file")
const {getProductsByID,getProducts, postProducts, putProducts, deleteProducts} = require('../controllers/products.controller');

const ProductsRoutes = express.Router();

ProductsRoutes.get("/id/:id",getProductsByID)

ProductsRoutes.get('/', getProducts)

ProductsRoutes.post('/', upload.single("foto"), postProducts)

ProductsRoutes.put('/:id', upload.single("foto"), putProducts)

ProductsRoutes.delete('/:id', deleteProducts)

module.exports= ProductsRoutes;