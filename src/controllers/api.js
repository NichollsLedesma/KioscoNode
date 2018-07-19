// const mongoose = require('mongoose');
const Category = require('./../models/categoria');

exports.listProducts = (req, res) => {
    res.send('Index API');
}
exports.addProduct = (req, res) => {
    res.redirect('/api/producto');
}
exports.listCategoria = async (req, res) => {
    let categorias = await Category.find();
    // console.log(categorias);
    await res.send(categorias);
}
exports.addCategoria = async (req, res) => {
    let categoria = new Category(req.body);
    console.log(categoria);
    await categoria.save();
    res.redirect('/categoria');
}