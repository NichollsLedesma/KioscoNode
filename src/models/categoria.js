const mongoose = require('mongoose');

const categoria = new mongoose.Schema({
    nombre: String
});

module.exports = mongoose.model('Categoria', categoria);