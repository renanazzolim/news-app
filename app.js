var app = require('./config/server');

/*
    cria as rotas apontando para o diretório de routes.
    O (app) é passado como parametro da função na route,
    pois na linha 1 o configurador do server usa a variável app
    
<!-- é desconsiderado quando utiliza o consign (ver server.js)
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);-->
*/

app.listen(3000, function () {
    console.log('Servidor is online on localhost:3000');
});