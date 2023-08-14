const { deleteFile } = require('../../middlewares/delete.file');
const Product = require("../models/products.model")

const getProductsByID = async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await Product.findById(id);
        if(!movie){
           return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
        }
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getProducts = async(req, res) => {
    try {
        const allProducts = await Product.find();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postProducts = async(req, res) => {
    try {
        console.log(req.file);
        const newProduct = new Product(req.body);
        if (req.file) {
            newProduct.foto = req.file.path;
        }
        const createdProduct = await newProduct.save();   
        return res.status(201).json(createdProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putProducts = async(req, res) => {
    try {
        const {id} = req.params;
        const putProduct = new Product(req.body);
        putProduct._id = id;
        if (req.file) {
            putProduct.foto = req.file.path;
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, putProduct, {new: true});
        if(!updatedProduct){
            return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
         }
         if(updatedProduct.foto !== putProduct.foto){
            deleteFile(updatedProduct.foto);
        }
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteProducts = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
         }
        return res.status(200).json(deleteProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getProductsByID,getProducts, postProducts, putProducts, deleteProducts}