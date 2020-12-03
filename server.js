const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Comando para cargar en Heroku y que nos permita un puerto libre
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'veronica',

    });
});

app.get('/about', function(req, res) {

    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});