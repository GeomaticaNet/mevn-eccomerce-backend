const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

const cliente_router = require('./routes/cliente');
const usuario_router = require('./routes/usuario');


app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyparser.json({ limit: '50mb', extended: true }));



// Solución 3: Uso de promesas en lugar de callbacks
mongoose.connect('mongodb://127.0.0.1:27017/tienda')
    .then(() => {
        // Si la conexión es exitosa, obtenemos el puerto del entorno o utilizamos el puerto 4201
        const port = process.env.port || 4201;
        // Iniciamos el servidor en el puerto especificado
        app.listen(port, function () {
            console.log('Servidor ejecutándose en el puerto ' + port);
        });
    })
    .catch((err) => {
        // Si hay un error al conectar a la base de datos, lo mostramos en la consola
        console.error('Error al conectar a la base de datos:', err);
    });


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', cliente_router);
app.use('/api', usuario_router);

// Exportamos la instancia de la aplicación para su uso en otros archivos
module.exports = app;




