// setting up router and routes
const express = require('express');
const pizzasRoute = express.Router();


// data object
const pizzas = require('../db/pizza.js');


// output a specific pizza
pizzasRoute.get('/:id', function(req, res) {

	let arrPizza = pizzas.filter(pizza => pizza.flavorKey == req.params.id);
	res.render('./pizza/pizza-single', {pizza: arrPizza});
});


// output all pizzas
pizzasRoute.get('/', function(req, res) {

	let data = {
		strTitle: 'Pizzas',
		arrPizzas: pizzas
	}
	res.render('./pizza/pizza-index', data);
});


module.exports = pizzasRoute;
