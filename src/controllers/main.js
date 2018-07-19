// const mongoose = require('mongoose');
const axios = require('axios');

exports.index = (req, res) => {
    res.render('index');
}
exports.addProduto = (req, res) => {
    res.render('addProducto');
}
exports.categoria = (req, res) => {
    // let data=[{id: 1, nombre: 'sad'}];
    axios.get('http://localhost:3000/api/categoria').then(response=>{
        res.send(response.json());

    }).catch(err=>{
        console.log("Error",err);
    })
    // res.redirect('/categoria');
    // res.render('categoria', {
    //     categorias: data
    // });
}