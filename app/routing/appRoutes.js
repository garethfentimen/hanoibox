'use strict';
module.exports = function(router) {

	router.get('/', function(req, res) {
		var data = { title: 'Hanoi Box' };
		res.render('home', data);
	});
	
	router.get('/home', function(req, res) {
		var data = { title: 'Hanoi Box' };
		res.render('home', data);
	});

	router.get('/sysadmin', function(req, res) {
		var data = { title: 'Hanoi Box Admin' };
		res.render('sysadmin/adminhome', data);
	});

	return router;
};