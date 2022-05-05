module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});
}

module.exports = function(application){
	application.post('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application, req, res);
	});
}