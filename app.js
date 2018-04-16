/* dependencies & app setup */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

// set up views
app.set('views', './views');
app.set('view engine', 'ejs');

// data object
const pizza = require('./db/pizza.js');


// home page
app.get('/', (req, res) => {
	let data = {title: 'Welcome!'}
	res.render('index', data);
});

// all pizzas page
app.get('/pizzas', (req, res) => {
	let data = {
		strTitle: 'Pizzas',
		arrPizzas: pizza
	}
	res.render('pizza/pizza-index', data);
});

// specific pizza page
app.get('/pizzas/:id', (req, res) => {
	let data = {
		strTitle: 'Pizza',
		arrPizzas: pizza
	}
	res.render('pizza/pizza-single', data);
});


// last resort 404
app.get('*', (req, res) => {
	res.sendFile('/404.html', {root:'public'});
});

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Hello Dave.`);
});
