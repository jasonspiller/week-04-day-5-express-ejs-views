/* setting up router */
const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', function(req, res) {
	let data = {title: 'Welcome!'};
	res.render('index', data);
});

module.exports = indexRoute;
