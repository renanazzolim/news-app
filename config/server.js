var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs'); // altera tipo de engine para poder separar o html do código principal
app.set('views', './app/views'); // caminho de views (alterado o padrão do app.js (main) para o diretório atual)

app.use(bodyParser.urlencoded({extended: true}));

/*
automaticamente vê todos os requires do diretório setado e disponibiliza dentro 
do app (servidor) -> serve para não ficar fazendo vários requires de pages no app.js
- mesma situação para o dbConnection
*/
consign()
    .include('app/routes')
    .then('config/dbConnection.js') // necessário apontar extensão pois senão o consign vai entender que é um diretório e irá procurar pelos sub-diretórios
    .then('app/models') // todas as models serão carregadas no autoload
    .into(app); 

module.exports = app;