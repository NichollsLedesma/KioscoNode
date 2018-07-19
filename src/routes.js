const routes = require('express').Router();
const mainController = require('./controllers/main');
const apiController = require('./controllers/api');
////////////////////////////////////////////////////////////////////////////////
routes.get('/', mainController.index);
routes.get('/producto', mainController.addProduto);
routes.get('/categoria', mainController.categoria)

////////////////////////////////////////////////////////////////////////////////
// producto
routes.get('/api/producto', apiController.listProducts);
routes.post('/api/producto', apiController.addProduct);
// categoria
routes.get('/api/categoria', apiController.listCategoria)
routes.post('/api/categoria', apiController.addCategoria)

////////////////////////////////////////////////////////////////////////////////
module.exports = routes;