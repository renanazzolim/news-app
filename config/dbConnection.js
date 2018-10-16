var mysql = require('mysql');

var connMySQL = function() {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Ren@n270994',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    // retorna variável que contém a funcão, assim pode-se executar a função
    return connMySQL;
}

