const http = require('http');

http.createServer((req, res) => {

        let salida = {
            nombre: 'Alexander',
            edad: '39',
            url: req.url
        };

        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');