const express= require('express');
const app=express();
const path = require('path');
const bodyParser=require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

// Connections
mongoose.connect('mongodb://localhost:27017/kiosco',{ useNewUrlParser: true })
        .then(db=> console.log('DB Connected') )
.catch(err=> console.log('Fallo a conectar la base de datos', err) );

// config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs' );
app.use('/', express.static(__dirname + '/../public'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use('/', routes);


app.listen(app.get('port'), ()=> {
    console.log('Listenning to port: ' + app.get('port'));
});