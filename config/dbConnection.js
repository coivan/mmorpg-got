var mongo = require('mongodb');

var connMongoDB = function() {
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //endereço do servidor
            27017, //porta de conexão
            {} //opções de configuração do servidor
        ),
        {} //configurações opcionais
    );
    return db;
}

module.exports = function() {
    return connMongoDB;
}